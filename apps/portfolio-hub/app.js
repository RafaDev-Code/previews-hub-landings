const cards = document.querySelector("#cards");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const landingCount = document.querySelector("#landingCount");
const liveCount = document.querySelector("#liveCount");
const previewTitle = document.querySelector("#previewTitle");
const previewMeta = document.querySelector("#previewMeta");
const previewLink = document.querySelector("#previewLink");
const previewEmpty = document.querySelector("#previewEmpty");
const previewFrame = document.querySelector("#previewFrame");

let landings = [];
let activeCategory = "Todas";
let query = "";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function filteredDemos() {
  const needle = query.trim().toLowerCase();

  return landings.filter((landing) => {
    const categoryMatches = activeCategory === "Todas" || landing.category === activeCategory;
    const text = [landing.title, landing.category, landing.variant, landing.mode, landing.summary, landing.projectName]
      .join(" ")
      .toLowerCase();

    return categoryMatches && (!needle || text.includes(needle));
  });
}

function renderFilters() {
  const categories = ["Todas", ...new Set(landings.map((landing) => landing.category))];

  filters.innerHTML = categories
    .map((category) => {
      const count =
        category === "Todas" ? landings.length : landings.filter((landing) => landing.category === category).length;
      return `
        <button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${escapeHtml(category)}">
          ${escapeHtml(category)}
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderCards() {
  const list = filteredDemos();
  landingCount.textContent = landings.length;
  liveCount.textContent = landings.filter((landing) => Boolean(landing.publicUrl)).length;

  if (!list.length) {
    cards.innerHTML = `
      <div class="empty">
        <strong>Sin resultados</strong>
        <p>Cambia la busqueda o el filtro activo.</p>
      </div>
    `;
    return;
  }

  cards.innerHTML = list
    .map((landing) => {
      const hasUrl = Boolean(landing.publicUrl);
      const action = hasUrl
        ? `<button class="button primary" type="button" data-preview="${escapeHtml(landing.id)}">Preview</button>`
        : `<span class="button disabled">URL pendiente</span>`;

      return `
        <article class="card">
          <div class="card-body">
            <div class="card-meta">
              <span>${escapeHtml(landing.category)}</span>
              <span>${escapeHtml(landing.mode)}</span>
            </div>
            <h2>${escapeHtml(landing.title)}</h2>
            <p>${escapeHtml(landing.summary)}</p>
            <div class="deploy-meta">
              <span>${escapeHtml(landing.variant)}</span>
              <span>${escapeHtml(landing.projectName)}</span>
            </div>
            <div class="card-footer">
              ${action}
              ${
                hasUrl
                  ? `<a class="button secondary" href="${escapeHtml(landing.publicUrl)}" target="_blank" rel="noreferrer">Abrir</a>`
                  : ""
              }
              <code>${escapeHtml(landing.rootDirectory)}</code>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  renderFilters();
  renderCards();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  render();
});

search.addEventListener("input", (event) => {
  query = event.target.value;
  renderCards();
});

cards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-preview]");
  if (!button) return;
  const landing = landings.find((item) => item.id === button.dataset.preview);
  if (!landing || !landing.publicUrl) return;

  previewTitle.textContent = landing.title;
  previewMeta.textContent = `${landing.category} / ${landing.variant}`;
  previewLink.href = landing.publicUrl;
  previewLink.classList.remove("hidden");
  previewEmpty.classList.add("hidden");
  previewFrame.classList.remove("hidden");
  previewFrame.src = landing.publicUrl;
});

const response = await fetch("data/landings.json");
landings = await response.json();
render();

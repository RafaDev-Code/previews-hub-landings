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
const compareFrames = document.querySelector("#compareFrames");
const compareCount = document.querySelector("#compareCount");
const compareSelected = document.querySelector("#compareSelected");
const clearCompare = document.querySelector("#clearCompare");

let landings = [];
let activeCategory = "Todas";
let query = "";
let selected = new Set();
let mode = "preview";
let activePreviewId = "";

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
      const isSelected = selected.has(landing.id);
      const action = hasUrl
        ? `<button class="button primary" type="button" data-preview="${escapeHtml(landing.id)}">Preview</button>`
        : `<span class="button disabled">URL pendiente</span>`;

      return `
        <article class="card ${isSelected ? "selected" : ""}">
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
              <label class="compare-toggle">
                <input
                  type="checkbox"
                  data-select="${escapeHtml(landing.id)}"
                  ${isSelected ? "checked" : ""}
                  ${hasUrl ? "" : "disabled"}
                >
                Comparar
              </label>
              <code>${escapeHtml(landing.rootDirectory)}</code>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  renderCompareControls();
}

function render() {
  renderFilters();
  renderCards();
  renderPanel();
}

function renderCompareControls() {
  const count = selected.size;
  compareCount.textContent = `${count} seleccionada${count === 1 ? "" : "s"}`;
  compareSelected.disabled = count === 0;
  clearCompare.disabled = count === 0;
}

function setPreview(landing) {
  mode = "preview";
  activePreviewId = landing.id;
  renderPanel();
}

function renderPanel() {
  if (mode === "compare") {
    renderCompare();
    return;
  }

  const landing = landings.find((item) => item.id === activePreviewId);
  compareFrames.classList.add("hidden");
  compareFrames.innerHTML = "";

  if (!landing || !landing.publicUrl) {
    previewTitle.textContent = "Selecciona una landing";
    previewMeta.textContent = "El preview aparece cuando la URL publica esta configurada.";
    previewLink.classList.add("hidden");
    previewEmpty.classList.remove("hidden");
    previewFrame.classList.add("hidden");
    previewFrame.removeAttribute("src");
    return;
  }

  previewTitle.textContent = landing.title;
  previewMeta.textContent = `${landing.category} / ${landing.variant}`;
  previewLink.href = landing.publicUrl;
  previewLink.classList.remove("hidden");
  previewEmpty.classList.add("hidden");
  previewFrame.classList.remove("hidden");
  previewFrame.src = landing.publicUrl;
}

function renderCompare() {
  const items = Array.from(selected)
    .map((id) => landings.find((landing) => landing.id === id))
    .filter((landing) => landing && landing.publicUrl);

  previewFrame.classList.add("hidden");
  previewFrame.removeAttribute("src");
  previewLink.classList.add("hidden");

  if (!items.length) {
    mode = "preview";
    activePreviewId = "";
    renderPanel();
    return;
  }

  previewTitle.textContent = "Comparacion de landings";
  previewMeta.textContent = `${items.length} preview${items.length === 1 ? "" : "s"} publicas`;
  previewEmpty.classList.add("hidden");
  compareFrames.classList.remove("hidden");

  compareFrames.innerHTML = items
    .map(
      (landing) => `
        <article class="compare-frame">
          <div class="compare-frame-head">
            <div>
              <strong>${escapeHtml(landing.title)}</strong>
              <span>${escapeHtml(landing.category)} / ${escapeHtml(landing.variant)}</span>
            </div>
            <a class="button secondary" href="${escapeHtml(landing.publicUrl)}" target="_blank" rel="noreferrer">Abrir</a>
          </div>
          <iframe title="${escapeHtml(landing.title)} preview" src="${escapeHtml(landing.publicUrl)}"></iframe>
        </article>
      `,
    )
    .join("");
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

  setPreview(landing);
});

cards.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-select]");
  if (!checkbox) return;

  if (checkbox.checked) {
    selected.add(checkbox.dataset.select);
  } else {
    selected.delete(checkbox.dataset.select);
  }

  renderCards();
  if (mode === "compare") {
    renderCompare();
  }
});

compareSelected.addEventListener("click", () => {
  if (!selected.size) return;
  mode = "compare";
  renderCompare();
});

clearCompare.addEventListener("click", () => {
  selected = new Set();
  mode = "preview";
  activePreviewId = "";
  renderCards();
  renderPanel();
});

const response = await fetch("data/landings.json");
landings = await response.json();
render();

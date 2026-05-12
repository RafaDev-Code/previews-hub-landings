import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=80";

const featured = [
  {
    name: "Old fashioned ahumado",
    detail: "Bourbon, bitter aromatico y piel de naranja.",
    price: "$ 8.400",
    tag: "Signature",
    image:
      "https://images.unsplash.com/photo-1551751299-1b51cab2694c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bife cortado",
    detail: "Lomo grillado, papas finas y salsa de pimienta.",
    price: "$ 15.900",
    tag: "Cocina",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vermut rosso",
    detail: "Botanicos, soda fria y oliva verde.",
    price: "$ 5.900",
    tag: "Vermut",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tortilla final",
    detail: "Papa, huevo cremoso y alioli picante.",
    price: "$ 8.200",
    tag: "Tapas",
    image:
      "https://images.unsplash.com/photo-1604908812863-474369e5c68b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Spritz seco",
    detail: "Aperitivo, espumante y pomelo.",
    price: "$ 7.100",
    tag: "Aperitivo",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tabla de fuego",
    detail: "Quesos, focaccia, pickles y embutidos.",
    price: "$ 13.700",
    tag: "Mesa",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Direccion", "Av. Caseros 4210", "Parque Patricios"],
  ["Horario", "Mie-dom 20:00-02:00", "Cocina hasta 01:00"],
  ["Reservas", "+54 11 5555-4242", "Mesas y eventos"],
  ["Servicio", "Barra, salon y patio", "Pago en mesa"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80",
    "Cocteles servidos sobre mesa oscura",
  ],
  [
    "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1000&q=80",
    "Carne grillada para compartir",
  ],
  [
    "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
    "Sandwich caliente de barra",
  ],
  [
    "https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=1000&q=80",
    "Barra de noche con luces rojas",
  ],
  [
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80",
    "Copas de vino alineadas",
  ],
  [
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1000&q=80",
    "Botellas iluminadas detras de la barra",
  ],
];

const categories = ["Cocteles", "Vermut", "Tapas", "Cervezas", "Sin alcohol"];
const slots = ["20:45", "21:30", "22:15"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rojo Norte | Bar nocturno y reservas" },
    {
      name: "description",
      content:
        "Landing premium para bar nocturno con hero cinematografico, menu QR y reservas.",
    },
  ];
}

function SectionTitle({
  number,
  title,
  detail,
}: {
  number: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="section-title">
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
}

function QrMark() {
  return (
    <div className="qr-mark" aria-hidden="true">
      {Array.from({ length: 25 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="ferrari-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rojo Norte">
          RN
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Tragos</a>
          <a href="#galeria">Galeria</a>
          <a href="#reservas">Reservas</a>
        </nav>
        <a className="button primary" href="#reservas">
          Reservar mesa
        </a>
      </header>

      <section className="hero" id="top">
        <img src={heroImage} alt="Bar nocturno con cocteles y luces dramaticas" />
        <div className="hero-copy">
          <span className="eyebrow">Bar premium / Parque Patricios</span>
          <h1>Rojo Norte</h1>
          <p>
            Cocteles intensos, cocina de fuego y mesas de noche para reservar
            con precision.
          </p>
          <div className="actions">
            <a className="button primary" href="#reservas">
              Reservar mesa
            </a>
            <a className="button outline" href="#menu-qr">
              Ver tragos
            </a>
          </div>
        </div>
      </section>

      <section className="info-band" id="info">
        <div className="info-grid">
          {info.map(([label, value, note]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="destacados">
        <SectionTitle
          number="04"
          title="Pocos destacados, todos con caracter"
          detail="La carta reduce la eleccion a tragos y platos potentes, con precio visible."
        />
        <div className="feature-grid">
          {featured.map((item) => (
            <article className="menu-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" />
              <div>
                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="galeria">
        <SectionTitle
          number="05"
          title="Fotos de barra, fuego y movimiento"
          detail="Imagenes dramaticas para validar producto y clima antes de reservar."
        />
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => (
            <figure className={index === 0 ? "wide" : ""} key={src}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="menu-qr">
        <SectionTitle
          number="06"
          title="Menu QR sin vueltas"
          detail="Categorias base, precios y salida rapida a la reserva."
        />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span className="eyebrow">Carta activa</span>
            <h3>Cocteles, vermut, tapas, cervezas y sin alcohol.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button outline" href="#reservas">
            Abrir QR
          </a>
        </div>
      </section>

      <section className="section" id="reservas">
        <SectionTitle
          number="07"
          title="Reserva precisa para la noche"
          detail="Dia, horario, cantidad y confirmacion por WhatsApp."
        />
        <div className="booking-panel">
          <div>
            <span className="eyebrow">Mesa confirmada</span>
            <h3>Bloques de 90 minutos desde las 20:00</h3>
            <p>Para eventos o cumpleaños se toma seña y se arma menu fijo.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Fecha
              <input type="date" defaultValue="2026-05-15" />
            </label>
            <label>
              Personas
              <select defaultValue="4 personas">
                <option>2 personas</option>
                <option>4 personas</option>
                <option>6 personas</option>
                <option>8 personas</option>
              </select>
            </label>
            <div className="slot-row">
              {slots.map((slot) => (
                <button type="button" key={slot}>
                  {slot}
                </button>
              ))}
            </div>
            <button className="button primary form-submit" type="submit">
              Confirmar reserva
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <span className="eyebrow">08 / CTA final</span>
        <h2>Una mesa, una barra encendida y la noche lista.</h2>
        <div className="actions">
          <a className="button primary" href="#reservas">
            Reservar mesa
          </a>
          <a className="button outline" href="#menu-qr">
            Ver tragos
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Rojo Norte</strong>
        <span>Av. Caseros 4210</span>
        <a href="#menu-qr">Menu QR</a>
        <a href="#reservas">Reservas</a>
      </footer>
    </main>
  );
}

import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&w=1600&q=80";

const featured = [
  ["20:00", "Coctel", "Tonic turbo", "Gin seco, lima, pepino y tonic", "$ 7.400"],
  ["20:15", "Vermut", "Rojo con soda", "Naranja, aceituna y sifon frio", "$ 5.500"],
  ["20:40", "Tapas", "Croquetas de queso", "Aioli de limon y pimenton", "$ 6.200"],
  ["21:00", "Cerveza", "Lager nitida", "Tirada local en pinta helada", "$ 4.800"],
  ["21:30", "Autor", "Sour violeta", "Pomelo, cordial y bitter floral", "$ 7.900"],
  ["22:00", "Sin alcohol", "Ginger fizz", "Jengibre, menta y soda", "$ 4.900"],
];

const info = [
  ["BARRIO", "Chacarita", "A metros de Dorrego"],
  ["HORARIO", "Jue-dom 18:30-02:00", "Cocina hasta 00:45"],
  ["CONTACTO", "+54 11 5555-2030", "Reservas por WhatsApp"],
  ["AGENDA", "DJ set + visuales", "Viernes desde las 22:30"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
    "Cocteles de colores en una mesa",
  ],
  [
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    "Platos pequeños listos para compartir",
  ],
  [
    "https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=900&q=80",
    "Barra con luces bajas",
  ],
  [
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    "Trago servido con hielo",
  ],
  [
    "https://images.unsplash.com/photo-1508253730651-e5ace80a7025?auto=format&fit=crop&w=900&q=80",
    "Mesa de bar con copas",
  ],
  [
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
    "Estantes de botellas iluminadas",
  ],
];

const categories = ["Cocteles", "Vermut", "Tapas", "Cervezas", "Sin alcohol"];
const slots = ["20:00", "21:00", "22:30"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voltaje Bar | Agenda, tragos y reservas" },
    {
      name: "description",
      content:
        "Landing editorial para bar nocturno con destacados, galeria, menu QR y reservas.",
    },
  ];
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

function SectionTitle({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="section-title">
      <span>{number} / {label}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="verge-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Voltaje Bar">
          VOLTAJE
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Tragos</a>
          <a href="#galeria">Galeria</a>
          <a href="#reservas">Agenda</a>
        </nav>
        <a className="button primary" href="#reservas">
          Reservar mesa
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="soft-kicker">Bar editorial / Chacarita</span>
          <h1>Voltaje Bar abre la noche con cocteles, tapas y pista chica.</h1>
          <p>
            Una carta liquida de alto contraste, cocina rapida de barra y agenda
            semanal para reservar antes de que se llene el salon.
          </p>
          <div className="actions">
            <a className="button primary" href="#reservas">
              Reservar mesa
            </a>
            <a className="button secondary" href="#menu-qr">
              Ver tragos
            </a>
            <a className="button outline" href="#reservas">
              Agenda
            </a>
          </div>
        </div>
        <figure className="hero-card">
          <img src={heroImage} alt="Bar lleno con luces bajas y cocteles" />
          <figcaption>
            <span>22:30 / DJ set</span>
            <strong>Viernes: sintetizadores, vermut y cocina hasta tarde.</strong>
          </figcaption>
        </figure>
      </section>

      <section className="section" id="info">
        <SectionTitle number="03" label="Info" title="Lo que importa antes de salir" />
        <div className="info-grid">
          {info.map(([label, value, note], index) => (
            <article className={index === 0 ? "info-card accent" : "info-card"} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="destacados">
        <SectionTitle number="04" label="StoryStream" title="Seis hits de barra para pedir hoy" />
        <div className="story-stream">
          {featured.map(([time, tag, name, detail, price], index) => (
            <article className={`story-card tone-${index}`} key={name}>
              <time>{time}</time>
              <div>
                <span>{tag}</span>
                <h3>{name}</h3>
                <p>{detail}</p>
              </div>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="galeria">
        <SectionTitle number="05" label="Galeria" title="Fotos que prueban la noche" />
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => (
            <figure className={index === 1 ? "tall" : ""} key={src}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="menu-qr">
        <SectionTitle number="06" label="Menu QR" title="La carta completa en modo rapido" />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span className="mono-label">QR / PRECIOS VISIBLES</span>
            <h3>Cocteles, vermut, tapas, cerveza tirada y opciones sin alcohol.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button outline" href="#reservas">
            Compartir
          </a>
        </div>
      </section>

      <section className="section" id="reservas">
        <SectionTitle number="07" label="Reservas y eventos" title="Agenda una mesa o un festejo" />
        <div className="booking-panel">
          <div className="booking-copy">
            <span className="mono-label">HOY / CHACARITA</span>
            <h3>Mesas, cumpleaños y previa con lista</h3>
            <p>Elegimos el mejor bloque disponible y confirmamos por WhatsApp.</p>
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
              Reservar mesa
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <span className="mono-label">08 / CIERRE</span>
        <h2>La nota de hoy: vermut, pista chica y mesa reservada.</h2>
        <div className="actions">
          <a className="button primary" href="#reservas">
            Reservar mesa
          </a>
          <a className="button secondary" href="#menu-qr">
            Ver tragos
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Voltaje Bar</span>
        <a href="#info">Chacarita</a>
        <a href="#menu-qr">Menu QR</a>
        <a href="#reservas">Reservas</a>
      </footer>
    </main>
  );
}

import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80";

const featured = [
  {
    name: "Negroni bajo cero",
    detail: "Gin, vermut rojo, bitter y hielo tallado.",
    price: "$ 7.900",
    tag: "Coctel",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vermut de la casa",
    detail: "Vermut rojo, soda, naranja y aceituna.",
    price: "$ 5.800",
    tag: "Vermut",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tostado fugaz",
    detail: "Queso, jamon natural y pan de masa madre.",
    price: "$ 6.600",
    tag: "Tapas",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "IPA rotativa",
    detail: "Tirada fresca de productores locales.",
    price: "$ 4.900",
    tag: "Cerveza",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sour de pomelo",
    detail: "Pomelo rosado, cordial citrico y clara.",
    price: "$ 7.500",
    tag: "Autor",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mesa de tapeo",
    detail: "Aceitunas, dips, queso estacionado y focaccia.",
    price: "$ 11.300",
    tag: "Mesa",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Direccion", "Gorriti 4872", "Palermo Soho"],
  ["Horario", "Mar-dom 19:00-01:30", "Cocina hasta 00:30"],
  ["Reservas", "+54 11 5555-1840", "WhatsApp activo"],
  ["Agenda", "DJ set vie y sab", "Happy hour 19:00-21:00"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1100&q=80",
    "Barra iluminada con botellas y copas",
  ],
  [
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80",
    "Cocteles servidos en mesa de bar",
  ],
  [
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
    "Tapas y platos para compartir",
  ],
  [
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
    "Mesa de noche con amigos",
  ],
  [
    "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=900&q=80",
    "Bartender preparando un trago",
  ],
  [
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    "Copas de vino en barra oscura",
  ],
];

const categories = ["Cocteles", "Vermut", "Tapas", "Cervezas", "Sin alcohol"];
const slots = ["20:30", "21:15", "22:00"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bajo Fondo | Bar, cocteles y reservas" },
    {
      name: "description",
      content:
        "Landing para bar nocturno con menu QR, galeria, destacados y reservas.",
    },
  ];
}

function SectionTitle({
  number,
  kicker,
  title,
  detail,
}: {
  number: string;
  kicker: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="section-title">
      <div>
        <span>{number} / {kicker}</span>
        <h2>{title}</h2>
      </div>
      <p>{detail}</p>
    </div>
  );
}

function PlayIcon() {
  return <span className="play-icon" aria-hidden="true" />;
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
    <main className="spotify-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bajo Fondo">
          <span className="brand-disc" />
          <span>Bajo Fondo</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Tragos</a>
          <a href="#galeria">Galeria</a>
          <a href="#reservas">Reservas</a>
        </nav>
        <a className="header-cta" href="#menu-qr">
          Ver tragos
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Bar musical / Palermo</span>
          <h1>Bajo Fondo Bar</h1>
          <p>
            Cocteles de autor, vermut frio y platos para compartir en una barra
            oscura con agenda de musica cada fin de semana.
          </p>
          <div className="actions">
            <a className="button primary" href="#reservas">
              <PlayIcon />
              Reservar mesa
            </a>
            <a className="button secondary" href="#destacados">
              Ver tragos
            </a>
          </div>
          <div className="signal-row" aria-label="Estado del local">
            <span>Abierto hoy</span>
            <span>4.8 / 512 reseñas</span>
            <span>DJ set viernes</span>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="Barra nocturna con cocteles servidos" />
          <div className="now-card">
            <span>Esta noche</span>
            <strong>Vermut + tapas hasta las 21:00</strong>
            <a href="#reservas" aria-label="Reservar mesa">
              <PlayIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="info">
        <SectionTitle
          number="03"
          kicker="Info del local"
          title="Datos rapidos para venir hoy"
          detail="Direccion, horarios y agenda aparecen antes de navegar la carta."
        />
        <div className="info-grid">
          {info.map(([label, value, note]) => (
            <article className="info-card" key={label}>
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
          kicker="Destacados"
          title="La lista corta de la barra"
          detail="Seis opciones con precio visible, pensadas como tracks de la noche."
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
          kicker="Galeria"
          title="Barra, luces bajas y mesas"
          detail="Fotos de ambiente, cocina y tragos sin repetir los destacados."
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
          kicker="Menu QR"
          title="Carta completa desde la mesa"
          detail="Categorias claras, precios visibles y salida directa a WhatsApp."
        />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span className="eyebrow">Menu actualizado</span>
            <h3>Cocteles, vermut, tapas, cervezas y sin alcohol.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button secondary" href="#reservas">
            Abrir QR
          </a>
        </div>
      </section>

      <section className="section" id="reservas">
        <SectionTitle
          number="07"
          kicker="Reservas y eventos"
          title="Elegi horario y deja la mesa tomada"
          detail="Reserva breve para mesas, cumpleaños o previa con amigos."
        />
        <div className="booking-panel">
          <div>
            <span className="eyebrow">Reserva simple</span>
            <h3>Mesas de 2 a 8 personas</h3>
            <p>
              Confirmamos por WhatsApp. Las mesas se guardan 15 minutos desde
              el horario pactado.
            </p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Fecha
              <input type="date" defaultValue="2026-05-15" />
            </label>
            <label>
              Personas
              <select defaultValue="4">
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
              <PlayIcon />
              Confirmar reserva
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">08 / CTA final</span>
          <h2>La barra esta prendida. Reservas abiertas para esta noche.</h2>
          <p>Palermo Soho · Mar-dom 19:00-01:30 · Happy hour hasta las 21:00</p>
        </div>
        <div className="actions">
          <a className="button primary" href="#reservas">
            <PlayIcon />
            Reservar
          </a>
          <a className="button secondary" href="#menu-qr">
            Ver tragos
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Bajo Fondo Bar</span>
        <a href="#info">Gorriti 4872, Palermo</a>
        <a href="#menu-qr">Menu QR</a>
        <a href="#reservas">Reservas</a>
      </footer>
    </main>
  );
}

import type { Route } from "./+types/home";

const featured = [
  {
    name: "Mesa de domingo",
    price: "$ 12.500",
    tag: "Brunch",
    description: "Cafe, tostadas, huevos, frutas y panera para dos.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Medialuna tibia",
    price: "$ 1.700",
    tag: "Horno",
    description: "Manteca, almibar liviano y miga aireada.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cafe de casa",
    price: "$ 3.000",
    tag: "Cafe",
    description: "Espresso, latte o filtrado con blend suave.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pancakes fruta",
    price: "$ 7.900",
    tag: "Dulce",
    description: "Pancakes esponjosos, frutas, miel y crema.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tostado campo",
    price: "$ 6.800",
    tag: "Salado",
    description: "Pan rustico, queso, tomate, jamon y verdes.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jugo de estacion",
    price: "$ 3.400",
    tag: "Natural",
    description: "Naranja, pomelo o limonada de menta.",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Barrio", "Villa Crespo", "Mesa adentro y vereda soleada"],
  ["Direccion", "Malabia 980", "A dos cuadras de Corrientes"],
  ["Horario", "Mie-dom 08:00-15:00", "Brunch con reserva hasta 14:00"],
  ["Contacto", "+54 11 5520-7744", "Pedidos y reservas por WhatsApp"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Mesa de brunch con tostadas y cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    alt: "Cafe de especialidad en taza",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    alt: "Panera con facturas",
  },
  {
    src: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80",
    alt: "Pancakes de desayuno",
  },
  {
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
    alt: "Tostado rustico",
  },
  {
    src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80",
    alt: "Fruta y yogur para desayuno",
  },
];

const menuItems = [
  ["Combos", "Mesa de domingo", "$ 12.500"],
  ["Cafe", "Cafe de casa", "$ 3.000"],
  ["Panificados", "Medialuna tibia", "$ 1.700"],
  ["Tostados", "Tostado campo", "$ 6.800"],
  ["Jugos", "Jugo de estacion", "$ 3.400"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Alba | Desayuno y brunch" },
    {
      name: "description",
      content:
        "Landing de desayuno inspirada en fotografia, confianza y reserva cercana.",
    },
  ];
}

function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{detail}</p>
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
    <main className="landing airbnb-breakfast">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Casa Alba">
          <span className="brand-mark">A</span>
          <span>Casa Alba</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Combos</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Reservar</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir desayuno
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Brunch calido / Villa Crespo</span>
          <h1>Casa Alba</h1>
          <p>
            Un desayuno de barrio con mesa tranquila, panificados de horno y
            pedidos preparados para llevar.
          </p>
          <div className="search-card" aria-label="Reserva rapida">
            <span>Hoy</span>
            <span>2 personas</span>
            <span>08:30-12:30</span>
            <a href="#pedido">Buscar mesa</a>
          </div>
          <div className="status-row">
            <span>4.9 / 620 reseñas</span>
            <span>Reserva sin seña</span>
            <span>Take away 15 min</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=80"
            alt="Mesa de desayuno con tostadas, cafe y fruta"
          />
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Confianza antes de reservar"
          detail="Barrio, direccion, horario y contacto cerca del primer CTA."
        />
        <div className="info-grid">
          {info.map(([label, value, detail]) => (
            <article className="info-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" id="destacados">
        <SectionHeading
          eyebrow="Destacados"
          title="Combos con foto grande"
          detail="Cards generosas para elegir desayuno, brunch o take away."
        />
        <div className="feature-grid">
          {featured.map((item) => (
            <article className="menu-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" />
              <div>
                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-action">
                  <strong>{item.price}</strong>
                  <a href="#pedido">Pedir</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <SectionHeading
          eyebrow="Galeria"
          title="La mesa, el horno y el barrio"
          detail="Una grilla respirada de salon, producto y momentos de mañana."
        />
        <div className="gallery-grid">
          {gallery.map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </div>
      </section>

      <section className="qr-section" id="menu-qr">
        <div className="qr-copy">
          <SectionHeading
            eyebrow="Menu QR"
            title="Carta mobile para compartir"
            detail="Categorias claras, precios visibles y accion de pedido o reserva."
          />
          <div className="tab-row">
            {["Combos", "Cafe", "Panificados", "Tostados", "Jugos"].map(
              (tab) => (
                <span key={tab}>{tab}</span>
              ),
            )}
          </div>
        </div>
        <div className="qr-card">
          <QrMark />
          <div className="menu-list">
            {menuItems.map(([category, item, price]) => (
              <div key={category}>
                <span>{category}</span>
                <strong>{item}</strong>
                <small>{price}</small>
              </div>
            ))}
          </div>
          <a className="button button-primary" href="#pedido">
            Ver combos
          </a>
        </div>
      </section>

      <section className="order-section" id="pedido">
        <SectionHeading
          eyebrow="Pedido o brunch"
          title="Reservar mesa o pedir para llevar"
          detail="Horario, cantidad y contacto en un flujo corto."
        />
        <div className="order-panel">
          <form className="order-form">
            <label>
              Opcion
              <select>
                <option>Mesa de domingo</option>
                <option>Tostado campo</option>
                <option>Pancakes fruta</option>
              </select>
            </label>
            <label>
              Personas
              <input type="number" min="1" defaultValue="2" />
            </label>
            <label>
              Modo
              <select>
                <option>Mesa brunch</option>
                <option>Retiro</option>
                <option>Delivery</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Pedir desayuno
            </button>
          </form>
          <div className="reservation-note">
            <strong>Hoy hay mesas desde 09:15.</strong>
            <p>Confirmamos por WhatsApp con ubicacion y tiempo estimado.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Brunch hasta las 15:00</span>
          <h2>Elegir mesa o take away lleva menos de un minuto.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir desayuno
          </a>
          <a className="button button-secondary" href="#galeria">
            Ver galeria
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Casa Alba</span>
        <span>Malabia 980, Villa Crespo</span>
        <span>Desayuno, brunch y take away</span>
      </footer>
      <a className="mobile-sticky button button-primary" href="#pedido">
        Pedir desayuno
      </a>
    </main>
  );
}

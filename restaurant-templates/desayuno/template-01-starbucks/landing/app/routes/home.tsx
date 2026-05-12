import type { Route } from "./+types/home";

const featured = [
  {
    name: "Combo mañana",
    price: "$ 7.600",
    tag: "Favorito",
    description: "Cafe grande, medialuna de manteca y jugo chico.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tostado dorado",
    price: "$ 6.900",
    tag: "Pickup",
    description: "Jamon natural, queso fundido y pan de masa madre.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Yogur granola",
    price: "$ 5.800",
    tag: "Fresco",
    description: "Yogur natural, frutas de estacion y granola casera.",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Medialunas x 6",
    price: "$ 5.200",
    tag: "Mesa",
    description: "Horneadas temprano, almibar liviano y miga aireada.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Avocado toast",
    price: "$ 7.400",
    tag: "Brunch",
    description: "Palta, huevo, semillas, limon y pan integral.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jugo naranja",
    price: "$ 3.200",
    tag: "Natural",
    description: "Exprimido al momento, botella individual o vaso.",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Horario", "Lun-dom 07:00-13:00", "Brunch extendido sabados y domingos"],
  ["Retiro", "Listo en 10-15 min", "Pedido anticipado desde WhatsApp"],
  ["Direccion", "Charcas 3120", "Palermo, mesas al frente"],
  ["Delivery", "Radio 3 km", "Cafe y panificados viajan separados"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    alt: "Cafe servido en taza para desayuno",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    alt: "Panificados recien horneados",
  },
  {
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Tostada de palta y huevo",
  },
  {
    src: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80",
    alt: "Pancakes con fruta fresca",
  },
  {
    src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80",
    alt: "Mesa con yogur y frutas",
  },
  {
    src: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1000&q=80",
    alt: "Jugo natural de naranja",
  },
];

const menuItems = [
  ["Combos", "Combo mañana", "$ 7.600"],
  ["Cafe", "Flat blanco o americano", "$ 2.900"],
  ["Panificados", "Medialunas x 6", "$ 5.200"],
  ["Tostados", "Tostado dorado", "$ 6.900"],
  ["Jugos", "Naranja exprimida", "$ 3.200"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Miga Clara | Desayunos y pickup" },
    {
      name: "description",
      content:
        "Landing de desayuno con menu por categorias, pickup y combos matinales.",
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
    <main className="landing starbucks-breakfast">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Miga Clara">
          <span className="brand-mark">MC</span>
          <span>Miga Clara</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Combos</a>
          <a href="#menu-qr">Menu</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir desayuno
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Desayuno / Palermo</span>
          <h1>Miga Clara</h1>
          <p>
            Cafe, tostados, medialunas y jugos listos para retirar temprano o
            armar una mesa de brunch sin demora.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Pedir desayuno
            </a>
            <a className="button button-secondary" href="#destacados">
              Ver combos
            </a>
          </div>
          <div className="status-row">
            <span>Abre 07:00</span>
            <span>Pickup 10-15 min</span>
            <span>4.9 / 540 reseñas</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80"
            alt="Cafe servido junto a panificados de desayuno"
          />
          <div className="hero-ticket">
            <span>Combo temprano</span>
            <strong>Cafe + medialuna</strong>
            <small>Disponible hasta las 10:30</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Todo claro antes de salir"
          detail="Horario temprano, retiro, delivery y direccion visibles arriba del flujo."
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
          title="Desayunos para repetir"
          detail="Combos, panificados, cafes y opciones frescas para la mañana."
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
          title="Cafe, horno y mesa de mañana"
          detail="Producto fresco, barra y take away para validar el pedido."
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
            title="Carta matinal en categorias"
            detail="Combos, cafe, panificados, tostados y jugos con precios visibles."
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
          title="Elegir horario y modo"
          detail="Pedido temprano para delivery, retiro o mesa de brunch."
        />
        <div className="order-panel">
          <div className="pickup-card">
            <span>Retiro sugerido</span>
            <strong>08:20</strong>
            <p>Tu cafe viaja separado para mantener temperatura y textura.</p>
          </div>
          <form className="order-form">
            <label>
              Combo
              <select>
                <option>Combo mañana</option>
                <option>Tostado dorado</option>
                <option>Yogur granola</option>
              </select>
            </label>
            <label>
              Cantidad
              <input type="number" min="1" defaultValue="2" />
            </label>
            <label>
              Modo
              <select>
                <option>Retiro</option>
                <option>Delivery</option>
                <option>Mesa brunch</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Pedir desayuno
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Horno activo desde 06:30</span>
          <h2>Reserva tu desayuno antes de llegar al barrio.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir desayuno
          </a>
          <a className="button button-secondary" href="#menu-qr">
            Abrir menu
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Miga Clara</span>
        <span>Charcas 3120, Palermo</span>
        <span>Desayuno, brunch y pickup</span>
      </footer>
      <a className="floating-order" href="#pedido" aria-label="Pedir desayuno">
        +
      </a>
    </main>
  );
}

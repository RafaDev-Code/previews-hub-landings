import type { Route } from "./+types/home";

const featured = [
  {
    name: "Combo barrio",
    price: "$ 8.900",
    tag: "Favorito",
    description: "Burger simple, papas rusticas y limonada fresca.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tostado XL",
    price: "$ 6.500",
    tag: "Pickup",
    description: "Pan de molde, queso fundido, jamon natural y papas.",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pizza personal",
    price: "$ 7.300",
    tag: "Horno",
    description: "Muzza, tomate, albahaca y masa crocante.",
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Papas verdes",
    price: "$ 4.800",
    tag: "Side",
    description: "Papas rusticas, alioli de hierbas y queso rallado.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Wrap de pollo",
    price: "$ 7.200",
    tag: "Frecuente",
    description: "Pollo, hojas verdes, tomate, queso y salsa suave.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cookie tibia",
    price: "$ 2.900",
    tag: "Dulce",
    description: "Cookie grande con chips y centro suave.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Local cercano", "Armenia 2201", "Palermo, mesas y pickup"],
  ["Horario", "Todos los dias 10:00-00:00", "Cocina continua"],
  ["Retiro", "Pedido listo en 12-18 min", "Aviso por WhatsApp"],
  ["Delivery", "Radio 4 km", "Zona Palermo, Villa Crespo y Recoleta"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    alt: "Combo de hamburguesa sobre mesa",
  },
  {
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80",
    alt: "Tostado caliente cortado",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
    alt: "Pizza lista para servir",
  },
  {
    src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
    alt: "Mostrador con ingredientes frescos",
  },
  {
    src: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=1000&q=80",
    alt: "Sandwich caliente con queso",
  },
  {
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=80",
    alt: "Cookie tibia con chips",
  },
];

const menuItems = [
  ["Combos", "Combo barrio", "$ 8.900"],
  ["Hamburguesas", "Burger simple con queso", "$ 6.700"],
  ["Papas y sides", "Papas verdes", "$ 4.800"],
  ["Bebidas", "Limonada fresca", "$ 2.100"],
  ["Postres", "Cookie tibia", "$ 2.900"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Punto Verde Bites | Pickup y combos" },
    {
      name: "description",
      content:
        "Landing de comida rapida con tono calido, menu por categorias y pedido frecuente.",
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
    <main className="landing starbucks-fast">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Punto Verde Bites">
          <span className="brand-mark">PV</span>
          <span>Punto Verde Bites</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Favoritos</a>
          <a href="#menu-qr">Menu</a>
          <a href="#pedido">Pickup</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir ahora
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Comida rapida de todos los dias</span>
          <h1>Punto Verde Bites</h1>
          <p>
            Combos simples, tostados grandes y burgers para pedir camino al
            local o recibir en casa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Pedir ahora
            </a>
            <a className="button button-secondary" href="#destacados">
              Ver combos
            </a>
          </div>
          <div className="status-row">
            <span>Pickup 12-18 min</span>
            <span>4.8 / 710 reseñas</span>
            <span>Abierto todo el dia</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1400&q=80"
            alt="Tostado caliente con papas"
          />
          <div className="hero-ticket">
            <span>Frecuente de la semana</span>
            <strong>Tostado XL</strong>
            <small>Listo para retirar en 15 min</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Cerca, simple y abierto temprano"
          detail="Datos operativos para sumar el pedido al recorrido del dia."
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
          title="Favoritos para repetir"
          detail="Combos y productos organizados por ocasion: pickup, almuerzo y antojo."
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
          title="Producto, barra y take away"
          detail="Un recorrido visual calido por los pedidos frecuentes."
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
            title="Categorias claras para pedir siempre"
            detail="Combos, burgers, sides, bebidas y postres en una carta mobile."
          />
          <div className="tab-row">
            {["Combos", "Burgers", "Sides", "Bebidas", "Postres"].map((tab) => (
              <span key={tab}>{tab}</span>
            ))}
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
          eyebrow="Pedido rapido"
          title="Elegir, retirar o recibir"
          detail="Un flujo amable para productos frecuentes y horarios extendidos."
        />
        <div className="order-panel">
          <div className="pickup-card">
            <span>Pedido frecuente</span>
            <strong>Combo barrio</strong>
            <p>Guardado para pedirlo de nuevo con dos toques.</p>
          </div>
          <form className="order-form">
            <label>
              Producto
              <select>
                <option>Combo barrio</option>
                <option>Tostado XL</option>
                <option>Pizza personal</option>
              </select>
            </label>
            <label>
              Cantidad
              <input type="number" min="1" defaultValue="1" />
            </label>
            <label>
              Modo
              <select>
                <option>Pickup</option>
                <option>Delivery</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Pedir ahora
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Cocina continua hasta medianoche</span>
          <h2>Pedilo ahora y pasalo a buscar cuando salis.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir ahora
          </a>
          <a className="button button-secondary" href="#menu-qr">
            Abrir menu
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Punto Verde Bites</span>
        <span>Armenia 2201, Palermo</span>
        <span>Pickup, delivery y mesas rapidas</span>
      </footer>
      <a className="floating-order" href="#pedido" aria-label="Pedir ahora">
        +
      </a>
    </main>
  );
}

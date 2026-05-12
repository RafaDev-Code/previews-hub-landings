import type { Route } from "./+types/home";

const featured = [
  {
    name: "Box fundador",
    price: "$ 11.400",
    tag: "Mas pedido",
    description: "Burger doble, papas con cheddar, dip de ajo y limonada.",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Triple crunch",
    price: "$ 12.900",
    tag: "Premium",
    description: "Tres medallones finos, queso, bacon crocante y salsa negra.",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pizza pocket",
    price: "$ 7.900",
    tag: "Al paso",
    description: "Masa aireada, muzza, tomate asado y oregano fresco.",
    image:
      "https://images.unsplash.com/photo-1601924582971-cd6a8e4405a1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Papas tienda",
    price: "$ 5.300",
    tag: "Upgrade",
    description: "Papas finas con cheddar, panceta, verdeo y lluvia de queso.",
    image:
      "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Wrap fresco",
    price: "$ 6.800",
    tag: "Liviano",
    description: "Pollo grillado, verdes, palta y yogurt de lima.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Brownie cup",
    price: "$ 3.900",
    tag: "Postre",
    description: "Brownie tibio, crema helada y salsa de chocolate.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Pickup", "Listo en 15 min", "Retiro sin fila por mostrador lateral"],
  ["Delivery", "Radio 5 km", "Envio propio y seguimiento por WhatsApp"],
  ["Local", "Humboldt 1510", "Palermo, cocina abierta a la vista"],
  ["Pagos", "Tarjeta y efectivo", "Promo mediodia de lunes a viernes"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?auto=format&fit=crop&w=1000&q=80",
    alt: "Burger doble en packaging de delivery",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1000&q=80",
    alt: "Caja de comida rapida lista para retirar",
  },
  {
    src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=80",
    alt: "Mostrador con pedidos preparados",
  },
  {
    src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1000&q=80",
    alt: "Sandwich con papas crocantes",
  },
  {
    src: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=1000&q=80",
    alt: "Detalle de pan tostado y queso",
  },
  {
    src: "https://images.unsplash.com/photo-1600891963935-9e2f0449d59b?auto=format&fit=crop&w=1000&q=80",
    alt: "Cocina preparando pedidos",
  },
];

const menuItems = [
  ["Combos", "Box fundador con limonada", "$ 11.400"],
  ["Hamburguesas", "Triple crunch", "$ 12.900"],
  ["Papas y sides", "Papas tienda", "$ 5.300"],
  ["Bebidas", "Limonada de la casa", "$ 2.200"],
  ["Postres", "Brownie cup", "$ 3.900"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mostrador 27 | Combos online" },
    {
      name: "description",
      content:
        "Landing comercial de comida rapida para Mostrador 27, con catalogo y pedido online.",
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
    <main className="landing shopify-fast">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mostrador 27">
          <span className="brand-mark">27</span>
          <span>Mostrador 27</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Catalogo</a>
          <a href="#menu-qr">Menu QR</a>
          <a href="#pedido">Checkout</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir ahora
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Fast food / pickup + delivery</span>
          <h1>Mostrador 27</h1>
          <p>
            Combos de burger, pizza y sides con fotos claras, precio final y
            salida directa a pedido online.
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
            <span>Envio gratis desde $ 18.000</span>
            <span>4.8 / 640 reseñas</span>
            <span>Pickup 15 min</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1400&q=80"
            alt="Combo de hamburguesa y papas para pedir online"
          />
          <div className="hero-ticket">
            <span>Carrito sugerido</span>
            <strong>$ 22.800</strong>
            <small>2 boxes + papas tienda</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Operacion pensada para comprar rapido"
          detail="Tiempos, cobertura, pagos y retiro visibles antes del catalogo."
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
          title="Catalogo corto, decision rapida"
          detail="Cada card funciona como producto: foto, descripcion, precio y accion."
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
                  <a href="#pedido">Agregar</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <SectionHeading
          eyebrow="Galeria"
          title="Packaging, producto y cocina"
          detail="Imagenes enfocadas en compra: caja, producto, preparacion y despacho."
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
            title="Abrir carta, sumar productos y compartir"
            detail="Tabs horizontales, precios visibles y salida al mismo pedido."
          />
          <div className="tab-row">
            {["Combos", "Burgers", "Papas", "Bebidas", "Postres"].map((tab) => (
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
          title="Checkout simple para delivery o pickup"
          detail="Selector de producto, cantidad, modo y datos de contacto."
        />
        <div className="order-panel">
          <div className="cart-summary">
            <span>Pedido sugerido</span>
            <strong>2 Box fundador</strong>
            <p>Papas tienda de upgrade incluidas hasta las 16:00.</p>
            <b>Total estimado $ 22.800</b>
          </div>
          <form className="order-form">
            <label>
              Producto
              <select>
                <option>Box fundador</option>
                <option>Triple crunch</option>
                <option>Pizza pocket</option>
              </select>
            </label>
            <label>
              Cantidad
              <input type="number" min="1" defaultValue="2" />
            </label>
            <label>
              Entrega
              <select>
                <option>Delivery</option>
                <option>Pickup</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Confirmar pedido
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Promo activa hasta las 16:00</span>
          <h2>Arma el carrito y retiralo sin fila.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir ahora
          </a>
          <a className="button button-secondary" href="#destacados">
            Ver catalogo
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Mostrador 27</span>
        <span>Humboldt 1510, Palermo</span>
        <span>Pedido online, WhatsApp y retiro</span>
      </footer>
      <a className="mobile-sticky button button-primary" href="#pedido">
        Pedir ahora
      </a>
    </main>
  );
}

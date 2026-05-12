import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1800&q=80";

const products = [
  {
    name: "Tabla Norte",
    description: "Quesos, vegetales asados, pan tibio y dips de la casa.",
    price: "$ 18.900",
    tag: "Para compartir",
    image:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pasta corta braseada",
    description: "Ragú de ocho horas, tomate y parmesano.",
    price: "$ 17.600",
    tag: "Más vendido",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bife con papas",
    description: "Corte sellado, manteca de hierbas y papas rotas.",
    price: "$ 26.400",
    tag: "Brasa",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pesca del día",
    description: "Puré de coliflor, verdes y limón asado.",
    price: "$ 22.500",
    tag: "Fresco",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tarta húmeda",
    description: "Chocolate, crema batida y sal marina.",
    price: "$ 8.700",
    tag: "Postre",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Limonada verde",
    description: "Limón, menta, pepino y soda.",
    price: "$ 5.900",
    tag: "Bebida",
    image:
      "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Dirección", "Moldes 1838", "Belgrano"],
  ["Horarios", "Lun-sáb 12:00-00:00", "Domingos hasta 17:00"],
  ["Servicio", "Salón, retiro y delivery propio", "Retiro en 20 min"],
  ["Contacto", "+54 11 4410-7822", "WhatsApp comercial"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    alt: "Barra de restaurante con botellas y luz de noche",
  },
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=80",
    alt: "Equipo de cocina preparando pedidos",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    alt: "Platos listos para enviar a la mesa",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80",
    alt: "Salón de restaurante con mesas preparadas",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    alt: "Plato principal servido con guarnición",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    alt: "Pan artesanal listo para la mesa",
  },
];

const categories = [
  "Entradas",
  "Principales",
  "Especiales de la casa",
  "Postres",
  "Bebidas",
];

const checkoutLines = [
  ["Tabla Norte", "$ 18.900"],
  ["Pasta corta braseada", "$ 17.600"],
  ["Cubierto de mesa", "$ 1.800"],
];

const menuRows = [
  ["Entradas", "Tabla Norte", "$ 18.900"],
  ["Principales", "Bife con papas", "$ 26.400"],
  ["Especiales", "Pesca del día", "$ 22.500"],
  ["Postres", "Tarta húmeda", "$ 8.700"],
];

const slots = ["12:30", "13:15", "20:15", "21:00"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Norte Cocina | Reservas, menú y pedido" },
    {
      name: "description",
      content:
        "Landing gastronómica comercial para Norte Cocina con catálogo, menú QR, reservas y pedido directo.",
    },
  ];
}

function SectionTitle({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {detail ? <p>{detail}</p> : null}
    </div>
  );
}

function QrMark() {
  return (
    <div className="qr-mark" aria-hidden="true">
      {Array.from({ length: 64 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="shopify-restaurant">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Norte Cocina">
          <span className="brand-mark">N</span>
          <strong>Norte Cocina</strong>
        </a>
        <nav aria-label="Secciones principales">
          <a href="#destacados">Carta</a>
          <a href="#galeria">Galería</a>
          <a href="#menu-qr">Menú QR</a>
          <a href="#reservas">Reservas</a>
        </nav>
        <a className="header-cta" href="#reservas">
          Reservar mesa
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Restaurante + retiro · Belgrano</span>
          <h1>Cena de autor, compra simple y mesa confirmada.</h1>
          <p>
            Carta de temporada con precios visibles, reserva directa y pedido
            para retirar cuando preferís comer en casa.
          </p>
          <div className="hero-actions">
            <a className="primary-button light" href="#reservas">
              Reservar mesa
            </a>
            <a className="outline-button" href="#destacados">
              Ver carta
            </a>
          </div>
          <div className="commercial-row" aria-label="Datos comerciales">
            <span>Abierto hasta 00:00</span>
            <span>Retiro en 20 min</span>
            <span>4.8 · 1.120 reseñas</span>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="Cocina de Norte preparando platos" />
          <aside className="checkout-card" aria-label="Pedido sugerido">
            <span>Pedido sugerido</span>
            <strong>Mesa rápida para dos</strong>
            <div>
              {checkoutLines.map(([item, price]) => (
                <p key={item}>
                  <span>{item}</span>
                  <b>{price}</b>
                </p>
              ))}
            </div>
            <a href="#reservas">Confirmar mesa</a>
          </aside>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionTitle
          eyebrow="Info del local"
          title="Salón, retiro y contacto en un solo lugar"
          detail="La información operativa queda cerca del catálogo para decidir sin fricción."
        />
        <div className="info-grid">
          {info.map(([label, primary, secondary]) => (
            <article className="info-card" key={label}>
              <span>{label}</span>
              <strong>{primary}</strong>
              <p>{secondary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" id="destacados">
        <SectionTitle
          eyebrow="Destacados"
          title="Productos listos para mesa o retiro"
          detail="Cards de catálogo con precio, categoría y acción directa."
        />
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <div className="product-body">
                <span>{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-buy-row">
                  <strong>{product.price}</strong>
                  <button type="button">Sumar</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <SectionTitle
          eyebrow="Galería"
          title="Producto, barra y empaque"
          detail="Imágenes pensadas para validar el plato antes de reservar o pedir."
        />
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={index === 0 ? "wide" : ""} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="menu-qr-section" id="menu-qr">
        <div className="qr-panel" aria-label="Vista previa de menú QR">
          <QrMark />
          <div className="menu-list">
            {menuRows.map(([category, item, price]) => (
              <div key={item}>
                <span>{category}</span>
                <strong>{item}</strong>
                <em>{price}</em>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-copy">
          <SectionTitle
            eyebrow="Menú QR"
            title="Carta completa con precios y categorías"
            detail="Abrí el QR desde la mesa, compartilo o usalo para armar pedido de retiro."
          />
          <div className="category-row" aria-label="Categorías del menú">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#reservas">
              Ver menú QR
            </a>
            <a className="outline-button dark" href="#info">
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <section className="reservation-section" id="reservas">
        <SectionTitle
          eyebrow="Reservas"
          title="Confirmá salón o retiro"
          detail="Mismo flujo para reservar mesa y dejar un contacto comercial."
        />
        <form className="reservation-form">
          <label>
            Fecha
            <input type="date" defaultValue="2026-05-12" />
          </label>
          <label>
            Servicio
            <select defaultValue="salon">
              <option value="salon">Mesa en salón</option>
              <option value="retiro">Retiro en local</option>
              <option value="delivery">Delivery propio</option>
            </select>
          </label>
          <label>
            Personas
            <select defaultValue="2">
              <option value="2">2 personas</option>
              <option value="4">4 personas</option>
              <option value="6">6 personas</option>
            </select>
          </label>
          <div className="slot-row" aria-label="Horarios disponibles">
            {slots.map((slot) => (
              <button key={slot} type="button">
                {slot}
              </button>
            ))}
          </div>
          <label className="wide-field">
            WhatsApp
            <input type="tel" placeholder="Contacto para confirmar" />
          </label>
          <button className="primary-button submit-button" type="submit">
            Confirmar reserva
          </button>
        </form>
      </section>

      <section className="final-cta">
        <span>Norte Cocina · Belgrano</span>
        <h2>Reservá mesa o armá tu pedido antes de salir.</h2>
        <div className="hero-actions">
          <a className="primary-button light" href="#reservas">
            Reservar mesa
          </a>
          <a className="outline-button" href="#menu-qr">
            Ver menú QR
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Norte Cocina</strong>
        <span>Moldes 1838 · Belgrano · +54 11 4410-7822</span>
      </footer>

      <a className="sticky-mobile-cta" href="#reservas">
        Reservar
      </a>
    </main>
  );
}

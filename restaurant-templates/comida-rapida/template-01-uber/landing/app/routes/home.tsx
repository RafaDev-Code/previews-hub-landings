import type { Route } from "./+types/home";

const featured = [
  {
    name: "Doble callejero",
    price: "$ 9.900",
    tag: "Top ventas",
    description: "Doble smash, cheddar, pepinos, salsa ronda y papas finas.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Combo fugazzeta",
    price: "$ 8.700",
    tag: "Al paso",
    description: "Porcion gruesa, muzza dorada, cebolla y bebida lata.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Papas bravas",
    price: "$ 4.900",
    tag: "Side",
    description: "Papas crocantes con mayo ahumada y verdeo fresco.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pollo crispy",
    price: "$ 8.300",
    tag: "Nuevo",
    description: "Pan brioche, pollo rebozado, coleslaw y salsa picante.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e2dabdca?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Veggie box",
    price: "$ 7.800",
    tag: "Sin carne",
    description: "Medallon de garbanzos, queso, tomate y papas rusticas.",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Helado express",
    price: "$ 3.600",
    tag: "Postre",
    description: "Vaso chico de americana con dulce de leche y crocante.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Sucursal", "Av. Corrientes 1842", "Tribunales, retiro por mostrador"],
  ["Horario", "Lun-dom 11:30-01:00", "Delivery activo hasta las 00:30"],
  ["Tiempo", "18-25 min", "Promedio dentro de 4 km"],
  ["Contacto", "+54 11 5050-1220", "WhatsApp para pedido directo"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    alt: "Hamburguesa con queso lista para despacho",
  },
  {
    src: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?auto=format&fit=crop&w=1000&q=80",
    alt: "Papas fritas en bolsa de papel",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
    alt: "Pizza con queso fundido",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1000&q=80",
    alt: "Mostrador de comida rapida",
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1000&q=80",
    alt: "Sandwich caliente con papas",
  },
  {
    src: "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=1000&q=80",
    alt: "Pedido para llevar con bebida",
  },
];

const menuItems = [
  ["Combos", "Doble callejero + papas + lata", "$ 9.900"],
  ["Hamburguesas", "Simple smash con cheddar", "$ 6.900"],
  ["Papas y sides", "Papas bravas con mayo ahumada", "$ 4.900"],
  ["Bebidas", "Limonada, gaseosa o agua", "$ 1.900"],
  ["Postres", "Vaso helado express", "$ 3.600"],
];

const orderSteps = ["Elegir combo", "Delivery o retiro", "Confirmar por WhatsApp"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ronda Express | Comida rapida y pedidos" },
    {
      name: "description",
      content:
        "Landing de comida rapida para Ronda Express con flujo de pedido inmediato.",
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
    <main className="landing uber-fast">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ronda Express">
          <span className="brand-mark">R</span>
          <span>Ronda Express</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Combos</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir ahora
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Comida rapida / Tribunales</span>
          <h1>Ronda Express</h1>
          <p>
            Burgers, pizza al paso y papas calientes con despacho rapido para
            oficina, previa o bajon de medianoche.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Pedir ahora
            </a>
            <a className="button button-secondary" href="#destacados">
              Ver combos
            </a>
          </div>
          <div className="status-row" aria-label="Estado operativo">
            <span>Abierto</span>
            <span>18-25 min</span>
            <span>4.7 / 820 reseñas</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=80"
            alt="Combo de hamburguesa con papas"
          />
          <div className="hero-ticket">
            <span>Combo del dia</span>
            <strong>$ 9.900</strong>
            <small>Doble + papas + lata</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Datos visibles antes de pedir"
          detail="Sucursal, tiempos y contacto arriba para decidir sin vueltas."
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
          title="Combos que salen primero"
          detail="Opciones cortas con precio claro y accion directa por item."
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
          title="Producto real, despacho rapido"
          detail="Texturas, packaging y mostrador para validar el pedido."
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
            title="Carta mobile con precios al frente"
            detail="Categorias rapidas para abrir, compartir y volver al pedido."
          />
          <div className="tab-row" aria-label="Categorias del menu">
            {["Combos", "Hamburguesas", "Papas", "Bebidas", "Postres"].map(
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
          eyebrow="Pedido rapido"
          title="Tres pasos y sale"
          detail="Seleccion simple de combo, cantidad y modo de entrega."
        />
        <div className="order-panel">
          <div className="step-list">
            {orderSteps.map((step, index) => (
              <div key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <form className="order-form">
            <label>
              Combo
              <select>
                <option>Doble callejero</option>
                <option>Combo fugazzeta</option>
                <option>Pollo crispy</option>
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
                <option>Retiro en mostrador</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Pedir por WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Abierto hasta 01:00</span>
          <h2>Tu combo puede salir en menos de 25 minutos.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir ahora
          </a>
          <a className="button button-secondary" href="#menu-qr">
            Abrir menu QR
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Ronda Express</span>
        <span>Av. Corrientes 1842, Buenos Aires</span>
        <span>Delivery y retiro todos los dias</span>
      </footer>
      <a className="mobile-sticky button button-primary" href="#pedido">
        Pedir ahora
      </a>
    </main>
  );
}

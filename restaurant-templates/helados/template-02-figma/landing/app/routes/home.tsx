import type { Route } from "./+types/home";

const featured = [
  {
    name: "Modulo pistacho",
    price: "$ 8.700 / kg",
    tag: "Sabores",
    description: "Pistacho, crema base y sal marina en lote chico.",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Componente frutal",
    price: "$ 5.100 / 1/2 kg",
    tag: "Potes",
    description: "Frutilla, limon y mango para combinar en potes.",
    image:
      "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cono editable",
    price: "$ 2.800",
    tag: "Cucuruchos",
    description: "Dos bochas, baño, topping y cucurucho crocante.",
    image:
      "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Postre bloque",
    price: "$ 7.200",
    tag: "Postres",
    description: "Brownie, americana, chocolate y crema batida.",
    image:
      "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pack claro",
    price: "$ 6.600",
    tag: "Sin TACC",
    description: "Potes individuales rotulados y separados.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dulce variable",
    price: "$ 3.100 / 1/4 kg",
    tag: "Favorito",
    description: "Dulce de leche, brownie y chocolate con leche.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Sucursal", "Nicaragua 4580", "Palermo Soho"],
  ["Horario", "Todos los dias 13:00-00:30", "Delivery y retiro"],
  ["Sistema", "18 sabores fijos", "6 sabores variables"],
  ["Contacto", "+54 11 5044-7788", "WhatsApp para pedidos"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80",
    alt: "Helado en cucurucho",
  },
  {
    src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1000&q=80",
    alt: "Bochas de helado",
  },
  {
    src: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=1000&q=80",
    alt: "Helado frutal",
  },
  {
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
    alt: "Potes para llevar",
  },
  {
    src: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1000&q=80",
    alt: "Postre helado",
  },
  {
    src: "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=1000&q=80",
    alt: "Cucuruchos listos",
  },
];

const menuItems = [
  ["Sabores", "Modulo pistacho", "$ 8.700 / kg"],
  ["Potes", "1/2 kg combinable", "$ 5.100"],
  ["Cucuruchos", "Cono editable", "$ 2.800"],
  ["Postres helados", "Postre bloque", "$ 7.200"],
  ["Sin TACC", "Pack claro", "$ 6.600"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mosaico Helado | Sistema de sabores" },
    {
      name: "description",
      content:
        "Landing modular de heladeria con categorias, filtros visuales y pedido.",
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
    <main className="landing figma-icecream">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mosaico Helado">
          <span className="brand-mark">M</span>
          <span>Mosaico Helado</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Componentes</a>
          <a href="#menu-qr">Menu</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir helado
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">HELADOS / SISTEMA MODULAR</span>
          <h1>Mosaico Helado</h1>
          <p>
            Sabores, potes y toppings organizados como componentes para armar el
            pedido exacto.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Pedir helado
            </a>
            <a className="button button-secondary" href="#destacados">
              Ver sabores
            </a>
          </div>
          <div className="status-row">
            <span>24 componentes activos</span>
            <span>Sin TACC separado</span>
            <span>Delivery 30 min</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=1400&q=80"
            alt="Helados de colores organizados en una mesa"
          />
          <div className="hero-ticket">
            <span>Variable activa</span>
            <strong>Frutilla + mango</strong>
            <small>Combina con potes de 1/2 kg</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="INFO"
          title="Datos del local como panel operativo"
          detail="Horario, sucursal, sabores activos y contacto en modulos claros."
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
          eyebrow="COMPONENTES"
          title="Seis bloques para armar el pedido"
          detail="Cada card mantiene tag, precio, descripcion y accion de pedido."
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
          eyebrow="GALERIA"
          title="Grilla modular de producto"
          detail="Fotos consistentes para explorar sabores, potes y postres."
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
            eyebrow="MENU QR"
            title="Tabs de sabores y precios"
            detail="Mobile-first con categorias horizontales y lista escaneable."
          />
          <div className="tab-row">
            {["Sabores", "Potes", "Conos", "Postres", "Sin TACC"].map((tab) => (
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
            Ver sabores
          </a>
        </div>
      </section>

      <section className="order-section" id="pedido">
        <SectionHeading
          eyebrow="PEDIDO"
          title="Configurar pote y salida"
          detail="Tamaño, cantidad y modo de entrega como controles simples."
        />
        <div className="order-panel">
          <form className="order-form">
            <label>
              Tamaño
              <select>
                <option>1/2 kg</option>
                <option>1 kg</option>
                <option>1/4 kg</option>
              </select>
            </label>
            <label>
              Cantidad
              <input type="number" min="1" defaultValue="1" />
            </label>
            <label>
              Entrega
              <select>
                <option>Delivery</option>
                <option>Retiro</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Pedir helado
            </button>
          </form>
          <div className="config-note">
            <strong>Config sugerida: 1/2 kg, dos sabores.</strong>
            <p>Frutilla mango + dulce variable para equilibrar fresco y cremoso.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">SISTEMA ACTIVO HASTA 00:30</span>
          <h2>Elegir sabores deberia ser tan claro como mirar la vitrina.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir helado
          </a>
          <a className="button button-secondary" href="#menu-qr">
            Abrir menu
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Mosaico Helado</span>
        <span>Nicaragua 4580, Palermo Soho</span>
        <span>Sabores, potes y delivery</span>
      </footer>
      <a className="mobile-sticky button button-primary" href="#pedido">
        Pedir helado
      </a>
    </main>
  );
}

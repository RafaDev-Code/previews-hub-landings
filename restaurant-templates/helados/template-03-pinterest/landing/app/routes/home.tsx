import type { Route } from "./+types/home";

const featured = [
  {
    name: "Frutilla cremosa",
    price: "$ 5.000 / 1/2 kg",
    tag: "Guardar",
    description: "Frutilla natural y crema suave.",
    image:
      "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cono chocolate",
    price: "$ 2.900",
    tag: "Popular",
    description: "Chocolate, americana y baño crocante.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pote pistacho",
    price: "$ 8.800 / kg",
    tag: "Nuevo",
    description: "Pistacho tostado y base cremosa.",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Postre brownie",
    price: "$ 7.100",
    tag: "Postre",
    description: "Brownie, dulce y helado de crema.",
    image:
      "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pack familiar",
    price: "$ 13.600",
    tag: "Familia",
    description: "Dos medios kilos y cucuruchos.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cucuruchos mini",
    price: "$ 4.500",
    tag: "Mesa",
    description: "Seis mini conos para compartir.",
    image:
      "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Local", "Thames 1618", "Palermo, vitrina y patio"],
  ["Horario", "Dom-jue 13:00-00:00", "Vie-sab hasta 01:00"],
  ["Delivery", "30-40 min", "Potes con conservadora termica"],
  ["Contacto", "+54 11 5010-2211", "WhatsApp para pedidos"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=1000&q=80",
    alt: "Helado de frutilla y frutas",
  },
  {
    src: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80",
    alt: "Cucurucho con helado",
  },
  {
    src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1000&q=80",
    alt: "Bochas de helado",
  },
  {
    src: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1000&q=80",
    alt: "Postre helado",
  },
  {
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
    alt: "Potes de helado",
  },
  {
    src: "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=1000&q=80",
    alt: "Cucuruchos para compartir",
  },
  {
    src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=1000&q=80",
    alt: "Helado derretido sobre cono",
  },
  {
    src: "https://images.unsplash.com/photo-1556682851-c4580670113a?auto=format&fit=crop&w=1000&q=80",
    alt: "Mesa con postres frios",
  },
];

const menuItems = [
  ["Sabores", "Pote pistacho", "$ 8.800 / kg"],
  ["Potes", "1/2 kg combinado", "$ 5.000"],
  ["Cucuruchos", "Cono chocolate", "$ 2.900"],
  ["Postres helados", "Postre brownie", "$ 7.100"],
  ["Sin TACC", "Pack seguro", "$ 6.500"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pinta Fria | Helados y sabores visuales" },
    {
      name: "description",
      content:
        "Landing fotografica de heladeria con grilla de sabores, menu QR y pedido.",
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
    <main className="landing pinterest-icecream">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pinta Fria">
          <span className="brand-mark">P</span>
          <span>Pinta Fria</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Pins</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir helado
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Helados para descubrir</span>
          <h1>Pinta Fria</h1>
          <p>
            Una vitrina visual de sabores, potes y postres para elegir por
            antojo y pedir directo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Pedir helado
            </a>
            <a className="button button-secondary" href="#destacados">
              Ver sabores
            </a>
          </div>
          <div className="search-pill">Buscar sabor, pote o postre</div>
        </div>
        <div className="hero-mosaic">
          {gallery.slice(0, 5).map((item) => (
            <img key={item.src} src={item.src} alt={item.alt} />
          ))}
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Antes de pinear el pedido"
          detail="Horario, delivery, contacto y local para decidir sin salir de la carta."
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
          title="Pins de sabores"
          detail="Imagen primero, nombre corto, precio y accion rapida."
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
          title="Masonry de antojos"
          detail="Texturas, potes, cucuruchos y postres en alturas mixtas."
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
            title="Categorias para explorar"
            detail="Sabores, potes, cucuruchos, postres y sin TACC con precios."
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
          eyebrow="Pedido y sabores"
          title="Elegir de la grilla al pote"
          detail="Tamaño, cantidad y entrega con salida directa a WhatsApp."
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
          <div className="pin-note">
            <strong>Guardado de hoy: frutilla cremosa + cono chocolate.</strong>
            <p>La promo de pack familiar sigue activa hasta las 21:00.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Delivery hasta 01:00</span>
          <h2>El antojo que guardaste puede llegar en 40 minutos.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir helado
          </a>
          <a className="button button-secondary" href="#galeria">
            Ver galeria
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Pinta Fria</span>
        <span>Thames 1618, Palermo</span>
        <span>Helados, postres y delivery</span>
      </footer>
      <a className="mobile-sticky button button-primary" href="#pedido">
        Pedir helado
      </a>
    </main>
  );
}

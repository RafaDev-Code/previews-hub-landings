import type { Route } from "./+types/home";

const featured = [
  {
    name: "Pistacho salado",
    price: "$ 8.900 / 1 kg",
    tag: "Temporada",
    description: "Pistacho tostado, sal marina y crema base de vainilla.",
    image:
      "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dulce remolino",
    price: "$ 5.200 / 1/2 kg",
    tag: "Clasico",
    description: "Dulce de leche, vetas de caramelo y chips crocantes.",
    image:
      "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Frutilla albahaca",
    price: "$ 3.100 / 1/4 kg",
    tag: "Fresco",
    description: "Frutilla natural, albahaca suave y toque de limon.",
    image:
      "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cono nube",
    price: "$ 2.900",
    tag: "Cucurucho",
    description: "Dos bochas, baño de chocolate y granas artesanales.",
    image:
      "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Postre Alaska",
    price: "$ 7.400",
    tag: "Postre",
    description: "Helado de americana, merengue tostado y brownie.",
    image:
      "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pack sin TACC",
    price: "$ 6.900",
    tag: "Sin TACC",
    description: "Tres sabores certificados en potes individuales.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Sucursal", "Gorriti 5301", "Palermo, vitrina a la calle"],
  ["Horario", "Lun-dom 12:00-01:00", "Delivery activo desde las 14:00"],
  ["Sabores", "24 en vitrina", "8 rotan cada semana"],
  ["Contacto", "+54 11 5099-3040", "Pedidos por WhatsApp y retiro"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1000&q=80",
    alt: "Cucurucho con helado artesanal",
  },
  {
    src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&w=1000&q=80",
    alt: "Bochas de helado en copa",
  },
  {
    src: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?auto=format&fit=crop&w=1000&q=80",
    alt: "Helado colorido con frutas",
  },
  {
    src: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1000&q=80",
    alt: "Postre helado con crema",
  },
  {
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1000&q=80",
    alt: "Potes de helado artesanal",
  },
  {
    src: "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&w=1000&q=80",
    alt: "Conos de helado preparados",
  },
];

const menuItems = [
  ["Sabores", "Pistacho salado", "$ 8.900 / kg"],
  ["Potes", "1/2 kg dos sabores", "$ 5.200"],
  ["Cucuruchos", "Cono nube", "$ 2.900"],
  ["Postres helados", "Postre Alaska", "$ 7.400"],
  ["Sin TACC", "Pack individual", "$ 6.900"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nube Naranja | Helados artesanales" },
    {
      name: "description",
      content:
        "Landing organica de heladeria artesanal con sabores, pedidos y menu QR.",
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
    <main className="landing clay-icecream">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nube Naranja">
          <span className="brand-mark">NN</span>
          <span>Nube Naranja</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Sabores</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir helado
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Heladeria artesanal / Palermo</span>
          <h1>Nube Naranja</h1>
          <p>
            Sabores de vitrina, potes para delivery y cucuruchos con una carta
            creativa que cambia cada semana.
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
            <span>24 sabores hoy</span>
            <span>Delivery 25-35 min</span>
            <span>4.9 / 880 reseñas</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=1400&q=80"
            alt="Cucurucho con bochas de helado artesanal"
          />
          <div className="hero-ticket">
            <span>Sabor de temporada</span>
            <strong>Pistacho salado</strong>
            <small>Disponible en kilo, medio y cuarto</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Vitrina, horario y delivery"
          detail="Lo operativo aparece antes del antojo: sucursal, sabores, horario y contacto."
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
          title="Sabores con personalidad"
          detail="Potes, cucuruchos, postres y opciones sin TACC con accion directa."
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
          title="Texturas, potes y cucuruchos"
          detail="Formas organicas y colores suaves para mostrar el producto real."
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
            title="Carta de sabores mobile"
            detail="Categorias, precios y sabores disponibles para compartir por WhatsApp."
          />
          <div className="tab-row">
            {["Sabores", "Potes", "Cucuruchos", "Postres", "Sin TACC"].map(
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
            Ver sabores
          </a>
        </div>
      </section>

      <section className="order-section" id="pedido">
        <SectionHeading
          eyebrow="Pedido y sabores"
          title="Elegir tamaño y combinar"
          detail="Selector de pote, cantidad, sabores y modo de entrega."
        />
        <div className="order-panel">
          <div className="flavor-card">
            <span>Pack recomendado</span>
            <strong>1/2 kg + 2 sabores</strong>
            <p>Pistacho salado y dulce remolino viajan mejor juntos.</p>
          </div>
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
                <option>Retiro en local</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Pedir helado
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Sabor de temporada disponible</span>
          <h2>Arma tu pote antes de que cambie la vitrina.</h2>
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
        <span>Nube Naranja</span>
        <span>Gorriti 5301, Palermo</span>
        <span>Helado artesanal, delivery y retiro</span>
      </footer>
      <a className="mobile-sticky button button-primary" href="#pedido">
        Pedir helado
      </a>
    </main>
  );
}

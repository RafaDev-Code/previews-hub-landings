import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80";

const items = [
  {
    name: "Flat white",
    detail: "Doble espresso, leche texturizada y taza chica.",
    price: "$ 3.900",
    tag: "Cafe",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Medialuna tibia",
    detail: "Manteca, almibar ligero y horno de la mañana.",
    price: "$ 2.200",
    tag: "Pasteleria",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tostado de campo",
    detail: "Pan de masa madre, queso y jamon natural.",
    price: "$ 5.900",
    tag: "Sandwich",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Brunch simple",
    detail: "Cafe, tostadas, huevos y jugo chico.",
    price: "$ 9.800",
    tag: "Brunch",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced latte",
    detail: "Espresso, leche fria, hielo y vainilla.",
    price: "$ 4.400",
    tag: "Sin cafe opcional",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Budin de limon",
    detail: "Glaseado suave y miga humeda.",
    price: "$ 3.100",
    tag: "Dulce",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Take away", "10 min", "Pedido listo en barra"],
  ["Barrio", "Colegiales", "Freire 1410"],
  ["Horario", "Lun-sab 07:30-20:00", "Dom 09:00-18:00"],
  ["Promo", "Cafe + medialuna", "Hasta las 11:30"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    "Cafe servido en taza",
  ],
  [
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=80",
    "Pasteleria en vitrina",
  ],
  [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
    "Barista preparando cafe",
  ],
  [
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
    "Mesa de brunch",
  ],
  [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    "Interior de cafeteria",
  ],
  [
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    "Cafe con leche servido",
  ],
];

const categories = ["Cafe", "Pasteleria", "Brunch", "Sandwiches", "Sin cafe"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rama Cafe | Menu, take away y mesas" },
    {
      name: "description",
      content:
        "Landing de cafeteria con menu QR, destacados, galeria y pedido para llevar.",
    },
  ];
}

function SectionTitle({
  kicker,
  title,
  detail,
}: {
  kicker: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="section-title">
      <span>{kicker}</span>
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
    <main className="sb-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rama Cafe">
          <span>RC</span>
          Rama Cafe
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Local</a>
          <a href="#destacados">Menu</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Take away</a>
        </nav>
        <a className="button dark" href="#menu-qr">
          Ver menu
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Cafeteria de barrio / Colegiales</span>
          <h1>Cafe de todos los dias, listo para quedarse o llevar.</h1>
          <p>
            Espresso, pasteleria fresca, brunch simple y take away rapido para
            sumar al camino.
          </p>
          <div className="actions">
            <a className="button primary" href="#menu-qr">
              Ver menu
            </a>
            <a className="button outline" href="#pedido">
              Pedir para llevar
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="Cafeteria con barra y mesas" />
        </div>
      </section>

      <section className="section info-section" id="info">
        <SectionTitle
          kicker="03 / Info del local"
          title="Horario, barrio y take away"
          detail="Datos claros para pasar por una mesa o retirar en mostrador."
        />
        <div className="info-grid">
          {info.map(([label, value, note]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="destacados">
        <SectionTitle
          kicker="04 / Destacados"
          title="Favoritos de cafe y vitrina"
          detail="Seis productos con precio, descripcion corta y accion de pedido."
        />
        <div className="product-grid">
          {items.map((item) => (
            <article className="product-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" />
              <div>
                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <strong>{item.price}</strong>
                <a href="#pedido">Pedir</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band" id="galeria">
        <SectionTitle
          kicker="05 / Galeria"
          title="Barra, tazas y mesa"
          detail="Producto y lugar sin repetir los destacados de la carta."
        />
        <div className="gallery-grid">
          {gallery.map(([src, alt]) => (
            <figure key={src}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="menu-qr">
        <SectionTitle
          kicker="06 / Menu QR"
          title="Carta ordenada por categorias"
          detail="Cafe, pasteleria, brunch, sandwiches y opciones sin cafe."
        />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span className="eyebrow">Menu actualizado</span>
            <h3>Cafe, pasteleria, brunch, sandwiches y sin cafe.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button outline" href="#pedido">
            Abrir menu
          </a>
        </div>
      </section>

      <section className="section pickup-section" id="pedido">
        <SectionTitle
          kicker="07 / Pedido o mesa"
          title="Pedi para llevar o reserva una mesa"
          detail="Para take away, elegi cantidad y horario de retiro."
        />
        <div className="pickup-panel">
          <div>
            <span className="eyebrow">Pedido rapido</span>
            <h3>Combo cafe + medialuna listo en 10 minutos</h3>
            <p>Tambien guardamos mesas chicas para brunch hasta las 13:00.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Pedido
              <select defaultValue="Combo cafe">
                <option>Combo cafe</option>
                <option>Brunch simple</option>
                <option>Pasteleria x4</option>
              </select>
            </label>
            <label>
              Modalidad
              <select defaultValue="Retiro">
                <option>Retiro</option>
                <option>Mesa</option>
              </select>
            </label>
            <label className="wide">
              Nota
              <input placeholder="Horario, cantidad o mesa" />
            </label>
            <button className="button primary wide" type="submit">
              Pedir para llevar
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <h2>El combo de la mañana esta disponible hasta las 11:30.</h2>
        <div className="actions">
          <a className="button primary" href="#menu-qr">
            Ver menu
          </a>
          <a className="button outline" href="#pedido">
            Pedir para llevar
          </a>
        </div>
      </section>

      <a className="floating-order" href="#pedido" aria-label="Pedir para llevar">
        +
      </a>

      <footer className="site-footer">
        <strong>Rama Cafe</strong>
        <span>Freire 1410, Colegiales</span>
        <a href="#menu-qr">Menu QR</a>
        <a href="#pedido">Take away</a>
      </footer>
    </main>
  );
}

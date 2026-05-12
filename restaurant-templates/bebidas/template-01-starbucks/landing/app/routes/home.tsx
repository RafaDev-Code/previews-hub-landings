import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1400&q=80";

const drinks = [
  {
    name: "Limonada menta",
    detail: "Limon, menta fresca, hielo y soda.",
    price: "$ 4.200",
    tag: "Fria",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cold brew naranja",
    detail: "Cafe frio, almibar citrico y rodaja de naranja.",
    price: "$ 4.900",
    tag: "Cafe frio",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced matcha",
    detail: "Matcha batido, leche fria y vainilla.",
    price: "$ 5.300",
    tag: "Temporada",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ginger spritz",
    detail: "Jengibre, pomelo, soda y hielo roto.",
    price: "$ 5.100",
    tag: "Sin alcohol",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pack oficina",
    detail: "Seis bebidas frias listas para retirar.",
    price: "$ 22.000",
    tag: "Pack",
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate especiado",
    detail: "Cacao, canela, leche y crema suave.",
    price: "$ 4.800",
    tag: "Caliente",
    image:
      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Retiro", "15 min", "Pedido listo en mostrador"],
  ["Zona", "Belgrano", "Moldes 1864"],
  ["Horario", "Lun-sab 08:00-20:30", "Dom 09:00-18:00"],
  ["Promos", "2x1 de 16 a 18", "En bebidas frias"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
    "Vasos frios con frutas",
  ],
  [
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=80",
    "Bebidas preparadas en barra",
  ],
  [
    "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&w=900&q=80",
    "Cafe frio con hielo",
  ],
  [
    "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
    "Jugos de colores",
  ],
  [
    "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
    "Bebida citrica servida",
  ],
  [
    "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
    "Vaso con cacao frio",
  ],
];

const categories = ["Frias", "Calientes", "Cocteles", "Packs", "Sin alcohol"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lima Clara | Bebidas para retirar y llevar" },
    {
      name: "description",
      content:
        "Landing para tienda de bebidas con carta, galeria, pickup, menu QR y pedido.",
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
        <a className="brand" href="#top" aria-label="Lima Clara">
          <span>LC</span>
          Lima Clara
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Locales</a>
          <a href="#destacados">Carta</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Pickup</a>
        </nav>
        <a className="button dark" href="#pedido">
          Pedir bebidas
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Bebidas frescas / Belgrano</span>
          <h1>Bebidas listas para cortar el dia.</h1>
          <p>
            Jugos, iced coffee, mocktails y packs para oficina con retiro rapido
            o delivery por zona.
          </p>
          <div className="actions">
            <a className="button primary" href="#pedido">
              Pedir bebidas
            </a>
            <a className="button outline" href="#menu-qr">
              Ver carta
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="Bebida fria con hielo y fruta" />
        </div>
      </section>

      <section className="section info-section" id="info">
        <SectionTitle
          kicker="03 / Info del local"
          title="Retiro facil, horario claro"
          detail="Lo necesario para decidir rapido: zona, tiempos, promos y contacto."
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
          title="Favoritos para pedir seguido"
          detail="Productos por ocasion: frias, calientes, packs y opciones sin alcohol."
        />
        <div className="product-grid">
          {drinks.map((drink) => (
            <article className="product-card" key={drink.name}>
              <img src={drink.image} alt={drink.name} loading="lazy" />
              <div>
                <span>{drink.tag}</span>
                <h3>{drink.name}</h3>
                <p>{drink.detail}</p>
                <strong>{drink.price}</strong>
                <a href="#pedido">Agregar</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-band" id="galeria">
        <SectionTitle
          kicker="05 / Galeria"
          title="Vasos, barra y color real"
          detail="Imagenes de producto y take away para elegir antes de pedir."
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
          title="Carta por categorias"
          detail="Abrilo desde la mesa, compartilo o usalo para armar un pedido."
        />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span className="eyebrow">Menu actualizado</span>
            <h3>Frias, calientes, cocteles, packs y sin alcohol.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button outline" href="#pedido">
            Abrir carta
          </a>
        </div>
      </section>

      <section className="section pickup-section" id="pedido">
        <SectionTitle
          kicker="07 / Pedido o pickup"
          title="Arma el pedido y retiralo sin espera"
          detail="Elegis cantidad, modo de entrega y zona antes de confirmar."
        />
        <div className="pickup-panel">
          <div>
            <span className="eyebrow">Pedido rapido</span>
            <h3>Retiro en 15 minutos o delivery en Belgrano</h3>
            <p>Tambien tomamos packs para reuniones con 2 horas de anticipacion.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Cantidad
              <select defaultValue="4 bebidas">
                <option>2 bebidas</option>
                <option>4 bebidas</option>
                <option>6 bebidas</option>
                <option>Pack oficina</option>
              </select>
            </label>
            <label>
              Modalidad
              <select defaultValue="Retiro">
                <option>Retiro</option>
                <option>Delivery</option>
              </select>
            </label>
            <label className="wide">
              Zona o nota
              <input placeholder="Belgrano, puerta o aclaracion" />
            </label>
            <button className="button primary wide" type="submit">
              Pedir bebidas
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <h2>Hoy hay 2x1 de 16 a 18. Tu pedido puede estar listo en 15 minutos.</h2>
        <div className="actions">
          <a className="button primary" href="#pedido">
            Pedir bebidas
          </a>
          <a className="button outline" href="#menu-qr">
            Ver carta
          </a>
        </div>
      </section>

      <a className="floating-order" href="#pedido" aria-label="Pedir bebidas">
        +
      </a>

      <footer className="site-footer">
        <strong>Lima Clara</strong>
        <span>Moldes 1864, Belgrano</span>
        <a href="#menu-qr">Carta QR</a>
        <a href="#pedido">Pedir</a>
      </footer>
    </main>
  );
}

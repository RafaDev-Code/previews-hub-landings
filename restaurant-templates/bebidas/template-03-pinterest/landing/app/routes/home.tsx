import type { Route } from "./+types/home";

const heroPins = [
  [
    "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
    "Jugos citricos",
  ],
  [
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80",
    "Coctel frutal",
  ],
  [
    "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
    "Cafe frio",
  ],
  [
    "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=80",
    "Bebida verde",
  ],
];

const drinks = [
  {
    name: "Pomelo rosa",
    detail: "Pomelo, soda, sal y hielo.",
    price: "$ 4.600",
    tag: "Guardar",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced coffee crema",
    detail: "Cafe frio, leche y espuma dulce.",
    price: "$ 4.900",
    tag: "Fria",
    image:
      "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jugo verde",
    detail: "Manzana, pepino, limon y menta.",
    price: "$ 4.700",
    tag: "Detox",
    image:
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Soda hibiscus",
    detail: "Hibiscus, lima y burbuja fina.",
    price: "$ 4.500",
    tag: "Nuevo",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pack brunch",
    detail: "Seis bebidas frias para compartir.",
    price: "$ 23.500",
    tag: "Pack",
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate helado",
    detail: "Cacao, leche, hielo y crema.",
    price: "$ 4.900",
    tag: "Dulce",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Abierto", "10:00-21:00", "Retiro y delivery"],
  ["Zona", "Villa Crespo", "Corrientes 5120"],
  ["Tiempo", "20 min", "Pedido promedio"],
  ["Promo", "Combo x3", "Precio especial"],
];

const gallery = [
  ...heroPins,
  [
    "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
    "Vasos frios con frutas",
  ],
  [
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80",
    "Bebidas preparadas en barra",
  ],
  [
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=800&q=80",
    "Limonadas con hielo",
  ],
  [
    "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=800&q=80",
    "Chocolate caliente",
  ],
];

const categories = ["Frias", "Calientes", "Cocteles", "Packs", "Sin alcohol"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mosaico Bebidas | Carta visual y pedidos" },
    {
      name: "description",
      content:
        "Landing visual para tienda de bebidas con masonry, menu QR y pedido.",
    },
  ];
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

export default function Home() {
  return (
    <main className="pin-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mosaico Bebidas">
          Mosaico
        </a>
        <nav aria-label="Secciones">
          <a href="#destacados">Ideas</a>
          <a href="#galeria">Galeria</a>
          <a href="#menu-qr">Carta</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button primary" href="#pedido">
          Pedir bebidas
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span>Bar de bebidas / Villa Crespo</span>
          <h1>Elegir por antojo tambien es una forma de pedir.</h1>
          <p>
            Bebidas frias, packs y mocktails en una carta visual para descubrir,
            guardar y pedir.
          </p>
          <div className="actions">
            <a className="button primary" href="#pedido">
              Pedir bebidas
            </a>
            <a className="button secondary" href="#menu-qr">
              Ver carta
            </a>
          </div>
        </div>
        <div className="hero-pins" aria-label="Bebidas destacadas">
          {heroPins.map(([src, alt], index) => (
            <figure className={`pin-${index}`} key={src}>
              <img src={src} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section info-section" id="info">
        <SectionTitle
          kicker="03 / Info del local"
          title="Datos rapidos para pedir"
          detail="Direccion, tiempos, horario y promociones antes de abrir la carta completa."
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
          title="Pins para convertir antojo en pedido"
          detail="Imagen primero, nombre corto, precio y accion rapida."
        />
        <div className="masonry-grid">
          {drinks.map((drink, index) => (
            <article className={`drink-pin size-${index}`} key={drink.name}>
              <img src={drink.image} alt={drink.name} loading="lazy" />
              <a href="#pedido">{drink.tag}</a>
              <div>
                <h3>{drink.name}</h3>
                <p>{drink.detail}</p>
                <strong>{drink.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="galeria">
        <SectionTitle
          kicker="05 / Galeria"
          title="Masonry de vasos, botellas y colores"
          detail="La grilla mantiene alturas mixtas para navegar por deseo visual."
        />
        <div className="gallery-grid">
          {gallery.map(([src, alt], index) => (
            <figure className={`gallery-${index}`} key={`${src}-${index}`}>
              <img src={src} alt={alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="menu-qr">
        <SectionTitle
          kicker="06 / Menu QR"
          title="Carta compacta para compartir"
          detail="Categorias, precios y acceso al pedido desde el telefono."
        />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span>Menu actualizado</span>
            <h3>Frias, calientes, cocteles, packs y sin alcohol.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button secondary" href="#pedido">
            Abrir carta
          </a>
        </div>
      </section>

      <section className="section order-section" id="pedido">
        <SectionTitle
          kicker="07 / Pedido o pickup"
          title="Pedido visual, confirmacion simple"
          detail="Cantidad, retiro o envio y nota para preparar mejor el pedido."
        />
        <div className="order-panel">
          <div>
            <span>Pedido sugerido</span>
            <h3>Combo x3: pomelo, iced coffee y soda hibiscus.</h3>
            <p>Listo en 20 minutos. Delivery disponible en Villa Crespo.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Cantidad
              <select defaultValue="Combo x3">
                <option>Combo x3</option>
                <option>Pack x6</option>
                <option>Bebida individual</option>
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
              Nota
              <input placeholder="Sin azucar, horario, direccion" />
            </label>
            <button className="button primary wide" type="submit">
              Pedir bebidas
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <h2>Guarda la carta, elegi el pin y pedi para hoy.</h2>
        <div className="actions">
          <a className="button primary" href="#pedido">
            Pedir bebidas
          </a>
          <a className="button secondary" href="#menu-qr">
            Ver carta
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Mosaico Bebidas</strong>
        <span>Corrientes 5120, Villa Crespo</span>
        <a href="#galeria">Galeria</a>
        <a href="#pedido">Pedido</a>
      </footer>
    </main>
  );
}

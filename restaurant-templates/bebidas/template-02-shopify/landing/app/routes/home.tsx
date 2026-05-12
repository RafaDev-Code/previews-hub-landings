import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1600&q=80";

const products = [
  {
    name: "Pack citrico x4",
    detail: "Pomelo, limon, naranja y soda premium.",
    price: "$ 16.900",
    tag: "Pack",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced latte botella",
    detail: "Cafe frio con leche, 330 ml.",
    price: "$ 4.800",
    tag: "Fria",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tonica botanic",
    detail: "Hierbas, quinina suave y gas fino.",
    price: "$ 3.900",
    tag: "Sin alcohol",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mocktail rojo",
    detail: "Frutos rojos, lima y bitter sin alcohol.",
    price: "$ 5.600",
    tag: "Coctel",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate frio",
    detail: "Cacao, leche, hielo y crema.",
    price: "$ 4.900",
    tag: "Dulce",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Caja degustacion",
    detail: "Ocho bebidas mixtas para reuniones.",
    price: "$ 29.000",
    tag: "Oficina",
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Entrega", "25-35 min", "CABA norte"],
  ["Retiro", "Local Colegiales", "Sin costo"],
  ["Pagos", "Tarjeta y QR", "Comprobante digital"],
  ["Promo", "Envio bonificado", "Desde $ 24.000"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
    "Bebidas frias en mostrador",
  ],
  [
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=900&q=80",
    "Barra preparando bebidas",
  ],
  [
    "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&w=900&q=80",
    "Cafe frio con hielo",
  ],
  [
    "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80",
    "Coctel con fruta",
  ],
  [
    "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80",
    "Bebida verde servida",
  ],
  [
    "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=900&q=80",
    "Botellas para llevar",
  ],
];

const categories = ["Frias", "Calientes", "Cocteles", "Packs", "Sin alcohol"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bruma Botellas | Pedido online de bebidas" },
    {
      name: "description",
      content:
        "Landing comercial para pedido de bebidas con catalogo, menu QR, pickup y delivery.",
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
    <main className="shop-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bruma Botellas">
          Bruma Botellas
        </a>
        <nav aria-label="Secciones">
          <a href="#destacados">Catalogo</a>
          <a href="#galeria">Galeria</a>
          <a href="#menu-qr">Carta</a>
          <a href="#pedido">Checkout</a>
        </nav>
        <a className="button primary" href="#pedido">
          Pedir bebidas
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Bebidas listas / pedido online</span>
          <h1>Tu heladera resuelta en un solo pedido.</h1>
          <p>
            Packs frios, botellas individuales y mocktails listos para tomar,
            con entrega por zona y retiro sin espera.
          </p>
          <div className="actions">
            <a className="button outline-dark" href="#destacados">
              Ver carta
            </a>
            <a className="button aloe" href="#pedido">
              Pedir bebidas
            </a>
          </div>
        </div>
        <img src={heroImage} alt="Bebidas frias con hielo y fruta" />
      </section>

      <section className="section info-section" id="info">
        <SectionTitle
          kicker="03 / Info del local"
          title="Compra clara antes del checkout"
          detail="Tiempos, retiro, pago y promo visible para reducir friccion."
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

      <section className="section catalog-section" id="destacados">
        <SectionTitle
          kicker="04 / Destacados"
          title="Catalogo con precio y accion directa"
          detail="Cards comerciales con cantidad, variantes y pedido en un paso."
        />
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <div>
                <span>{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
                <strong>{product.price}</strong>
                <a className="button primary" href="#pedido">
                  Agregar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section gallery-section" id="galeria">
        <SectionTitle
          kicker="05 / Galeria"
          title="Producto, packaging y barra"
          detail="Menos ambiente, mas evidencia visual de lo que llega."
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
          title="Carta para compartir"
          detail="Categorias y precios para abrir desde el telefono o enviar por WhatsApp."
        />
        <div className="qr-panel">
          <QrMark />
          <div>
            <span className="eyebrow">Carta liquida</span>
            <h3>Frias, calientes, cocteles, packs y sin alcohol.</h3>
            <div className="category-row">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
          <a className="button outline" href="#pedido">
            Abrir QR
          </a>
        </div>
      </section>

      <section className="section checkout-section" id="pedido">
        <SectionTitle
          kicker="07 / Pedido o pickup"
          title="Checkout breve para entrega o retiro"
          detail="Cantidad, metodo y zona antes de confirmar el pedido."
        />
        <div className="checkout-panel">
          <div>
            <span className="eyebrow">Resumen</span>
            <h3>Pack citrico x4 + envio bonificado</h3>
            <p>Disponible hoy. Retiro inmediato o entrega estimada en 25-35 min.</p>
            <strong>$ 16.900</strong>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Cantidad
              <select defaultValue="1 pack">
                <option>1 pack</option>
                <option>2 packs</option>
                <option>3 packs</option>
              </select>
            </label>
            <label>
              Modalidad
              <select defaultValue="Delivery">
                <option>Delivery</option>
                <option>Retiro</option>
              </select>
            </label>
            <label className="wide">
              Direccion o nota
              <input placeholder="Calle, piso, horario" />
            </label>
            <button className="button primary wide" type="submit">
              Confirmar pedido
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <h2>Compras antes de las 18:00 salen hoy.</h2>
        <div className="actions">
          <a className="button primary" href="#pedido">
            Pedir bebidas
          </a>
          <a className="button outline" href="#menu-qr">
            Ver carta
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Bruma Botellas</strong>
        <span>Colegiales · Delivery CABA norte</span>
        <a href="#destacados">Catalogo</a>
        <a href="#pedido">Checkout</a>
      </footer>
    </main>
  );
}

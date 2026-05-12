import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80";

const items = [
  {
    name: "Combo amanecer",
    detail: "Cafe con leche y medialuna tibia.",
    price: "$ 5.200",
    tag: "Promo",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Brunch de barrio",
    detail: "Tostadas, huevos, jugo y cafe filtrado.",
    price: "$ 10.900",
    tag: "Mesa",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tostado seguro",
    detail: "Masa madre, queso, jamon natural y pickles.",
    price: "$ 6.400",
    tag: "Favorito",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Budin compartido",
    detail: "Limon, glaseado y porcion generosa.",
    price: "$ 3.300",
    tag: "Dulce",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Iced latte",
    detail: "Espresso, leche fria y hielo.",
    price: "$ 4.500",
    tag: "Take away",
    image:
      "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mesa para dos",
    detail: "Dos cafes, dos dulces y agua filtrada.",
    price: "$ 12.000",
    tag: "Beneficio",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Direccion", "Humboldt 1720", "Palermo"],
  ["Horario", "Todos los dias 08:00-20:00", "Brunch hasta 15:00"],
  ["Pagos", "Tarjeta, QR y efectivo", "Ticket digital"],
  ["Promo", "10% en combo amanecer", "Lun-vie hasta 11:30"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
    "Barista preparando cafe",
  ],
  [
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=80",
    "Vitrina con pasteleria",
  ],
  [
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    "Cafe servido en taza",
  ],
  [
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
    "Mesa de desayuno",
  ],
  [
    "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
    "Medialunas en bandeja",
  ],
  [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
    "Salon de cafeteria",
  ],
];

const categories = ["Cafe", "Pasteleria", "Brunch", "Sandwiches", "Sin cafe"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Miga Clara | Cafe, beneficios y pedido" },
    {
      name: "description",
      content:
        "Landing calida para cafeteria con beneficios, pagos, menu QR y pedido para llevar.",
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
    <main className="mc-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Miga Clara">
          Miga Clara
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Promos</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="search-button" href="#menu-qr" aria-label="Abrir menu QR">
          QR
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Cafe de barrio / Palermo</span>
          <h1>Un cafe calido, beneficios claros y pago simple.</h1>
          <p>
            Menu de mañana y tarde con promociones visibles, take away y mesas
            para pasar sin apuro.
          </p>
          <div className="actions">
            <a className="button primary" href="#menu-qr">
              Ver menu
            </a>
            <a className="button secondary" href="#pedido">
              Pedir para llevar
            </a>
          </div>
        </div>
        <div className="hero-frame">
          <img src={heroImage} alt="Cafeteria luminosa con barra y mesas" />
        </div>
      </section>

      <section className="section" id="info">
        <SectionTitle
          kicker="03 / Info del local"
          title="Lo esencial antes de venir"
          detail="Horario, direccion, medios de pago y promocion vigente cerca del CTA."
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

      <section className="section orbit-section" id="destacados">
        <SectionTitle
          kicker="04 / Destacados"
          title="Recomendados, promos y opciones para compartir"
          detail="Cada destacado conecta producto, beneficio y precio."
        />
        <div className="orbit-grid">
          {items.map((item) => (
            <article className="orbit-card" key={item.name}>
              <div className="portrait">
                <img src={item.image} alt={item.name} loading="lazy" />
                <a href="#pedido" aria-label={`Pedir ${item.name}`}>
                  →
                </a>
              </div>
              <span className="eyebrow">{item.tag}</span>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="galeria">
        <SectionTitle
          kicker="05 / Galeria"
          title="Mesas, vitrina y cafe servido"
          detail="Fotos de experiencia amable, producto y señales de confianza."
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
          title="Carta QR con precios y categorias"
          detail="Menu mobile-first para consultar desde mesa o compartir."
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
          <a className="button secondary" href="#pedido">
            Abrir menu
          </a>
        </div>
      </section>

      <section className="section" id="pedido">
        <SectionTitle
          kicker="07 / Pedido o mesa"
          title="Pedido simple, pago claro"
          detail="Elegis combo, modalidad y nota antes de confirmar."
        />
        <div className="order-panel">
          <div>
            <span className="eyebrow">Beneficio activo</span>
            <h3>Combo amanecer con 10% hasta las 11:30</h3>
            <p>Retiro en 10 minutos o mesa chica sujeta a disponibilidad.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Producto
              <select defaultValue="Combo amanecer">
                <option>Combo amanecer</option>
                <option>Brunch de barrio</option>
                <option>Mesa para dos</option>
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
              <input placeholder="Horario, cantidad o aclaracion" />
            </label>
            <button className="button primary wide" type="submit">
              Pedir para llevar
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <h2>Pasar por cafe deberia ser simple: menu claro, promo visible y pago facil.</h2>
        <div className="actions">
          <a className="button primary" href="#menu-qr">
            Ver menu
          </a>
          <a className="button secondary" href="#pedido">
            Pedir para llevar
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <h2>Estamos cerca cuando necesites cafe.</h2>
          <p>Humboldt 1720 · Todos los dias 08:00-20:00 · Palermo</p>
        </div>
        <nav aria-label="Footer">
          <a href="#info">Info</a>
          <a href="#menu-qr">Menu QR</a>
          <a href="#pedido">Pedido</a>
        </nav>
      </footer>
    </main>
  );
}

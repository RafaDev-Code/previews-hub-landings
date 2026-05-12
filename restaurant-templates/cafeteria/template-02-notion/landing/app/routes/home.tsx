import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80";

const items = [
  ["Cafe", "Cortado doble", "Espresso, leche texturizada", "$ 3.400"],
  ["Pasteleria", "Roll de canela", "Masa laminada y glaseado", "$ 3.200"],
  ["Brunch", "Tostada palta", "Huevo, palta, semillas y lima", "$ 6.900"],
  ["Sandwiches", "Ciabatta tibia", "Queso, tomate y pesto", "$ 6.400"],
  ["Sin cafe", "Chai frio", "Especias, leche y hielo", "$ 4.100"],
  ["Dulce", "Cookie de sal", "Chocolate amargo y escamas", "$ 2.900"],
];

const info = [
  ["Direccion", "Conde 902", "Colegiales"],
  ["Horario", "Lun-vie 08:00-19:30", "Sab-dom 09:00-18:00"],
  ["Take away", "10 minutos", "Pedido por WhatsApp"],
  ["Mesa", "Wifi + enchufes", "Salon tranquilo"],
];

const gallery = [
  [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    "Cafe servido en taza blanca",
  ],
  [
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    "Pasteleria dulce en plato",
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
    "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=80",
    "Vitrina de pasteleria",
  ],
  [
    "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
    "Cafe con leche en mesa",
  ],
];

const categories = ["Cafe", "Pasteleria", "Brunch", "Sandwiches", "Sin cafe"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cuaderno Cafe | Menu claro y take away" },
    {
      name: "description",
      content:
        "Landing minimal para cafeteria con menu, galeria, QR y pedido para llevar.",
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
    <main className="notion-landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Cuaderno Cafe">
          Cuaderno Cafe
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Menu</a>
          <a href="#galeria">Galeria</a>
          <a href="#pedido">Pedido</a>
        </nav>
        <a className="button primary" href="#menu-qr">
          Ver menu
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Cafeteria tranquila / Colegiales</span>
          <h1>Un cafe ordenado para leer, trabajar y llevar.</h1>
          <p>
            Menu corto, pasteleria fresca y mesas silenciosas con wifi. Todo lo
            importante esta visible antes de pedir.
          </p>
          <div className="actions">
            <a className="button primary" href="#menu-qr">
              Ver menu
            </a>
            <a className="button secondary-on-dark" href="#pedido">
              Pedir para llevar
            </a>
          </div>
        </div>
        <div className="menu-board">
          <img src={heroImage} alt="Barista preparando cafe" />
          <div className="board-rows">
            {items.slice(0, 4).map(([tag, name, detail, price]) => (
              <div className="board-row" key={name}>
                <span>{tag}</span>
                <strong>{name}</strong>
                <p>{detail}</p>
                <em>{price}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="info">
        <SectionTitle
          kicker="03 / Info del local"
          title="Todo lo basico en cuatro datos"
          detail="Direccion, horarios, take away y condiciones del salon."
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
          title="Menu simple, precios a la vista"
          detail="Lista legible con categorias y descripciones utiles."
        />
        <div className="menu-list">
          {items.map(([tag, name, detail, price], index) => (
            <article className={`menu-item tone-${index}`} key={name}>
              <span>{tag}</span>
              <h3>{name}</h3>
              <p>{detail}</p>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="galeria">
        <SectionTitle
          kicker="05 / Galeria"
          title="Pocas fotos, bien elegidas"
          detail="Taza, barra, mesa y vitrina con captions utiles."
        />
        <div className="gallery-grid">
          {gallery.map(([src, alt]) => (
            <figure key={src}>
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="menu-qr">
        <SectionTitle
          kicker="06 / Menu QR"
          title="Carta QR clara y compartible"
          detail="Categorias horizontales para mirar desde el telefono."
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
          title="Pedido corto para retirar o sentarse"
          detail="Elegis producto, modalidad y una nota breve."
        />
        <div className="order-panel">
          <div>
            <span className="eyebrow">Pedido sugerido</span>
            <h3>Cortado doble + roll de canela</h3>
            <p>Listo en 10 minutos. Mesas disponibles hasta las 18:30.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              Producto
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
              <input placeholder="Horario, leche vegetal o mesa" />
            </label>
            <button className="button primary wide" type="submit">
              Pedir para llevar
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <h2>Cafe, mesa o take away: elegi el modo y lo dejamos listo.</h2>
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
        <strong>Cuaderno Cafe</strong>
        <span>Conde 902, Colegiales</span>
        <a href="#menu-qr">Menu QR</a>
        <a href="#pedido">Pedido</a>
      </footer>
    </main>
  );
}

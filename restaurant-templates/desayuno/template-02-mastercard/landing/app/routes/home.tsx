import type { Route } from "./+types/home";

const featured = [
  {
    name: "Brunch seguro",
    price: "$ 10.800",
    tag: "Beneficio",
    description: "Cafe, tostado, fruta y jugo con precio cerrado.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mesa dulce",
    price: "$ 8.900",
    tag: "Compartir",
    description: "Medialunas, budin de limon, mermelada y manteca.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cafe orbit",
    price: "$ 3.200",
    tag: "Cafe",
    description: "Doble espresso, leche texturada o americano filtrado.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pancakes tibios",
    price: "$ 7.700",
    tag: "Promo",
    description: "Pancakes, banana, miel y crema suave.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bowl fruta",
    price: "$ 5.900",
    tag: "Liviano",
    description: "Fruta fresca, yogur natural y semillas.",
    image:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jugo pago simple",
    price: "$ 3.400",
    tag: "Natural",
    description: "Naranja, pomelo o mix verde exprimido.",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
  },
];

const info = [
  ["Direccion", "Juncal 1840", "Recoleta, salon y vereda"],
  ["Horario", "Mar-dom 08:00-14:00", "Brunch con reserva hasta 13:30"],
  ["Pagos", "Tarjeta, QR y efectivo", "Promos visibles antes de confirmar"],
  ["Contacto", "+54 11 5551-0908", "Reservas y pedidos por WhatsApp"],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
    alt: "Cafe servido en barra calida",
  },
  {
    src: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=80",
    alt: "Pancakes con fruta",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    alt: "Panificados para compartir",
  },
  {
    src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=80",
    alt: "Avocado toast de brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1000&q=80",
    alt: "Frutas frescas para desayuno",
  },
  {
    src: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1000&q=80",
    alt: "Jugo exprimido",
  },
];

const menuItems = [
  ["Combos", "Brunch seguro", "$ 10.800"],
  ["Cafe", "Cafe orbit", "$ 3.200"],
  ["Panificados", "Mesa dulce", "$ 8.900"],
  ["Tostados", "Avocado toast", "$ 7.900"],
  ["Jugos", "Jugo natural", "$ 3.400"],
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bruma Manana | Brunch y beneficios" },
    {
      name: "description",
      content:
        "Landing de desayuno con estilo calido, promociones claras y reserva simple.",
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
    <main className="landing mastercard-breakfast">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bruma Manana">
          <span className="brand-mark" />
          <span>Bruma Manana</span>
        </a>
        <nav aria-label="Secciones">
          <a href="#info">Info</a>
          <a href="#destacados">Beneficios</a>
          <a href="#menu-qr">Menu</a>
          <a href="#pedido">Reserva</a>
        </nav>
        <a className="button button-primary" href="#pedido">
          Pedir desayuno
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Desayuno con beneficio claro</span>
          <h1>Bruma Manana</h1>
          <p>
            Brunch, cafe y panificados con precios cerrados, promos visibles y
            reserva simple para empezar el dia sin sorpresas.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido">
              Pedir desayuno
            </a>
            <a className="button button-secondary" href="#destacados">
              Ver combos
            </a>
          </div>
          <div className="status-row">
            <span>Promo brunch hasta 11:30</span>
            <span>4.8 / 390 reseñas</span>
            <span>Pago QR disponible</span>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1400&q=80"
            alt="Brunch de palta, huevo y cafe"
          />
          <div className="hero-ticket">
            <span>Beneficio de la mañana</span>
            <strong>15% en brunch seguro</strong>
            <small>Disponible con reserva antes de las 10:45</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionHeading
          eyebrow="Info del local"
          title="Reserva con datos claros"
          detail="Horario, ubicacion, pagos y contacto en una banda facil de escanear."
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
          title="Combos por beneficio"
          detail="Recomendados, promos y opciones para compartir con precio visible."
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
                  <a href="#pedido">Elegir</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <SectionHeading
          eyebrow="Galeria"
          title="Mesa, cafe y confianza"
          detail="Fotografia circular y calida para mostrar producto y experiencia."
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
            title="Carta con precio y promo visible"
            detail="Categorias matinales, QR y salida directa a reserva o pedido."
          />
          <div className="tab-row">
            {["Combos", "Cafe", "Panificados", "Tostados", "Jugos"].map(
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
          eyebrow="Pedido o brunch"
          title="Elegir horario, cantidad y salida"
          detail="Pedido para llevar o reserva de mesa con confirmacion por WhatsApp."
        />
        <div className="order-panel">
          <div className="benefit-card">
            <span>Beneficio aplicado</span>
            <strong>15% off</strong>
            <p>Valido en combos seleccionados hasta las 11:30.</p>
          </div>
          <form className="order-form">
            <label>
              Combo
              <select>
                <option>Brunch seguro</option>
                <option>Mesa dulce</option>
                <option>Pancakes tibios</option>
              </select>
            </label>
            <label>
              Personas
              <input type="number" min="1" defaultValue="2" />
            </label>
            <label>
              Modo
              <select>
                <option>Mesa brunch</option>
                <option>Retiro</option>
                <option>Delivery</option>
              </select>
            </label>
            <button className="button button-primary" type="button">
              Confirmar desayuno
            </button>
          </form>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="eyebrow">Pago simple y promo vigente</span>
          <h2>Reserva el brunch de hoy con precio cerrado.</h2>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#pedido">
            Pedir desayuno
          </a>
          <a className="button button-secondary" href="#menu-qr">
            Abrir menu
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Bruma Manana</span>
        <span>Juncal 1840, Recoleta</span>
        <span>Brunch, take away y reservas</span>
      </footer>
    </main>
  );
}

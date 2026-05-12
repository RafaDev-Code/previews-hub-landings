import type { Route } from "./+types/home";

const heroPins = [
  {
    title: "Croquetas de hongos",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=760&q=80",
    size: "pin-tall",
  },
  {
    title: "Mesa para compartir",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=760&q=80",
    size: "pin-mid",
  },
  {
    title: "Pasta fresca",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=760&q=80",
    size: "pin-short",
  },
  {
    title: "Cóctel de la casa",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=760&q=80",
    size: "pin-mid",
  },
];

const featuredItems = [
  {
    name: "Croquetas de hongos",
    description: "Alioli de limón y sal de hierbas.",
    price: "$ 8.900",
    tag: "Guardado 128 veces",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=80",
    size: "pin-tall",
  },
  {
    name: "Pasta al huevo",
    description: "Salsa de tomate asado y parmesano.",
    price: "$ 17.200",
    tag: "Especial de la casa",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    size: "pin-mid",
  },
  {
    name: "Ensalada tibia",
    description: "Zanahoria, hojas, yogur y semillas.",
    price: "$ 12.600",
    tag: "Liviano",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    size: "pin-short",
  },
  {
    name: "Pollo braseado",
    description: "Puré rústico, jugo de cocción y verdes.",
    price: "$ 19.800",
    tag: "Más pedido",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
    size: "pin-tall",
  },
  {
    name: "Tarta de peras",
    description: "Crema suave y caramelo salado.",
    price: "$ 8.400",
    tag: "Dulce",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80",
    size: "pin-mid",
  },
  {
    name: "Vermut de estación",
    description: "Naranja, oliva y soda fría.",
    price: "$ 6.900",
    tag: "Aperitivo",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
    size: "pin-short",
  },
];

const gallery = [
  {
    title: "Salón con luz baja",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
    size: "pin-mid",
  },
  {
    title: "Panera de masa madre",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    size: "pin-short",
  },
  {
    title: "Cocina a la vista",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    size: "pin-tall",
  },
  {
    title: "Mesa de noche",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    size: "pin-mid",
  },
  {
    title: "Detalle de pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
    size: "pin-tall",
  },
  {
    title: "Copa de cierre",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
    size: "pin-short",
  },
  {
    title: "Postre para dos",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
    size: "pin-mid",
  },
  {
    title: "Plato principal",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    size: "pin-short",
  },
];

const info = [
  ["Zona", "Chacarita", "A pasos de Av. Corrientes"],
  ["Horario", "Mié-dom 18:30-00:00", "Brunch sáb y dom"],
  ["Teléfono", "+54 11 5021-8820", "Reservas por WhatsApp"],
  ["Estado", "Abierto hoy", "Mesas desde 19:30"],
];

const categories = [
  "Entradas",
  "Principales",
  "Especiales de la casa",
  "Postres",
  "Bebidas",
];

const menuRows = [
  ["Entradas", "Croquetas de hongos", "$ 8.900"],
  ["Principales", "Pasta al huevo", "$ 17.200"],
  ["Especiales", "Pollo braseado", "$ 19.800"],
  ["Bebidas", "Vermut de estación", "$ 6.900"],
];

const slots = ["19:30", "20:15", "21:00", "21:45"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mesa Roja | Restaurante visual y reservas" },
    {
      name: "description",
      content:
        "Landing visual para Mesa Roja con grillas tipo masonry, menú QR, destacados, galería y reservas.",
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
  detail?: string;
}) {
  return (
    <div className="section-title">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {detail ? <p>{detail}</p> : null}
    </div>
  );
}

function PinCard({
  title,
  image,
  size,
  children,
}: {
  title: string;
  image: string;
  size: string;
  children?: React.ReactNode;
}) {
  return (
    <article className={`pin-card ${size}`}>
      <img src={image} alt={title} loading="lazy" />
      <div className="pin-overlay">
        <span>{title}</span>
        {children}
      </div>
    </article>
  );
}

function QrMark() {
  return (
    <div className="qr-mark" aria-hidden="true">
      {Array.from({ length: 64 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="pinterest-restaurant">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Mesa Roja">
          <span className="brand-dot" />
          <strong>Mesa Roja</strong>
        </a>
        <div className="search-bar" role="search">
          <span>Buscar platos, mesas o menú</span>
        </div>
        <nav aria-label="Secciones principales">
          <a href="#destacados">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#reservas">Reservar</a>
        </nav>
        <a className="header-cta" href="#reservas">
          Reservar mesa
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Restaurante visual · Chacarita</span>
          <h1>Guardá el plato, reservá la mesa.</h1>
          <p>
            Una carta corta, fotogénica y de estación para cenar, compartir y
            volver a mirar antes de pedir.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#reservas">
              Reservar mesa
            </a>
            <a className="secondary-button" href="#menu-qr">
              Ver menú QR
            </a>
          </div>
          <div className="hero-stats" aria-label="Datos del local">
            <span>4.7 · 640 reseñas</span>
            <span>Abierto hoy</span>
            <span>Mesas desde 19:30</span>
          </div>
        </div>
        <div className="hero-pin-grid" aria-label="Platos destacados">
          {heroPins.map((pin) => (
            <PinCard
              key={pin.title}
              title={pin.title}
              image={pin.image}
              size={pin.size}
            />
          ))}
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionTitle
          kicker="Info del local"
          title="Datos para venir hoy"
          detail="Ubicación, horario y contacto listos para escanear rápido."
        />
        <div className="info-grid">
          {info.map(([label, primary, secondary]) => (
            <article className="info-card" key={label}>
              <span>{label}</span>
              <strong>{primary}</strong>
              <p>{secondary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" id="destacados">
        <SectionTitle
          kicker="Destacados"
          title="Pines de la carta"
          detail="Platos con foto, precio y una razón clara para pedirlos."
        />
        <div className="pin-board">
          {featuredItems.map((item) => (
            <PinCard
              key={item.name}
              title={item.name}
              image={item.image}
              size={item.size}
            >
              <p>{item.description}</p>
              <strong>{item.price}</strong>
              <em>{item.tag}</em>
            </PinCard>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <SectionTitle
          kicker="Galería"
          title="Texturas para elegir mesa"
          detail="Fotos de ambiente, cocina y platos que completan el recorrido visual."
        />
        <div className="gallery-masonry">
          {gallery.map((item) => (
            <PinCard
              key={item.title}
              title={item.title}
              image={item.image}
              size={item.size}
            />
          ))}
        </div>
      </section>

      <section className="menu-qr-section" id="menu-qr">
        <div className="menu-copy">
          <SectionTitle
            kicker="Menú QR"
            title="Abrí la carta por categoría"
            detail="Entradas, principales, especiales, postres y bebidas con precios visibles."
          />
          <div className="category-row" aria-label="Categorías del menú">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#reservas">
              Ver menú QR
            </a>
            <a className="secondary-button" href="#info">
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="qr-panel" aria-label="Vista previa de menú QR">
          <QrMark />
          <div className="menu-list">
            {menuRows.map(([category, item, price]) => (
              <div key={item}>
                <span>{category}</span>
                <strong>{item}</strong>
                <em>{price}</em>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reservation-section" id="reservas">
        <SectionTitle
          kicker="Reservas"
          title="Elegí horario y cantidad de personas"
          detail="Reserva directa para cena, con WhatsApp como alternativa."
        />
        <form className="reservation-form">
          <label>
            Fecha
            <input type="date" defaultValue="2026-05-12" />
          </label>
          <label>
            Personas
            <select defaultValue="2">
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="6">6 personas</option>
            </select>
          </label>
          <div className="slot-row" aria-label="Horarios disponibles">
            {slots.map((slot) => (
              <button key={slot} type="button">
                {slot}
              </button>
            ))}
          </div>
          <label className="wide-field">
            WhatsApp
            <input type="tel" placeholder="+54 9 11" />
          </label>
          <button className="primary-button submit-button" type="submit">
            Reservar mesa
          </button>
        </form>
      </section>

      <section className="final-cta">
        <span>Abierto hoy · Chacarita</span>
        <h2>Tu mesa puede salir de un plato guardado.</h2>
        <div className="hero-actions">
          <a className="primary-button" href="#reservas">
            Reservar mesa
          </a>
          <a className="secondary-button" href="#menu-qr">
            Ver menú QR
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Mesa Roja</strong>
        <span>Charlone 904 · Chacarita · +54 11 5021-8820</span>
      </footer>

      <a className="sticky-mobile-cta" href="#reservas">
        Reservar
      </a>
    </main>
  );
}

import type { Route } from "./+types/home";

const heroImage =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80";

const featuredItems = [
  {
    name: "Burrata de estación",
    description: "Tomates asados, albahaca fresca y pan de masa madre.",
    price: "$ 11.800",
    tag: "Entrada",
    image:
      "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ojo de bife a la brasa",
    description: "Papas rotas, chimichurri suave y jugo de cocción.",
    price: "$ 24.900",
    tag: "Principal",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Risotto de hongos",
    description: "Portobellos, parmesano y aceite de perejil.",
    price: "$ 18.600",
    tag: "Casa",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pesca con cítricos",
    description: "Crema de coliflor, hinojo y limón quemado.",
    price: "$ 21.400",
    tag: "Especial",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Flan de campo",
    description: "Dulce de leche, crema batida y crocante de almendras.",
    price: "$ 8.300",
    tag: "Postre",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Spritz de pomelo",
    description: "Aperitivo, pomelo rosado y soda bien fría.",
    price: "$ 7.700",
    tag: "Bebida",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    alt: "Salón cálido con mesas preparadas para la cena",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Mesa servida con platos para compartir",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
    alt: "Cocina abierta preparando platos",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Plato principal servido en vajilla clara",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    alt: "Equipo terminando el servicio en cocina",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Barra iluminada del restaurante",
  },
];

const info = [
  ["Dirección", "Costa Rica 4821", "Palermo Viejo"],
  ["Horarios", "Mar-dom 19:00-00:30", "Cocina hasta 23:45"],
  ["Contacto", "+54 11 4866-2041", "WhatsApp y reservas"],
  ["Cómo llegar", "A 4 cuadras de Plaza Armenia", "Mapa abierto"],
];

const categories = [
  "Entradas",
  "Principales",
  "Especiales de la casa",
  "Postres",
  "Bebidas",
];

const menuPreview = [
  ["Entradas", "Focaccia tibia", "$ 6.900"],
  ["Principales", "Pasta de sémola y ragú", "$ 17.800"],
  ["Especiales", "Mesa brasa para dos", "$ 39.500"],
  ["Postres", "Tiramisú de café", "$ 8.900"],
];

const slots = ["20:00", "20:45", "21:30", "22:15"];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Casa Bruma | Restaurante y reservas" },
    {
      name: "description",
      content:
        "Landing de restaurante para Casa Bruma con reservas, menú QR, destacados, galería e información del local.",
    },
  ];
}

function SectionTitle({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        {detail ? <p>{detail}</p> : null}
      </div>
    </div>
  );
}

function QrMark() {
  return (
    <div className="qr-mark" aria-hidden="true">
      {Array.from({ length: 49 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="airbnb-restaurant">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Casa Bruma">
          <span className="brand-mark">CB</span>
          <span>
            <strong>Casa Bruma</strong>
            <small>Restaurante de barrio</small>
          </span>
        </a>
        <nav aria-label="Secciones principales">
          <a href="#destacados">Menú</a>
          <a href="#galeria">Galería</a>
          <a href="#info">Ubicación</a>
          <a href="#reservas">Reservas</a>
        </nav>
        <a className="header-cta" href="#reservas">
          Reservar mesa
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Palermo Viejo · abierto hoy</span>
          <h1>Una mesa cálida para cenar sin apuro.</h1>
          <p>
            Cocina de estación, brasa suave y un salón de pocas mesas para
            compartir platos hechos en el momento.
          </p>
          <div className="search-pill" aria-label="Reserva rápida">
            <div>
              <span>Hoy</span>
              <strong>Mesas desde 20:00</strong>
            </div>
            <div>
              <span>Zona</span>
              <strong>Palermo Viejo</strong>
            </div>
            <a href="#reservas" aria-label="Buscar mesa">
              Reservar
            </a>
          </div>
          <div className="trust-row" aria-label="Datos de confianza">
            <span>4.8 de 5</span>
            <span>+920 reseñas</span>
            <span>Recomendado para cenas de a dos</span>
          </div>
        </div>
        <div className="hero-media">
          <img src={heroImage} alt="Salón de Casa Bruma con mesas servidas" />
          <div className="hero-badge">
            <span>Recomendación del chef</span>
            <strong>Risotto de hongos</strong>
            <small>Disponible esta noche</small>
          </div>
        </div>
      </section>

      <section className="info-section" id="info">
        <SectionTitle
          eyebrow="Info del local"
          title="Todo listo para llegar"
          detail="Dirección, horarios y contacto visibles antes de elegir la mesa."
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
          eyebrow="Destacados"
          title="Platos que definen la casa"
          detail="Seis recomendaciones con precio claro y fotos pensadas para decidir rápido."
        />
        <div className="featured-grid">
          {featuredItems.map((item) => (
            <article className="dish-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" />
              <div>
                <span>{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <SectionTitle
          eyebrow="Galería"
          title="Salón, cocina y mesa"
          detail="Ambiente de noche, cocina abierta y detalles de servicio."
        />
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={index === 0 ? "gallery-wide" : ""} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="menu-qr-section" id="menu-qr">
        <div className="qr-copy">
          <SectionTitle
            eyebrow="Menú QR"
            title="La carta completa en la mesa"
            detail="Categorías ordenadas, precios visibles y opción de consultar por WhatsApp."
          />
          <div className="category-row" aria-label="Categorías del menú">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="qr-actions">
            <a className="primary-button" href="#reservas">
              Ver menú QR
            </a>
            <a className="secondary-button" href="#info">
              Compartir por WhatsApp
            </a>
          </div>
        </div>
        <div className="menu-phone" aria-label="Vista previa del menú QR">
          <QrMark />
          <div className="menu-preview-list">
            {menuPreview.map(([category, item, price]) => (
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
          eyebrow="Reservas"
          title="Elegí mesa para esta noche"
          detail="Formulario compacto con WhatsApp como alternativa directa."
        />
        <form className="reservation-form">
          <label>
            Fecha
            <input type="date" defaultValue="2026-05-12" />
          </label>
          <label>
            Comensales
            <select defaultValue="2">
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
            </select>
          </label>
          <div className="slot-group" aria-label="Horarios disponibles">
            {slots.map((slot) => (
              <button type="button" key={slot}>
                {slot}
              </button>
            ))}
          </div>
          <label className="wide-field">
            Contacto
            <input type="tel" placeholder="Tu WhatsApp" />
          </label>
          <button className="primary-button form-submit" type="submit">
            Reservar mesa
          </button>
        </form>
      </section>

      <section className="final-cta">
        <span>Casa Bruma · Palermo Viejo</span>
        <h2>Hoy servimos cena hasta las 23:45.</h2>
        <p>Reservá mesa o abrí el menú antes de venir.</p>
        <div className="final-actions">
          <a className="primary-button" href="#reservas">
            Reservar mesa
          </a>
          <a className="secondary-button" href="#menu-qr">
            Ver menú QR
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Casa Bruma</strong>
        <span>Costa Rica 4821 · Palermo Viejo · +54 11 4866-2041</span>
      </footer>

      <a className="sticky-mobile-cta" href="#reservas">
        Reservar mesa
      </a>
    </main>
  );
}

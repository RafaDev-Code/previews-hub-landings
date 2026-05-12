import type { CSSProperties, ReactNode } from "react";

import { landing } from "../landingData";

export function meta() {
  return [
    { title: landing.metaTitle },
    { name: "description", content: landing.metaDescription },
  ];
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="section-head">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{intro}</p>
    </div>
  );
}

function QrMark() {
  return (
    <div className="qr-mark" aria-hidden="true">
      {Array.from({ length: 49 }).map((_, index) => (
        <span key={index} className={(index + Math.floor(index / 7)) % 3 === 0 ? "is-dark" : ""} />
      ))}
    </div>
  );
}

function Field({ field }: { field: (typeof landing.actionFields)[number] }) {
  return (
    <label className="field">
      <span>{field.label}</span>
      {"options" in field ? (
        <select defaultValue="">
          <option disabled value="">
            {field.placeholder}
          </option>
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input type={field.type} placeholder={field.placeholder} />
      )}
    </label>
  );
}

export default function Home() {
  const isDelivery = String(landing.mode) === "delivery";

  return (
    <main
      className={`landing visual-${landing.visual}`}
      style={landing.theme as CSSProperties}
    >
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label={landing.brand.name}>
          <span className="brand-mark" />
          <span>
            <strong>{landing.brand.name}</strong>
            <small>{landing.brand.category}</small>
          </span>
        </a>
        <nav aria-label="Secciones principales">
          <a href="#info">Info</a>
          <a href="#destacados">Destacados</a>
          <a href="#galeria">Galeria</a>
          <a href="#menu">Menu</a>
          <a href="#accion">{isDelivery ? "Pedido" : "Reservas"}</a>
        </nav>
        <Button href="#accion">{landing.conversion.primary}</Button>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">
              {landing.brand.category} / {landing.venue.neighborhood}
            </span>
            <h1>{landing.brand.name}</h1>
            <p className="tagline">{landing.brand.tagline}</p>
            <p className="hero-description">{landing.brand.description}</p>
            <div className="hero-actions" aria-label="Acciones principales">
              <Button href="#accion">{landing.conversion.primary}</Button>
              <Button href="#menu" variant="secondary">
                {landing.conversion.secondary}
              </Button>
              <Button href="#info" variant="ghost">
                {landing.conversion.tertiary}
              </Button>
            </div>
            <div className="hero-proof" aria-label="Estado y reputacion">
              <span>{landing.venue.status}</span>
              <span>{landing.proof.rating} / {landing.proof.reviews} reseñas</span>
              <span>{landing.proof.badge}</span>
            </div>
          </div>

          <figure className="hero-media">
            <img src={landing.heroImage} alt={landing.heroAlt} />
            <figcaption>
              <span>{landing.promo.label}</span>
              <strong>{landing.promo.detail}</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="info-section" id="info">
        <div className="section-inner">
          <SectionHead
            eyebrow="Info del local"
            title={landing.sections.infoTitle}
            intro={landing.sections.infoIntro}
          />
          <div className="info-grid">
            {landing.info.map((item) => (
              <article className="info-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section" id="destacados">
        <div className="section-inner">
          <SectionHead
            eyebrow="Destacados"
            title={landing.sections.featuredTitle}
            intro={landing.sections.featuredIntro}
          />
          <div className="featured-grid">
            {landing.featured.map((item) => (
              <article className="feature-card" key={item.name}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div>
                  <span>{item.tag}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="price-row">
                    <strong>{item.price}</strong>
                    <a href="#accion">{isDelivery ? "Agregar" : "Elegir"}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="section-inner">
          <SectionHead
            eyebrow="Galeria"
            title={landing.sections.galleryTitle}
            intro={landing.sections.galleryIntro}
          />
          <div className="gallery-grid">
            {landing.gallery.map((image, index) => (
              <figure className={index === 0 || index === 4 ? "is-wide" : ""} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-inner menu-layout">
          <div>
            <SectionHead
              eyebrow={isDelivery ? "Menu visual" : "Menu QR"}
              title={landing.sections.menuTitle}
              intro={landing.sections.menuIntro}
            />
            <div className="category-row" aria-label="Categorias del menu">
              {landing.menu.categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
            <div className="qr-panel">
              <QrMark />
              <div>
                <strong>{landing.menu.qrTitle}</strong>
                <p>{landing.menu.qrText}</p>
                <div className="hero-actions compact">
                  <Button href="#accion">{landing.conversion.primary}</Button>
                  <Button href="#footer" variant="secondary">
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-list" aria-label="Lista de menu">
            {landing.menu.sections.map((section) => (
              <div className="menu-group" key={section.title}>
                <div className="menu-group-title">
                  <h3>{section.title}</h3>
                  <span>{section.items.length} items</span>
                </div>
                {section.items.map((item) => (
                  <div className="menu-row" key={item.name}>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                    </div>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="action-section" id="accion">
        <div className="section-inner action-layout">
          <div>
            <SectionHead
              eyebrow={landing.conversion.sectionMode}
              title={landing.sections.actionTitle}
              intro={landing.sections.actionIntro}
            />
            <div className="steps">
              {landing.steps.map((step) => (
                <div key={step.title}>
                  <span>{step.number}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="action-form">
            {landing.actionFields.map((field) => (
              <Field field={field} key={field.label} />
            ))}
            <button type="button">{landing.conversion.primary}</button>
            <p>{landing.actionNote}</p>
          </form>
        </div>
      </section>

      <section className="final-section">
        <div className="section-inner final-layout">
          <div>
            <span className="eyebrow">CTA final</span>
            <h2>{landing.final.title}</h2>
            <p>{landing.final.text}</p>
          </div>
          <div className="hero-actions">
            <Button href="#accion">{landing.conversion.primary}</Button>
            <Button href="#menu" variant="secondary">
              {landing.conversion.secondary}
            </Button>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="footer">
        <div>
          <strong>{landing.brand.name}</strong>
          <p>{landing.venue.address} / {landing.venue.hours}</p>
        </div>
        <div>
          <a href="#top">Inicio</a>
          <a href="#menu">{landing.conversion.secondary}</a>
          <a href="#accion">{landing.conversion.primary}</a>
        </div>
      </footer>
    </main>
  );
}

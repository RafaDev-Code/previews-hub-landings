// Base structural wireframe: 1 landing base + 1 QR menu support screen.
// This is the neutral source structure that future visual templates should skin.

const {
  BRAND,
  DISHES,
  StatusBar,
  Stars,
  HeaderMobile,
  HeaderDesk,
  SectionHead,
  InfoBlock,
  DishCard,
  Gallery,
  ReservaBox,
  FinalCTA,
} = window.WF;

const BASE_STRUCTURE_KEY = 'landing.base';
const QR_STRUCTURE_KEY = 'qr.menu-list';

const Section = ({ n, t, sub, children }) => (
  <section>
    <SectionHead n={n} t={t} sub={sub} />
    {children}
  </section>
);

const HeroMobile = () => (
  <div style={{ padding: '14px 14px 16px', borderBottom: '1.4px solid var(--ink)' }}>
    <span className="cap">{BRAND.cat} · Palermo</span>
    <div className="hand" style={{ fontSize: 34, fontWeight: 700, lineHeight: 0.92, marginTop: 4 }}>
      {BRAND.name}
    </div>
    <div className="cap" style={{ marginTop: 2 }}>{BRAND.tag}</div>
    <p style={{ margin: '8px 0 0', fontSize: 11, color: 'var(--ink-soft)' }}>{BRAND.desc}</p>
    <div style={{ marginTop: 8 }}><Stars /></div>
    <div className="img ember" style={{ height: 112, marginTop: 12 }}>foto hero · negocio / producto principal</div>
    <div className="row" style={{ gap: 6, marginTop: 10 }}>
      <button className="btn ember" style={{ flex: 1, fontSize: 10 }}>Acción principal</button>
      <button className="btn" style={{ flex: 1, fontSize: 10 }}>Ver menú QR</button>
    </div>
  </div>
);

const HeroDesktop = () => (
  <div className="row" style={{ padding: '34px 60px', gap: 28, borderBottom: '1.4px solid var(--ink)', alignItems: 'stretch' }}>
    <div style={{ flex: '0 0 48%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <span className="cap">{BRAND.cat} · Palermo · BA</span>
      <div className="hand" style={{ fontSize: 68, fontWeight: 700, lineHeight: 0.9, marginTop: 6 }}>
        {BRAND.name}
      </div>
      <div className="cap" style={{ marginTop: 5 }}>{BRAND.tag} · desde 2014</div>
      <p style={{ margin: '14px 0 0', fontSize: 13, color: 'var(--ink-soft)', maxWidth: 420 }}>{BRAND.desc}</p>
      <div className="row" style={{ gap: 12, marginTop: 12 }}>
        <Stars />
        <span className="num">·</span>
        <span className="num">abierto hoy</span>
      </div>
      <div className="row" style={{ gap: 8, marginTop: 16 }}>
        <button className="btn ember">Acción principal</button>
        <button className="btn">Ver menú QR</button>
      </div>
    </div>
    <div style={{ flex: 1 }}>
      <div className="img ember" style={{ height: '100%', minHeight: 285 }}>foto hero · experiencia principal</div>
    </div>
  </div>
);

const FeaturedMobile = () => (
  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 6 }}>
    {DISHES.slice(0, 4).map((d, i) => <DishCard key={i} d={d} />)}
  </div>
);

const FeaturedDesktop = () => (
  <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
    {DISHES.slice(0, 6).map((d, i) => <DishCard key={i} d={d} big />)}
  </div>
);

const MenuTeaserMobile = () => (
  <div className="box soft" style={{ padding: 10 }}>
    <div className="row" style={{ gap: 8 }}>
      <div className="img" style={{ width: 52, height: 52, flexShrink: 0, fontSize: 7 }}>QR</div>
      <div style={{ flex: 1 }}>
        <div className="hand" style={{ fontSize: 14, fontWeight: 600 }}>Menú completo</div>
        <div className="cap" style={{ marginTop: 3 }}>categorías · precios · WhatsApp</div>
      </div>
      <span className="pill dark" style={{ fontSize: 9, padding: '3px 8px' }}>abrir</span>
    </div>
  </div>
);

const MenuTeaserDesktop = () => (
  <div className="row box soft" style={{ padding: 14, gap: 14, alignItems: 'center' }}>
    <div className="img" style={{ width: 82, height: 82, flexShrink: 0 }}>QR</div>
    <div style={{ flex: 1 }}>
      <div className="hand" style={{ fontSize: 20, fontWeight: 600 }}>Menú QR como pantalla secundaria</div>
      <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 4 }}>
        Lista mobile-first con categorías, precios, pedido por WhatsApp y vuelta a la landing.
      </div>
    </div>
    <button className="btn">Abrir menú QR</button>
  </div>
);

const BaseLandingMobile = () => (
  <div className="wf">
    <StatusBar />
    <HeaderMobile />
    <HeroMobile />
    <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Section n="3" t="Info del local"><InfoBlock mobile /></Section>
      <Section n="4" t="Destacados"><FeaturedMobile /></Section>
      <Section n="5" t="Galería"><Gallery rows={2} cols={3} sizes={[44, 60, 44, 60, 44, 60]} /></Section>
      <Section n="6" t="Menú QR"><MenuTeaserMobile /></Section>
      <Section n="7" t="Reservas"><ReservaBox mobile /></Section>
      <Section n="8" t="CTA final"><FinalCTA mobile /></Section>
    </div>
  </div>
);

const BaseLandingDesktop = () => (
  <div className="wf">
    <HeaderDesk />
    <HeroDesktop />
    <div style={{ padding: '24px 60px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <Section n="3" t="Info del local"><InfoBlock /></Section>
      <Section n="4" t="Destacados" sub="6 ítems"><FeaturedDesktop /></Section>
      <Section n="5" t="Galería"><Gallery rows={2} cols={4} sizes={[60, 82, 58, 74, 76, 58, 82, 60]} /></Section>
      <Section n="6" t="Menú QR"><MenuTeaserDesktop /></Section>
      <Section n="7" t="Reservas"><ReservaBox /></Section>
      <Section n="8" t="CTA final"><FinalCTA /></Section>
    </div>
  </div>
);

function App() {
  React.useEffect(() => { document.getElementById('loader')?.remove(); }, []);

  return (
    <window.DesignCanvas>
      <window.DCSection
        id="landing-base"
        title="Base wireframe"
        subtitle={`${BASE_STRUCTURE_KEY} · fuente estructural única para templates`}
      >
        <window.DCArtboard id="landing-base-mobile" label={`${BASE_STRUCTURE_KEY} · mobile`} width={375} height={980}>
          <div data-screen-label={`${BASE_STRUCTURE_KEY} · Mobile`}><BaseLandingMobile /></div>
        </window.DCArtboard>
        <window.DCArtboard id="landing-base-desktop" label={`${BASE_STRUCTURE_KEY} · desktop`} width={1280} height={1420}>
          <div data-screen-label={`${BASE_STRUCTURE_KEY} · Desktop`}><BaseLandingDesktop /></div>
        </window.DCArtboard>
      </window.DCSection>

      <window.DCSection id="qr-base" title="Menú QR base" subtitle={`${QR_STRUCTURE_KEY} · soporte mobile-first`}>
        <window.DCArtboard id="qr-menu-list" label={`${QR_STRUCTURE_KEY} · mobile`} width={375} height={840}>
          <div data-screen-label={`${QR_STRUCTURE_KEY} · Mobile`}><window.MenuQRBase /></div>
        </window.DCArtboard>
      </window.DCSection>
    </window.DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

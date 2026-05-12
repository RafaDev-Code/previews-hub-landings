// Shared wireframe primitives for the base landing and QR menu.
// Restaurante ficticio: "El Fueguito — Parrilla de barrio"

const BRAND = {
  name: 'El Fueguito',
  tag: 'Parrilla de barrio',
  cat: 'Parrilla / Asador',
  desc: 'Carbón de quebracho, cortes al punto y vermut frío. Reservas chicas, mesas grandes.',
  rating: '4.8',
  reviews: '482',
  addr: 'Av. Honduras 4521, Palermo, BA',
  phone: '+54 11 5555-2840',
  hours: 'mar–dom · 19:30 → 00:30',
  maps: 'Ver en Google Maps',
};

const DISHES = [
  { n: 'Bife de chorizo', p: '$ 14.500', d: '350g · maduración 21d' },
  { n: 'Mollejas a la parrilla', p: '$ 9.800', d: 'limón ahumado, sal de mar' },
  { n: 'Provoleta', p: '$ 6.200', d: 'orégano fresco, pan tostado' },
  { n: 'Empanada de carne cortada a cuchillo', p: '$ 1.800', d: 'al horno de barro' },
  { n: 'Vacío braseado', p: '$ 12.900', d: 'cocción 6h, papas rotas' },
  { n: 'Chorizo de campo', p: '$ 3.400', d: 'pan de masa madre' },
];

// ─── small reusable wireframe atoms ────────────────────────────
const Logo = ({ small }) => (
  <div className="row" style={{gap:5, alignItems:'center'}}>
    <div style={{width: small?14:18, height: small?14:18, border:'1.5px solid var(--ink)', borderRadius:'50%', position:'relative', flexShrink:0}}>
      <span style={{position:'absolute', inset:3, background:'var(--ember)', borderRadius:'50%'}} />
    </div>
    <span className="hand" style={{fontSize: small?14:17, fontWeight:700, color:'var(--ink)', letterSpacing:'-0.01em', lineHeight:1}}>El Fueguito</span>
  </div>
);

const StatusBar = () => (
  <div className="phone-statusbar">
    <span>9:41</span><span style={{letterSpacing:1}}>•••  ▮</span>
  </div>
);

const Stars = ({ r='4.8', n='482' }) => (
  <span className="row" style={{gap:4, alignItems:'baseline'}}>
    <span className="star">★★★★★</span>
    <span className="num" style={{color:'var(--ink)', fontWeight:600}}>{r}</span>
    <span className="num">({n} reseñas)</span>
  </span>
);

// ────────────────────────────────────────────────────────────────
// Header reused across mobile + desktop
// ────────────────────────────────────────────────────────────────
const HeaderMobile = () => (
  <div className="between" style={{padding:'10px 14px', borderBottom:'1.4px solid var(--ink)'}}>
    <Logo small />
    <div className="row" style={{gap:6}}>
      <span className="pill soft" style={{fontSize:9, padding:'3px 8px'}}>menú QR</span>
      <span className="pill ember" style={{fontSize:9, padding:'3px 8px'}}>WhatsApp</span>
    </div>
  </div>
);

const HeaderDesk = () => (
  <div className="between" style={{padding:'12px 24px', borderBottom:'1.4px solid var(--ink)'}}>
    <Logo />
    <div className="row" style={{gap:14}}>
      <span className="cap">menú QR</span>
      <span className="cap">galería</span>
      <span className="cap">reservas</span>
      <span className="cap">visitanos</span>
      <span className="pill ember" style={{padding:'5px 12px', fontSize:10}}>WhatsApp ↗</span>
    </div>
  </div>
);

// Section heading scribble
const SectionHead = ({n, t, sub}) => (
  <div style={{display:'flex', alignItems:'baseline', gap:6, marginBottom:6}}>
    <span className="num">0{n}</span>
    <span className="hand" style={{fontSize:15, fontWeight:600, color:'var(--ink)'}}>{t}</span>
    {sub && <span className="cap" style={{marginLeft:'auto'}}>{sub}</span>}
  </div>
);

// Info block (dirección, teléfono, horarios, mapa)
const InfoBlock = ({mobile}) => (
  <div className={mobile?'col':'grid'} style={{gap:6, ...(mobile?{}:{gridTemplateColumns:'1fr 1fr 1fr 1.4fr'})}}>
    <div className="box soft" style={{padding:8}}>
      <div className="cap">dirección</div>
      <div style={{fontSize:11, marginTop:2}}>Av. Honduras 4521<br/>Palermo, BA</div>
    </div>
    <div className="box soft" style={{padding:8}}>
      <div className="cap">teléfono</div>
      <div style={{fontSize:11, marginTop:2}}>+54 11 5555-2840</div>
    </div>
    <div className="box soft" style={{padding:8}}>
      <div className="cap">horarios</div>
      <div style={{fontSize:11, marginTop:2}}>mar–dom<br/>19:30 → 00:30</div>
    </div>
    <div className="box soft" style={{padding:8, position:'relative', minHeight: mobile?60:undefined, overflow:'hidden'}}>
      <div className="cap">ubicación</div>
      <div className="img" style={{position:'absolute', inset:'22px 8px 8px', fontSize:8}}>google maps</div>
    </div>
  </div>
);

// Destacados grid
const DishCard = ({d, big, dark}) => (
  <div className={'box ' + (dark?'dark':'soft')} style={{padding:0, overflow:'hidden', display:'flex', flexDirection:'column'}}>
    <div className={'img ' + (dark?'dark':'')} style={{height: big?70:46}}>plato {d.n.split(' ')[0].toLowerCase()}</div>
    <div style={{padding:7}}>
      <div className="between" style={{alignItems:'flex-start', gap:6}}>
        <div style={{fontSize:10, fontWeight:600, lineHeight:1.2}}>{d.n}</div>
        <span className="price" style={{whiteSpace:'nowrap', color: dark?'var(--paper)':'var(--ink)'}}>{d.p}</span>
      </div>
      <div className="cap" style={{marginTop:3, color: dark?'var(--ink-faint)':'var(--ink-soft)'}}>{d.d}</div>
    </div>
  </div>
);

// Gallery grid
const Gallery = ({rows=2, cols=3, sizes}) => (
  <div className="grid" style={{gridTemplateColumns:`repeat(${cols},1fr)`, gap:5}}>
    {Array.from({length: rows*cols}).map((_,i)=>(
      <div key={i} className="img" style={{height: sizes ? sizes[i%sizes.length] : 50, fontSize:8}}>
        foto {i+1}
      </div>
    ))}
  </div>
);

// Reservation box
const ReservaBox = ({mobile}) => (
  <div className="box soft" style={{padding:10}}>
    <div className="row" style={{gap:5, marginBottom:8, flexWrap:'wrap'}}>
      <span className="pill" style={{fontSize:9, padding:'3px 8px', borderColor:'var(--ink)'}}>en la web</span>
      <span className="pill soft" style={{fontSize:9, padding:'3px 8px'}}>WhatsApp</span>
      <span className="pill soft" style={{fontSize:9, padding:'3px 8px'}}>plataforma externa</span>
    </div>
    <div className={mobile?'col':'grid'} style={{gap:5, ...(mobile?{}:{gridTemplateColumns:'1fr 1fr 1fr'})}}>
      <div className="box dashed" style={{padding:6, fontSize:9}}><div className="cap">fecha</div>jue 7 may</div>
      <div className="box dashed" style={{padding:6, fontSize:9}}><div className="cap">hora</div>21:00</div>
      <div className="box dashed" style={{padding:6, fontSize:9}}><div className="cap">comensales</div>4 personas</div>
    </div>
    <button className="btn ember" style={{width:'100%', marginTop:7, fontSize:11}}>Reservar mesa</button>
  </div>
);

// Final CTA
const FinalCTA = ({mobile}) => (
  <div className="box dark" style={{padding: mobile?12:18, textAlign:'center'}}>
    <div className="hand" style={{fontSize: mobile?16:22, color:'var(--paper)', marginBottom:6, fontWeight:600}}>
      Te esperamos con la parrilla prendida
    </div>
    <div className={mobile?'col':'row'} style={{gap:6, justifyContent:'center', marginTop:8}}>
      <button className="btn ember" style={{fontSize:10, padding:'6px 12px'}}>WhatsApp</button>
      <button className="btn" style={{fontSize:10, padding:'6px 12px', background:'transparent', borderColor:'var(--paper)', color:'var(--paper)'}}>Menú QR</button>
      <button className="btn" style={{fontSize:10, padding:'6px 12px', background:'transparent', borderColor:'var(--paper)', color:'var(--paper)'}}>Reservar mesa</button>
    </div>
  </div>
);

window.WF = { BRAND, DISHES, Logo, StatusBar, Stars, HeaderMobile, HeaderDesk, SectionHead, InfoBlock, DishCard, Gallery, ReservaBox, FinalCTA };

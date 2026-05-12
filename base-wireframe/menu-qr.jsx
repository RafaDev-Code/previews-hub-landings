// Menú QR — variante base mobile-first
const { BRAND, DISHES, Logo, StatusBar, Stars } = window.WF;

const MENU_SECTIONS = [
  { t:'Para empezar', items:[
    { n:'Provoleta', p:'$ 6.200', d:'orégano fresco · pan tostado'},
    { n:'Empanada de carne', p:'$ 1.800', d:'cortada a cuchillo · al horno de barro'},
    { n:'Mollejas', p:'$ 9.800', d:'limón ahumado · sal de mar'},
    { n:'Chinchulines', p:'$ 7.400', d:'crocantes · chimichurri de la casa'},
  ]},
  { t:'Parrilla', items:[
    { n:'Bife de chorizo', p:'$ 14.500', d:'350g · maduración 21d'},
    { n:'Vacío braseado', p:'$ 12.900', d:'cocción 6h · papas rotas'},
    { n:'Ojo de bife', p:'$ 16.800', d:'400g · sal Maldon'},
    { n:'Tira de asado', p:'$ 11.200', d:'corte ancho · parrilla viva'},
    { n:'Chorizo de campo', p:'$ 3.400', d:'pan de masa madre'},
  ]},
  { t:'De la huerta', items:[
    { n:'Papas rotas', p:'$ 4.200', d:'romero · ajo confitado'},
    { n:'Ensalada criolla', p:'$ 3.800', d:'tomate · cebolla · pimiento'},
    { n:'Verduras grilladas', p:'$ 4.600', d:'aceite de oliva nuestro'},
  ]},
  { t:'Postres', items:[
    { n:'Flan casero', p:'$ 3.600', d:'dulce de leche · crema'},
    { n:'Panqueque', p:'$ 3.400', d:'dulce de leche · helado'},
  ]},
];

// QR base — tabs por categoría + lista de items + CTA final
window.MenuQRBase = () => (
  <div className="wf">
    <StatusBar />
    {/* Header con volver + pedir */}
    <div className="between" style={{padding:'8px 12px', borderBottom:'1.4px solid var(--ink)'}}>
      <div className="row" style={{gap:5}}>
        <span className="pill soft" style={{fontSize:9, padding:'3px 7px'}}>← volver</span>
      </div>
      <Logo small />
      <span className="pill ember" style={{fontSize:9, padding:'3px 8px'}}>Pedir</span>
    </div>
    {/* Hero compacto */}
    <div style={{padding:'10px 12px', borderBottom:'1px solid var(--line-soft)'}}>
      <div className="cap">parrilla · palermo</div>
      <div className="hand" style={{fontSize:18, fontWeight:700, lineHeight:1, marginTop:2}}>Menú QR · El Fueguito</div>
      <div className="row" style={{gap:8, marginTop:5}}>
        <Stars r="4.8" n="482" />
        <span className="num">·</span>
        <span className="num">abierto hasta 00:30</span>
      </div>
    </div>
    {/* Tabs categoría sticky */}
    <div style={{padding:'8px 12px', borderBottom:'1.4px solid var(--ink)', background:'var(--paper-2)'}}>
      <div className="row" style={{gap:5, overflowX:'auto'}}>
        <span className="pill dark" style={{fontSize:9, padding:'3px 9px'}}>empezar</span>
        <span className="pill soft" style={{fontSize:9, padding:'3px 9px'}}>parrilla</span>
        <span className="pill soft" style={{fontSize:9, padding:'3px 9px'}}>huerta</span>
        <span className="pill soft" style={{fontSize:9, padding:'3px 9px'}}>postres</span>
        <span className="pill soft" style={{fontSize:9, padding:'3px 9px'}}>vinos</span>
      </div>
    </div>
    {/* Lista de secciones e items */}
    <div style={{padding:'10px 12px'}}>
      {MENU_SECTIONS.slice(0,2).map((s,i)=>(
        <div key={i} style={{marginBottom:14}}>
          <div className="between" style={{borderBottom:'1.4px solid var(--ink)', paddingBottom:3, marginBottom:6}}>
            <div className="hand" style={{fontSize:14, fontWeight:600}}>{s.t}</div>
            <span className="num">{s.items.length} platos</span>
          </div>
          {s.items.map((it,j)=>(
            <div key={j} className="between" style={{padding:'5px 0', borderBottom:'1px dotted var(--line)', alignItems:'flex-start', gap:8}}>
              <div style={{flex:1}}>
                <div style={{fontSize:11, fontWeight:600}}>{it.n}</div>
                <div className="cap" style={{marginTop:2}}>{it.d}</div>
              </div>
              <span className="price">{it.p}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    {/* CTA final sutil */}
    <div className="box dark" style={{margin:'0 12px 12px', padding:10, textAlign:'center'}}>
      <div className="hand" style={{fontSize:13, color:'var(--paper)', marginBottom:5}}>¿Listos para la mesa?</div>
      <div className="row" style={{justifyContent:'center', gap:5}}>
        <span className="pill ember" style={{fontSize:9, padding:'3px 9px'}}>WhatsApp</span>
        <span className="pill" style={{fontSize:9, padding:'3px 9px', background:'transparent', borderColor:'var(--paper)', color:'var(--paper)'}}>Reservar mesa</span>
      </div>
    </div>
  </div>
);

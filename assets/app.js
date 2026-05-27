const app=document.getElementById('app');

const defaultSignals={completed:0,skipped:0,focus:18,english:12,tech:20,silicon:24,karaoke:7,resourceClicks:0,sessions:[]};
function loadSignals(){try{return {...defaultSignals,...JSON.parse(localStorage.getItem('leos-signals')||'{}')}}catch{return {...defaultSignals}}}

const state={active:'for-you',mood:'balanced',profile:'silicon',session:null,signals:loadSignals()};
const enc=encodeURIComponent;
const link={
  youtube:q=>`https://www.youtube.com/results?search_query=${enc(q)}`,
  ytMusic:q=>`https://music.youtube.com/search?q=${enc(q)}`,
  spotify:q=>`https://open.spotify.com/search/${enc(q)}`,
  google:q=>`https://www.google.com/search?q=${enc(q)}`,
  ted:q=>`https://www.ted.com/search?q=${enc(q)}`,
  youglish:q=>`https://youglish.com/pronounce/${enc(q)}/english`,
  archive:q=>`https://archive.org/search?query=${enc(q)}`
};

const nav=[
  {id:'for-you',label:'For You',icon:'▶️'},
  {id:'silicon',label:'Silicon Mode',icon:'💻'},
  {id:'english',label:'English',icon:'🎙️'},
  {id:'karaoke',label:'Karaoke',icon:'🎵'},
  {id:'focus',label:'Focus',icon:'🧠'},
  {id:'insights',label:'Insights',icon:'📈'}
];

const moods=[
  {id:'balanced',label:'Balanceado'},
  {id:'low',label:'Baja energía'},
  {id:'focus',label:'Enfoque'},
  {id:'night',label:'Noche'},
  {id:'growth',label:'Crecimiento'}
];

const library=[
  {
    id:'sv-1',section:'silicon',type:'Serie',title:'Silicon Valley Energy',desc:'Humor tecnológico, startups, producto y cultura hacker para activar curiosidad sin saturarte.',time:'25 min',score:96,tags:['silicon','night','balanced'],icon:'💻',intent:'Reactivar curiosidad técnica',
    steps:['Ver un clip corto con subtítulos en inglés.','Anotar 3 frases de startup/producto.','Repetir en voz alta 2 frases para shadowing.'],
    resources:[
      {kind:'Video',label:'Clips en YouTube',url:link.youtube('Silicon Valley HBO startup clips English subtitles')},
      {kind:'Subtitles',label:'Clips con subtítulos',url:link.youtube('Silicon Valley tech startup scenes with English subtitles')},
      {kind:'Search',label:'Contexto de producto',url:link.google('Silicon Valley TV show startup product management lessons')}
    ]
  },
  {
    id:'sv-2',section:'silicon',type:'YouTube',title:'Fireship-style Tech Pulse',desc:'Micro cápsulas de tecnología, frameworks, IA y cultura dev con ritmo rápido.',time:'12 min',score:91,tags:['silicon','low','night'],icon:'⚡',intent:'Aprender sin fricción',
    steps:['Abrir una cápsula técnica corta.','Activar subtítulos en inglés.','Guardar 5 términos técnicos útiles.'],
    resources:[
      {kind:'Video',label:'Tech explained',url:link.youtube('Fireship AI tools explained short videos')},
      {kind:'Video',label:'Programming humor + tech',url:link.youtube('developer technology explained humor English subtitles')},
      {kind:'Search',label:'Trends IA dev',url:link.google('latest AI developer tools explained')}
    ]
  },
  {
    id:'sv-3',section:'silicon',type:'Podcast',title:'Startup Operators',desc:'Conversaciones sobre producto, mercado, ejecución y decisiones técnicas.',time:'35 min',score:87,tags:['growth','silicon'],icon:'🎧',intent:'Pensamiento de negocio',
    steps:['Escuchar 15-20 minutos.','Identificar una idea de producto aplicable.','Convertirla en acción para Lean English OS.'],
    resources:[
      {kind:'Podcast',label:'Spotify startup podcasts',url:link.spotify('startup product engineering podcast')},
      {kind:'Video',label:'Startup operators interviews',url:link.youtube('startup operators product engineering interview')},
      {kind:'TED',label:'TED startups/producto',url:link.ted('startup product technology')}
    ]
  },
  {
    id:'en-1',section:'english',type:'Shadowing',title:'Technical Standup Shadowing',desc:'Frases para explicar bloqueos, riesgos, avances y acciones en una junta técnica.',time:'15 min',score:94,tags:['english','focus','growth'],icon:'🎙️',intent:'Mejorar speaking técnico',
    steps:['Abrir un video de standup meeting.','Repetir frase por frase 2 veces.','Grabar 30 segundos explicando un bloqueo técnico.'],
    resources:[
      {kind:'Shadowing',label:'Standup meeting shadowing',url:link.youtube('business English daily standup meeting shadowing')},
      {kind:'Subtitles',label:'Meetings con subtítulos',url:link.youtube('engineering standup meeting English subtitles')},
      {kind:'Pronunciation',label:'YouGlish: troubleshooting',url:link.youglish('troubleshooting')}
    ]
  },
  {
    id:'en-2',section:'english',type:'Interview',title:'Quality Engineer Interview',desc:'Simulación de entrevista en inglés con vocabulario de calidad, SMT y problem solving.',time:'20 min',score:92,tags:['english','growth'],icon:'🛡️',intent:'Preparación profesional',
    steps:['Escuchar una entrevista o mock interview.','Responder 3 preguntas en voz alta.','Repetir tu respuesta con vocabulario técnico.'],
    resources:[
      {kind:'Video',label:'Quality engineer interview',url:link.youtube('Quality Engineer interview questions and answers English')},
      {kind:'Video',label:'Manufacturing interview English',url:link.youtube('manufacturing engineer interview English subtitles')},
      {kind:'Pronunciation',label:'YouGlish: root cause analysis',url:link.youglish('root cause analysis')}
    ]
  },
  {
    id:'en-3',section:'english',type:'Listening',title:'Low Energy Listening',desc:'Listening ligero con frases cortas y repetición útil para cerrar el día.',time:'10 min',score:82,tags:['english','low','night'],icon:'🌙',intent:'Mantener constancia',
    steps:['Elegir un audio corto.','Escuchar sin pausar una vez.','Escuchar de nuevo repitiendo frases clave.'],
    resources:[
      {kind:'Listening',label:'Slow English listening',url:link.youtube('slow English listening practice subtitles')},
      {kind:'Podcast',label:'English learning podcasts',url:link.spotify('English listening practice podcast')},
      {kind:'Archive',label:'Audiolibros libres',url:link.archive('English audiobooks public domain')}
    ]
  },
  {
    id:'ka-1',section:'karaoke',type:'Karaoke',title:'Coldplay Pronunciation Flow',desc:'Canciones claras para ritmo, connected speech y pronunciación sin presión.',time:'18 min',score:88,tags:['karaoke','low','night'],icon:'🎤',intent:'Fluidez con baja resistencia',
    steps:['Abrir una versión con lyrics/subtitles.','Cantar una vez leyendo.','Repetir solo el coro para ritmo y connected speech.'],
    resources:[
      {kind:'Karaoke',label:'Coldplay lyrics subtitles',url:link.youtube('Coldplay songs lyrics English subtitles karaoke')},
      {kind:'Music',label:'YouTube Music Coldplay',url:link.ytMusic('Coldplay lyrics')},
      {kind:'Spotify',label:'Spotify Coldplay lyrics',url:link.spotify('Coldplay')}
    ]
  },
  {
    id:'ka-2',section:'karaoke',type:'Karaoke',title:'OneRepublic Confidence Set',desc:'Sesión energética para practicar entonación y seguridad al hablar.',time:'22 min',score:84,tags:['karaoke','balanced'],icon:'🎶',intent:'Confianza vocal',
    steps:['Abrir canción con letra.','Practicar entonación por versos cortos.','Repetir una sección completa sin pausar.'],
    resources:[
      {kind:'Karaoke',label:'OneRepublic lyrics subtitles',url:link.youtube('OneRepublic lyrics English subtitles karaoke')},
      {kind:'Music',label:'YouTube Music OneRepublic',url:link.ytMusic('OneRepublic lyrics')},
      {kind:'Spotify',label:'Spotify OneRepublic',url:link.spotify('OneRepublic')}
    ]
  },
  {
    id:'fo-1',section:'focus',type:'Focus',title:'Deep Work Manufacturing',desc:'Bloque de concentración para reportes, dashboards, RCA o análisis de yield.',time:'45 min',score:93,tags:['focus','growth'],icon:'📊',intent:'Trabajo profundo',
    steps:['Abrir música sin letra.','Definir una sola tarea: reporte, dashboard o RCA.','Trabajar 45 minutos sin abrir redes.'],
    resources:[
      {kind:'Focus',label:'Deep work no lyrics',url:link.youtube('deep work music no lyrics focus')},
      {kind:'Focus',label:'Ambient focus music',url:link.ytMusic('ambient focus music no lyrics')},
      {kind:'Search',label:'Pomodoro deep work',url:link.google('deep work 45 minute focus method')}
    ]
  },
  {
    id:'fo-2',section:'focus',type:'Recovery',title:'Rebuild Mental Clarity',desc:'Secuencia corta para salir del ruido digital y regresar a claridad operativa.',time:'16 min',score:90,tags:['low','night','focus'],icon:'🧘',intent:'Reducir distracción',
    steps:['Cerrar fuentes de ruido digital.','Abrir audio calmado.','Escribir la siguiente acción útil.'],
    resources:[
      {kind:'Recovery',label:'Calm focus reset',url:link.youtube('calm focus music mental clarity no lyrics')},
      {kind:'Breathing',label:'Breathing exercise',url:link.youtube('short breathing exercise focus reset')},
      {kind:'Search',label:'Digital minimalism',url:link.google('digital minimalism reduce distraction practical steps')}
    ]
  },
  {
    id:'te-1',section:'tech',type:'Learn Tech',title:'SMT + English Sprint',desc:'Combina vocabulario técnico, ejemplos reales y frases listas para junta.',time:'28 min',score:95,tags:['tech','english','growth','focus'],icon:'🔎',intent:'Capacidad técnica + inglés',
    steps:['Ver un video técnico con subtítulos.','Extraer 5 términos SMT.','Explicar el proceso en inglés durante 60 segundos.'],
    resources:[
      {kind:'Video',label:'SMT process explained',url:link.youtube('SMT process explained English subtitles')},
      {kind:'Video',label:'PCB assembly process',url:link.youtube('PCB assembly SMT process English subtitles')},
      {kind:'Pronunciation',label:'YouGlish: soldering',url:link.youglish('soldering')}
    ]
  },
  {
    id:'te-2',section:'tech',type:'AI Discovery',title:'AI Tools for Builders',desc:'Exploración guiada de herramientas IA aplicadas a automatización, análisis y producto.',time:'24 min',score:89,tags:['tech','silicon','growth'],icon:'🤖',intent:'Descubrimiento útil',
    steps:['Abrir una búsqueda actual de herramientas IA.','Identificar una herramienta aplicable.','Convertirla en idea para automatizar un proceso.'],
    resources:[
      {kind:'Video',label:'AI tools automation',url:link.youtube('AI tools for automation dashboards workflow')},
      {kind:'Search',label:'AI agents builders',url:link.google('AI agents tools for builders automation')},
      {kind:'Video',label:'AI productivity systems',url:link.youtube('AI productivity system tools explained')}
    ]
  }
];

function saveSignals(){localStorage.setItem('leos-signals',JSON.stringify(state.signals));}
function hour(){return new Date().getHours();}
function timeContext(){const h=hour();if(h<11)return 'Morning build';if(h<18)return 'Execution mode';if(h<22)return 'Evening learning';return 'Night recovery';}
function predictedMood(){const h=hour();if(h>=22||h<6)return 'low';if(h>=18)return 'night';return state.mood;}
function scoreItem(item){let s=item.score;const m=predictedMood();if(item.tags.includes(m))s+=8;if(item.tags.includes(state.profile))s+=10;if(item.tags.includes('english'))s+=Math.min(10,state.signals.english/4);if(item.tags.includes('silicon'))s+=Math.min(10,state.signals.silicon/5);if(item.section==='focus')s+=Math.min(8,state.signals.focus/5);return Math.min(99,Math.round(s));}
function recommendations(filter){return library.filter(x=>!filter||x.section===filter||x.tags.includes(filter)).sort((a,b)=>scoreItem(b)-scoreItem(a));}
function itemById(id){return library.find(x=>x.id===id);}
function saveAndRender(){saveSignals();render();}
function track(item,action='completed'){
  state.signals[action]=(state.signals[action]||0)+1;
  if(item.section==='english')state.signals.english+=2;
  if(item.tags.includes('silicon'))state.signals.silicon+=2;
  if(item.section==='focus')state.signals.focus+=3;
  if(item.section==='tech')state.signals.tech+=2;
  if(item.section==='karaoke')state.signals.karaoke+=2;
  state.signals.sessions.unshift({id:item.id,title:item.title,action,at:new Date().toISOString()});
  state.signals.sessions=state.signals.sessions.slice(0,12);
  saveAndRender();
}

function resourceButtons(item,compact=false){return `<div class="resource-grid ${compact?'compact':''}">${item.resources.map((r,i)=>`<button class="resource-link" onclick="openResource('${item.id}',${i})"><small>${r.kind}</small><strong>${r.label}</strong></button>`).join('')}</div>`;}
function whyNow(item){const m=predictedMood();if(item.tags.includes(m))return `Ajustado a ${timeContext()} y mood ${m}.`;if(item.tags.includes('english'))return 'Refuerza tu English Momentum con baja fricción.';if(item.tags.includes('silicon'))return 'Compatible con tu perfil Silicon Builder.';return 'Siguiente acción útil para reducir distracción.';}
function card(item){return `<article class="content-card">
  <div>
    <div class="art">${item.icon}</div>
    <h4>${item.title}</h4>
    <p>${item.desc}</p>
    <p class="why">${whyNow(item)}</p>
  </div>
  <div>
    <div class="meta"><span>${item.type} · ${item.time}</span><span class="score">${scoreItem(item)}% fit</span></div>
    <div class="hero-actions card-actions"><button class="btn" onclick="openSession('${item.id}')">Iniciar</button><button class="btn dark" onclick="openSession('${item.id}',true)">Recursos</button><button class="btn ghost" onclick="skipItem('${item.id}')">Saltar</button></div>
  </div>
</article>`;}

function rail(title,subtitle,items){return `<section class="section"><div class="section-head"><div><h3>${title}</h3><p>${subtitle}</p></div></div><div class="rail">${items.map(card).join('')}</div></section>`;}
function todayMix(){const picks=[recommendations('silicon')[0],recommendations('english')[0],recommendations('focus')[0],recommendations('karaoke')[0]].filter(Boolean);return `<section class="section"><div class="section-head"><div><h3>Today Mix</h3><p>Ruta conectada a internet para aprender, practicar y cerrar sin ruido digital.</p></div></div><div class="mix-card">${picks.map((item,i)=>`<div class="mix-step"><b>${String(i+1).padStart(2,'0')}</b><div><strong>${item.title}</strong><small>${item.intent} · ${item.time}</small></div><button onclick="openSession('${item.id}')">Abrir</button></div>`).join('')}</div></section>`;}
function hero(){const top=recommendations()[0];return `<section class="hero">
  <div>
    <div class="eyebrow">${timeContext()} · Connected Predictive OS</div>
    <h2>Designed to improve you. Not consume you.</h2>
    <p>Ahora cada módulo conecta con recursos externos: videos, shadowing, podcasts, canciones con lyrics/subtitles y búsquedas vivas para aprender sin caer en scroll infinito.</p>
    <div class="hero-actions"><button class="btn" onclick="openSession('${top.id}')">Play today's session</button><button class="btn dark" onclick="openSession('${top.id}',true)">Abrir recursos web</button></div>
  </div>
  <aside class="now-card">
    <h3>Connected For You</h3>
    <p>${top.intent}</p>
    <div class="signal">
      <div><span>Best pick</span><strong>${top.title}</strong></div>
      <div><span>Web sources</span><strong>${top.resources.length} links</strong></div>
      <div><span>Context</span><strong>${timeContext()}</strong></div>
    </div>
  </aside>
</section>`;}
function topbar(){return `<div class="topbar"><div class="search">⌕<input id="searchBox" placeholder="Buscar video, subtítulos, karaoke, shadowing, SMT..." oninput="searchContent(this.value)"></div><div class="chip-row">${moods.map(m=>`<button class="chip ${state.mood===m.id?'active':''}" onclick="setMood('${m.id}')">${m.label}</button>`).join('')}</div></div>`;}
function sidebar(){return `<aside class="sidebar"><div class="brand"><div class="brand-mark">∞</div><div><h1>Lean English OS</h1><p>Connected utility platform</p></div></div><nav class="nav">${nav.map(n=>`<button class="${state.active===n.id?'active':''}" onclick="setView('${n.id}')"><b>${n.icon}</b>${n.label}</button>`).join('')}</nav><div class="profile-card"><small>Affinity profile</small><strong>Silicon Builder</strong><div class="profile-meter"><span></span></div><small>${state.signals.completed} sesiones · ${state.signals.resourceClicks||0} recursos abiertos</small></div></aside>`;}
function mobileTabs(){return `<div class="mobile-tabs">${nav.slice(0,5).map(n=>`<button class="${state.active===n.id?'active':''}" onclick="setView('${n.id}')">${n.icon}</button>`).join('')}</div>`;}

function viewForYou(){return `${hero()}${todayMix()}${rail('For You','Recomendaciones con recursos web conectados.',recommendations().slice(0,6))}${rail('Continue Learning','Siguiente paso lógico con videos, podcasts y subtítulos.',recommendations('english').slice(0,3).concat(recommendations('tech').slice(0,3)))}${gridInsights()}`;}
function viewSilicon(){return `${heroMini('Silicon Valley Energy','Tech humor, startups, IA y cultura builder con recursos externos.','💻')}${rail('Based on Silicon Valley','Contenido con atmósfera startup, ingeniería y humor inteligente.',recommendations('silicon'))}`;}
function viewEnglish(){return `${heroMini('English Momentum','Shadowing, entrevistas y technical English con videos y pronunciación.','🎙️')}${rail('Shadowing Sessions','Práctica directa para hablar mejor en contextos reales.',recommendations('english'))}`;}
function viewKaraoke(){return `${heroMini('Karaoke English','Canciones con lyrics/subtitles para pronunciación, ritmo y confianza.', '🎵')}${rail('Pronunciation Flow','Sesiones de karaoke conectadas a YouTube, YouTube Music y Spotify.',recommendations('karaoke'))}`;}
function viewFocus(){return `${heroMini('Focus Recovery','Menos ruido digital. Más claridad para construir.', '🧠')}${rail('Focus Sessions','Bloques conectados a recursos de concentración y recuperación.',recommendations('focus'))}`;}
function viewInsights(){return `${heroMini('Predictive Insights','El sistema aprende qué te sirve, no solo qué consumes.', '📈')}${gridInsights()}${historyPanel()}${settingsPanel()}`;}
function heroMini(title,copy,icon){return `<section class="hero"><div><div class="eyebrow">Connected Intentional Interface</div><h2>${title}</h2><p>${copy}</p><div class="hero-actions"><button class="btn" onclick="setView('for-you')">Volver a For You</button><button class="btn dark" onclick="openExternalSearch()">Búsqueda web libre</button></div></div><aside class="now-card"><h3>${icon} Active Mode</h3><p>Las recomendaciones abren recursos externos sin exponer API keys en GitHub Pages.</p><div class="signal"><div><span>Time context</span><strong>${timeContext()}</strong></div><div><span>Learning bias</span><strong>English + Tech</strong></div><div><span>Resource policy</span><strong>Open web links</strong></div></div></aside></section>`;}
function gridInsights(){return `<section class="section"><div class="grid"><div class="panel"><div class="section-head"><div><h3>Predictive Engine</h3><p>Modelo local de señales. Optimiza utilidad, no adicción.</p></div></div><div class="predict-list">
${[
['English Momentum',state.signals.english,'Shadowing y listening técnico'],
['Silicon Affinity',state.signals.silicon,'Startup, IA y cultura builder'],
['Focus Readiness',state.signals.focus,'Sesiones de concentración'],
['Technical Growth',state.signals.tech,'SMT, calidad y automatización'],
['Web Resource Use',state.signals.resourceClicks||0,'Videos, canciones, podcasts y búsquedas abiertas']
].map(([t,v,d])=>`<div class="predict-item"><b>◆</b><div><strong>${t}</strong><small>${d}</small></div><div class="heat"><span style="width:${Math.min(100,v*3)}%"></span></div></div>`).join('')}
</div></div><div class="panel"><div class="section-head"><div><h3>Internet Layer</h3><p>Conexión pragmática para GitHub Pages.</p></div></div><div class="predict-list"><div class="predict-item"><b>01</b><div><strong>Videos y subtítulos</strong><small>YouTube search links por módulo.</small></div></div><div class="predict-item"><b>02</b><div><strong>Karaoke y música</strong><small>YouTube Music, Spotify y búsquedas de lyrics/subtitles.</small></div></div><div class="predict-item"><b>03</b><div><strong>Pronunciación</strong><small>YouGlish para frases técnicas y términos críticos.</small></div></div></div></div></div></section>`;}
function historyPanel(){const rows=state.signals.sessions.length?state.signals.sessions.map(s=>`<div class="predict-item"><b>✓</b><div><strong>${s.title}</strong><small>${s.action} · ${new Date(s.at).toLocaleString()}</small></div></div>`).join(''):'<div class="predict-item"><b>•</b><div><strong>Sin historial todavía</strong><small>Inicia una sesión para alimentar el motor predictivo.</small></div></div>';return `<section class="section"><div class="panel"><div class="section-head"><div><h3>Recent Signals</h3><p>Memoria local para futuras recomendaciones.</p></div></div><div class="predict-list">${rows}</div></div></section>`;}
function settingsPanel(){return `<section class="section"><div class="panel"><div class="section-head"><div><h3>Settings</h3><p>Controles de memoria local.</p></div></div><button class="btn dark" onclick="resetSignals()">Reset learning memory</button></div></section>`;}
function sessionModal(){if(!state.session)return '';const item=itemById(state.session);if(!item)return '';return `<div class="modal-backdrop" onclick="closeSession()"><div class="session-modal" onclick="event.stopPropagation()"><button class="modal-close" onclick="closeSession()">×</button><div class="session-head"><div class="art mini-art">${item.icon}</div><div><small>${item.type} · ${item.time}</small><h2>${item.title}</h2><p>${item.desc}</p></div></div><div class="session-grid"><div class="panel inner"><h3>Guided Session</h3><p class="why">${whyNow(item)}</p><ol>${item.steps.map(s=>`<li>${s}</li>`).join('')}</ol><div class="hero-actions"><button class="btn" onclick="completeSession('${item.id}')">Marcar completado</button><button class="btn ghost" onclick="skipItem('${item.id}')">Saltar</button></div></div><div class="panel inner"><h3>Recursos conectados</h3><p>Abre fuentes externas en una nueva pestaña. Prioriza videos con subtítulos, canciones con lyrics y recursos útiles.</p>${resourceButtons(item)}</div></div></div></div>`;}
function activeView(){return {"for-you":viewForYou,"silicon":viewSilicon,"english":viewEnglish,"karaoke":viewKaraoke,"focus":viewFocus,"insights":viewInsights}[state.active]();}
function render(){app.innerHTML=`<div class="app-shell">${sidebar()}<main class="main">${topbar()}<div class="section-view active">${activeView()}</div></main>${mobileTabs()}${sessionModal()}</div>`;}

function setView(id){state.active=id;state.session=null;render();window.scrollTo({top:0,behavior:'smooth'});}
function setMood(id){state.mood=id;render();}
function openSession(id){state.session=id;render();}
function closeSession(){state.session=null;render();}
function completeSession(id){const item=itemById(id);if(item){state.session=null;track(item,'completed');}}
function skipItem(id){const item=itemById(id);if(item){state.session=null;track(item,'skipped');}}
function openResource(id,index){const item=itemById(id);if(!item||!item.resources[index])return;state.signals.resourceClicks=(state.signals.resourceClicks||0)+1;saveSignals();window.open(item.resources[index].url,'_blank','noopener,noreferrer');}
function openExternalSearch(){const q=prompt('¿Qué recurso quieres buscar? Ej: SMT process subtitles, Coldplay lyrics, AI automation tools');if(q)window.open(link.google(q),'_blank','noopener,noreferrer');}
function resetSignals(){localStorage.removeItem('leos-signals');state.signals={...defaultSignals};state.session=null;render();}
function searchContent(q){const query=q.trim().toLowerCase();const view=document.querySelector('.section-view');if(!query){render();return;}const results=library.filter(x=>[x.title,x.desc,x.type,x.intent,x.tags.join(' '),x.resources.map(r=>`${r.kind} ${r.label}`).join(' ')].join(' ').toLowerCase().includes(query));view.innerHTML=`${heroMini('Search Results',`${results.length} resultados para "${q}"`,'⌕')}${rail('Resultados','Contenido y recursos conectados alineados a tu búsqueda.',results)}`;}

window.setView=setView;window.setMood=setMood;window.openSession=openSession;window.closeSession=closeSession;window.completeSession=completeSession;window.skipItem=skipItem;window.openResource=openResource;window.openExternalSearch=openExternalSearch;window.resetSignals=resetSignals;window.searchContent=searchContent;
render();

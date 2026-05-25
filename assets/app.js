const app=document.getElementById('app');

const state={
  active:'for-you',
  mood:'balanced',
  profile:'silicon',
  signals:JSON.parse(localStorage.getItem('leos-signals')||'{"completed":0,"skipped":0,"focus":18,"english":12,"tech":20,"silicon":24,"karaoke":7,"sessions":[]}')
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
  {id:'sv-1',section:'silicon',type:'Serie',title:'Silicon Valley Energy',desc:'Humor tecnológico, startups, producto y cultura hacker para activar curiosidad sin saturarte.',time:'25 min',score:96,tags:['silicon','night','balanced'],icon:'💻',intent:'Reactivar curiosidad técnica'},
  {id:'sv-2',section:'silicon',type:'YouTube',title:'Fireship-style Tech Pulse',desc:'Micro cápsulas de tecnología, frameworks, IA y cultura dev con ritmo rápido.',time:'12 min',score:91,tags:['silicon','low','night'],icon:'⚡',intent:'Aprender sin fricción'},
  {id:'sv-3',section:'silicon',type:'Podcast',title:'Startup Operators',desc:'Conversaciones sobre producto, mercado, ejecución y decisiones técnicas.',time:'35 min',score:87,tags:['growth','silicon'],icon:'🎧',intent:'Pensamiento de negocio'},
  {id:'en-1',section:'english',type:'Shadowing',title:'Technical Standup Shadowing',desc:'Frases para explicar bloqueos, riesgos, avances y acciones en una junta técnica.',time:'15 min',score:94,tags:['english','focus','growth'],icon:'🎙️',intent:'Mejorar speaking técnico'},
  {id:'en-2',section:'english',type:'Interview',title:'Quality Engineer Interview',desc:'Simulación de entrevista en inglés con vocabulario de calidad, SMT y problem solving.',time:'20 min',score:92,tags:['english','growth'],icon:'🛡️',intent:'Preparación profesional'},
  {id:'en-3',section:'english',type:'Listening',title:'Low Energy Listening',desc:'Listening ligero con frases cortas y repetición útil para cerrar el día.',time:'10 min',score:82,tags:['english','low','night'],icon:'🌙',intent:'Mantener constancia'},
  {id:'ka-1',section:'karaoke',type:'Karaoke',title:'Coldplay Pronunciation Flow',desc:'Canciones claras para ritmo, connected speech y pronunciación sin presión.',time:'18 min',score:88,tags:['karaoke','low','night'],icon:'🎤',intent:'Fluidez con baja resistencia'},
  {id:'ka-2',section:'karaoke',type:'Karaoke',title:'OneRepublic Confidence Set',desc:'Sesión energética para practicar entonación y seguridad al hablar.',time:'22 min',score:84,tags:['karaoke','balanced'],icon:'🎶',intent:'Confianza vocal'},
  {id:'fo-1',section:'focus',type:'Focus',title:'Deep Work Manufacturing',desc:'Bloque de concentración para reportes, dashboards, RCA o análisis de yield.',time:'45 min',score:93,tags:['focus','growth'],icon:'📊',intent:'Trabajo profundo'},
  {id:'fo-2',section:'focus',type:'Recovery',title:'Rebuild Mental Clarity',desc:'Secuencia corta para salir del ruido digital y regresar a claridad operativa.',time:'16 min',score:90,tags:['low','night','focus'],icon:'🧘',intent:'Reducir distracción'},
  {id:'te-1',section:'tech',type:'Learn Tech',title:'SMT + English Sprint',desc:'Combina vocabulario técnico, ejemplos reales y frases listas para junta.',time:'28 min',score:95,tags:['tech','english','growth'],icon:'🔎',intent:'Capacidad técnica + inglés'},
  {id:'te-2',section:'tech',type:'AI Discovery',title:'AI Tools for Builders',desc:'Exploración guiada de herramientas IA aplicadas a automatización, análisis y producto.',time:'24 min',score:89,tags:['tech','silicon','growth'],icon:'🤖',intent:'Descubrimiento útil'}
];

function saveSignals(){localStorage.setItem('leos-signals',JSON.stringify(state.signals));}
function hour(){return new Date().getHours();}
function timeContext(){const h=hour();if(h<11)return 'Morning build';if(h<18)return 'Execution mode';if(h<22)return 'Evening learning';return 'Night recovery';}
function predictedMood(){const h=hour();if(h>=22||h<6)return 'low';if(h>=18)return 'night';return state.mood;}
function scoreItem(item){let s=item.score;const m=predictedMood();if(item.tags.includes(m))s+=8;if(item.tags.includes(state.profile))s+=10;if(item.tags.includes('english'))s+=Math.min(10,state.signals.english/4);if(item.tags.includes('silicon'))s+=Math.min(10,state.signals.silicon/5);if(item.section==='focus')s+=Math.min(8,state.signals.focus/5);return Math.round(s);}
function recommendations(filter){return library.filter(x=>!filter||x.section===filter||x.tags.includes(filter)).sort((a,b)=>scoreItem(b)-scoreItem(a));}
function track(item,action='completed'){
  state.signals[action]=(state.signals[action]||0)+1;
  if(item.section==='english')state.signals.english+=2;
  if(item.tags.includes('silicon'))state.signals.silicon+=2;
  if(item.section==='focus')state.signals.focus+=3;
  if(item.section==='tech')state.signals.tech+=2;
  if(item.section==='karaoke')state.signals.karaoke+=2;
  state.signals.sessions.unshift({id:item.id,title:item.title,action,at:new Date().toISOString()});
  state.signals.sessions=state.signals.sessions.slice(0,12);
  saveSignals();
  render();
}

function card(item){return `<article class="content-card">
  <div>
    <div class="art">${item.icon}</div>
    <h4>${item.title}</h4>
    <p>${item.desc}</p>
  </div>
  <div>
    <div class="meta"><span>${item.type} · ${item.time}</span><span class="score">${scoreItem(item)}% fit</span></div>
    <div class="hero-actions" style="margin-top:12px"><button class="btn" onclick="startItem('${item.id}')">Iniciar</button><button class="btn dark" onclick="skipItem('${item.id}')">Saltar</button></div>
  </div>
</article>`;}

function rail(title,subtitle,items){return `<section class="section"><div class="section-head"><div><h3>${title}</h3><p>${subtitle}</p></div></div><div class="rail">${items.map(card).join('')}</div></section>`;}
function hero(){const top=recommendations()[0];return `<section class="hero">
  <div>
    <div class="eyebrow">${timeContext()} · Predictive Learning OS</div>
    <h2>Designed to improve you. Not consume you.</h2>
    <p>Una plataforma personal para reducir distracción, reforzar inglés, cultivar conocimiento técnico y recomendar contenido según tu energía, afinidad y utilidad real.</p>
    <div class="hero-actions"><button class="btn" onclick="startItem('${top.id}')">Play today's session</button><button class="btn dark" onclick="setView('insights')">Ver patrones</button></div>
  </div>
  <aside class="now-card">
    <h3>Tonight For You</h3>
    <p>${top.intent}</p>
    <div class="signal">
      <div><span>Best pick</span><strong>${top.title}</strong></div>
      <div><span>Energy fit</span><strong>${predictedMood()==='low'?'Low friction':'Active learning'}</strong></div>
      <div><span>Context</span><strong>${timeContext()}</strong></div>
    </div>
  </aside>
</section>`;}
function topbar(){return `<div class="topbar"><div class="search">⌕<input id="searchBox" placeholder="Buscar shadowing, karaoke, Silicon Valley, SMT..." oninput="searchContent(this.value)"></div><div class="chip-row">${moods.map(m=>`<button class="chip ${state.mood===m.id?'active':''}" onclick="setMood('${m.id}')">${m.label}</button>`).join('')}</div></div>`;}
function sidebar(){return `<aside class="sidebar"><div class="brand"><div class="brand-mark">∞</div><div><h1>Lean English OS</h1><p>Cognitive utility platform</p></div></div><nav class="nav">${nav.map(n=>`<button class="${state.active===n.id?'active':''}" onclick="setView('${n.id}')"><b>${n.icon}</b>${n.label}</button>`).join('')}</nav><div class="profile-card"><small>Affinity profile</small><strong>Silicon Builder</strong><div class="profile-meter"><span></span></div><small>${state.signals.completed} sesiones completadas · ${state.signals.english} English score</small></div></aside>`;}
function mobileTabs(){return `<div class="mobile-tabs">${nav.slice(0,5).map(n=>`<button class="${state.active===n.id?'active':''}" onclick="setView('${n.id}')">${n.icon}</button>`).join('')}</div>`;}

function viewForYou(){return `${hero()}${rail('For You','Recomendaciones que priorizan utilidad, energía y crecimiento.',recommendations().slice(0,6))}${rail('Continue Learning','Siguiente paso lógico según tu perfil técnico.',recommendations('english').slice(0,3).concat(recommendations('tech').slice(0,3)))}${gridInsights()}`;}
function viewSilicon(){return `${heroMini('Silicon Valley Energy','Tech humor, startups, IA y cultura builder para aprender sin fricción.','💻')}${rail('Based on Silicon Valley','Contenido con atmósfera startup, ingeniería y humor inteligente.',recommendations('silicon'))}`;}
function viewEnglish(){return `${heroMini('English Momentum','Shadowing, entrevistas y technical English sin formato escolar.','🎙️')}${rail('Shadowing Sessions','Práctica directa para hablar mejor en contextos reales.',recommendations('english'))}`;}
function viewKaraoke(){return `${heroMini('Karaoke English','Pronunciación, ritmo y confianza usando música.', '🎵')}${rail('Pronunciation Flow','Sesiones de karaoke con intención lingüística.',recommendations('karaoke'))}`;}
function viewFocus(){return `${heroMini('Focus Recovery','Menos ruido digital. Más claridad para construir.', '🧠')}${rail('Focus Sessions','Bloques diseñados para análisis, dashboards, RCA y aprendizaje profundo.',recommendations('focus'))}`;}
function viewInsights(){return `${heroMini('Predictive Insights','El sistema aprende qué te sirve, no solo qué consumes.', '📈')}${gridInsights()}${historyPanel()}`;}
function heroMini(title,copy,icon){return `<section class="hero"><div><div class="eyebrow">Intentional Interface</div><h2>${title}</h2><p>${copy}</p><div class="hero-actions"><button class="btn" onclick="setView('for-you')">Volver a For You</button><button class="btn dark" onclick="resetSignals()">Reset señales</button></div></div><aside class="now-card"><h3>${icon} Active Mode</h3><p>Las recomendaciones se reorganizan por energía, horario y afinidad.</p><div class="signal"><div><span>Time context</span><strong>${timeContext()}</strong></div><div><span>Learning bias</span><strong>English + Tech</strong></div><div><span>Distraction policy</span><strong>No infinite scroll</strong></div></div></aside></section>`;}
function gridInsights(){return `<section class="section"><div class="grid"><div class="panel"><div class="section-head"><div><h3>Predictive Engine</h3><p>Primer modelo local de señales. Optimiza utilidad, no adicción.</p></div></div><div class="predict-list">
${[
['English Momentum',state.signals.english,'Shadowing y listening técnico'],
['Silicon Affinity',state.signals.silicon,'Startup, IA y cultura builder'],
['Focus Readiness',state.signals.focus,'Sesiones de concentración'],
['Technical Growth',state.signals.tech,'SMT, calidad y automatización']
].map(([t,v,d])=>`<div class="predict-item"><b>◆</b><div><strong>${t}</strong><small>${d}</small></div><div class="heat"><span style="width:${Math.min(100,v*3)}%"></span></div></div>`).join('')}
</div></div><div class="panel"><div class="section-head"><div><h3>Product Philosophy</h3><p>Seth Godin principle applied.</p></div></div><div class="predict-list"><div class="predict-item"><b>01</b><div><strong>The product serves the user</strong><small>No manipulative autoplay, no random distraction.</small></div></div><div class="predict-item"><b>02</b><div><strong>Growth over engagement</strong><small>Metrics focus on clarity, English, technical value and focus.</small></div></div><div class="predict-item"><b>03</b><div><strong>Predictive usefulness</strong><small>The system recommends what helps you next.</small></div></div></div></div></div></section>`;}
function historyPanel(){const rows=state.signals.sessions.length?state.signals.sessions.map(s=>`<div class="predict-item"><b>✓</b><div><strong>${s.title}</strong><small>${s.action} · ${new Date(s.at).toLocaleString()}</small></div></div>`).join(''):'<div class="predict-item"><b>•</b><div><strong>Sin historial todavía</strong><small>Inicia una sesión para alimentar el motor predictivo.</small></div></div>';return `<section class="section"><div class="panel"><div class="section-head"><div><h3>Recent Signals</h3><p>Memoria local para futuras recomendaciones.</p></div></div><div class="predict-list">${rows}</div></div></section>`;}
function activeView(){return {"for-you":viewForYou,"silicon":viewSilicon,"english":viewEnglish,"karaoke":viewKaraoke,"focus":viewFocus,"insights":viewInsights}[state.active]();}
function render(){app.innerHTML=`<div class="app-shell">${sidebar()}<main class="main">${topbar()}<div class="section-view active">${activeView()}</div></main>${mobileTabs()}</div>`;}
function setView(id){state.active=id;render();window.scrollTo({top:0,behavior:'smooth'});} 
function setMood(id){state.mood=id;render();}
function startItem(id){const item=library.find(x=>x.id===id);if(item)track(item,'completed');}
function skipItem(id){const item=library.find(x=>x.id===id);if(item)track(item,'skipped');}
function resetSignals(){localStorage.removeItem('leos-signals');state.signals={completed:0,skipped:0,focus:18,english:12,tech:20,silicon:24,karaoke:7,sessions:[]};render();}
function searchContent(q){const query=q.trim().toLowerCase();const view=document.querySelector('.section-view');if(!query){render();return;}const results=library.filter(x=>[x.title,x.desc,x.type,x.intent,x.tags.join(' ')].join(' ').toLowerCase().includes(query));view.innerHTML=`${heroMini('Search Results',`${results.length} resultados para "${q}"`,'⌕')}${rail('Resultados','Contenido alineado a tu busqueda.',results)}`;}

window.setView=setView;window.setMood=setMood;window.startItem=startItem;window.skipItem=skipItem;window.resetSignals=resetSignals;window.searchContent=searchContent;
render();

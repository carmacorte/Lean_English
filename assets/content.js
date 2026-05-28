window.LEOS_CONTENT = {
  nav: [
    ['for-you','▶️','For You'],
    ['silicon','💻','Silicon Mode'],
    ['english','🎙️','English'],
    ['karaoke','🎵','Karaoke'],
    ['focus','🧠','Focus'],
    ['insights','📈','Insights']
  ],
  moods: [
    ['balanced','Balanceado'],
    ['low','Baja energía'],
    ['focus','Enfoque'],
    ['night','Noche'],
    ['growth','Crecimiento']
  ],
  items: [
    {
      id:'rock-pack', section:'karaoke', type:'Rock English', title:'Rock & Metal Pronunciation Pack',
      desc:'Ruta mixta con Pearl Jam, Slipknot y SOAD para convertir tu gusto musical en práctica real de inglés.',
      time:'35 min', score:97, tags:['karaoke','rock','metal','english','growth','night'], icon:'⚡',
      intent:'Afinidad musical aplicada a pronunciación',
      steps:['Empieza con Pearl Jam para vocalización natural.','Sube energía con SOAD para cambios de ritmo.','Cierra con Slipknot para articulación intensa.'],
      resources:[['Playlist','Rock metal lyrics playlist','youtube','Pearl Jam Slipknot System of a Down lyrics subtitles playlist'],['Music','YouTube Music mix','ytMusic','Pearl Jam Slipknot System of a Down'],['Spotify','Spotify rock metal mix','spotify','Pearl Jam Slipknot System of a Down']]
    },
    {
      id:'pearl-jam', section:'karaoke', type:'Rock Karaoke', title:'Pearl Jam Grunge Flow',
      desc:'Rock alternativo para practicar vocalización natural, emoción y frases largas sin sonar robótico.',
      time:'22 min', score:96, tags:['karaoke','rock','balanced','night','english'], icon:'🎸',
      intent:'Pronunciación natural con grunge/rock',
      steps:['Abre una versión lyrics o karaoke.','Escucha primero solo por comprensión.','Canta un verso y repite frases difíciles lentamente.'],
      resources:[['Karaoke','Pearl Jam lyrics/karaoke','youtube','Pearl Jam lyrics English subtitles karaoke'],['Music','YouTube Music Pearl Jam','ytMusic','Pearl Jam lyrics'],['Spotify','Spotify Pearl Jam','spotify','Pearl Jam'],['Pronunciation','YouGlish: alive','youglish','alive']]
    },
    {
      id:'slipknot', section:'karaoke', type:'Metal Karaoke', title:'Slipknot Articulation Drill',
      desc:'Metal intenso para entrenar velocidad, consonantes fuertes y listening bajo alta energía.',
      time:'18 min', score:94, tags:['karaoke','metal','focus','growth','english'], icon:'🤘',
      intent:'Articulación y energía controlada',
      steps:['Abre una versión con lyrics/subtitles.','Practica primero secciones limpias o coros.','Reduce velocidad si el video lo permite y repite.'],
      resources:[['Karaoke','Slipknot lyrics/subtitles','youtube','Slipknot lyrics English subtitles karaoke'],['Music','YouTube Music Slipknot','ytMusic','Slipknot lyrics'],['Spotify','Spotify Slipknot','spotify','Slipknot'],['Pronunciation','YouGlish: psychosocial','youglish','psychosocial']]
    },
    {
      id:'soad', section:'karaoke', type:'Alt Metal Karaoke', title:'SOAD Rhythm Switch',
      desc:'System of a Down para practicar cambios de ritmo, acento, energía y comprensión auditiva rápida.',
      time:'20 min', score:95, tags:['karaoke','metal','rock','growth','english'], icon:'🔥',
      intent:'Ritmo, cambios rápidos y oído avanzado',
      steps:['Elige una canción con lyrics/subtitles.','Practica una sección lenta y una rápida.','Repite sin música 30 segundos como shadowing hablado.'],
      resources:[['Karaoke','SOAD lyrics/subtitles','youtube','System of a Down lyrics English subtitles karaoke'],['Music','YouTube Music SOAD','ytMusic','System of a Down lyrics'],['Spotify','Spotify SOAD','spotify','System of a Down'],['Pronunciation','YouGlish: toxicity','youglish','toxicity']]
    },
    {
      id:'rock-interviews', section:'english', type:'Interview Shadowing', title:'Rock Interview Shadowing',
      desc:'Listening real con entrevistas de Pearl Jam, Slipknot y SOAD para slang, acento natural y respuestas espontáneas.',
      time:'18 min', score:91, tags:['english','rock','metal','balanced','night'], icon:'🎙️',
      intent:'Listening natural con afinidad musical',
      steps:['Abre una entrevista subtitulada.','Escucha 2 minutos sin pausar.','Repite 5 respuestas cortas imitando ritmo y entonación.'],
      resources:[['Interview','Pearl Jam interview subtitles','youtube','Pearl Jam interview English subtitles'],['Interview','Slipknot interview subtitles','youtube','Slipknot interview English subtitles'],['Interview','SOAD interview subtitles','youtube','System of a Down interview English subtitles']]
    },
    {
      id:'instrumental-rock', section:'focus', type:'Focus Music', title:'Instrumental Rock Focus',
      desc:'Guitarras y rock instrumental para concentración sin perder la energía del metal/rock.',
      time:'40 min', score:91, tags:['focus','rock','metal','balanced'], icon:'🎚️',
      intent:'Concentración con estética rock',
      steps:['Abre una playlist instrumental sin vocales.','Define una tarea técnica concreta.','Usa la energía del rock sin distraerte con letra.'],
      resources:[['Focus','Instrumental rock focus','youtube','instrumental rock focus music no lyrics'],['Focus','Instrumental metal focus','ytMusic','instrumental metal focus no lyrics'],['Spotify','Instrumental rock Spotify','spotify','instrumental rock focus']]
    },
    {
      id:'sv', section:'silicon', type:'Serie', title:'Silicon Valley Energy',
      desc:'Humor tecnológico, startups, producto y cultura hacker para activar curiosidad sin saturarte.',
      time:'25 min', score:93, tags:['silicon','night','balanced'], icon:'💻', intent:'Reactivar curiosidad técnica',
      steps:['Ver un clip corto con subtítulos.','Anotar 3 frases de startup/producto.','Repetir en voz alta 2 frases para shadowing.'],
      resources:[['Video','Clips en YouTube','youtube','Silicon Valley HBO startup clips English subtitles'],['Subtitles','Clips con subtítulos','youtube','Silicon Valley tech startup scenes with English subtitles'],['Search','Contexto de producto','google','Silicon Valley TV show startup product management lessons']]
    },
    {
      id:'fireship', section:'silicon', type:'YouTube', title:'Fireship-style Tech Pulse',
      desc:'Micro cápsulas de tecnología, frameworks, IA y cultura dev con ritmo rápido.',
      time:'12 min', score:88, tags:['silicon','low','night'], icon:'⚡', intent:'Aprender sin fricción',
      steps:['Abrir una cápsula técnica corta.','Activar subtítulos en inglés.','Guardar 5 términos técnicos útiles.'],
      resources:[['Video','Tech explained','youtube','Fireship AI tools explained short videos'],['Video','Programming humor + tech','youtube','developer technology explained humor English subtitles'],['Search','Trends IA dev','google','latest AI developer tools explained']]
    },
    {
      id:'standup', section:'english', type:'Shadowing', title:'Technical Standup Shadowing',
      desc:'Frases para explicar bloqueos, riesgos, avances y acciones en una junta técnica.',
      time:'15 min', score:91, tags:['english','focus','growth'], icon:'🎙️', intent:'Mejorar speaking técnico',
      steps:['Abrir un video de standup meeting.','Repetir frase por frase 2 veces.','Grabar 30 segundos explicando un bloqueo técnico.'],
      resources:[['Shadowing','Standup meeting shadowing','youtube','business English daily standup meeting shadowing'],['Subtitles','Meetings con subtítulos','youtube','engineering standup meeting English subtitles'],['Pronunciation','YouGlish: troubleshooting','youglish','troubleshooting']]
    },
    {
      id:'quality-interview', section:'english', type:'Interview', title:'Quality Engineer Interview',
      desc:'Simulación de entrevista en inglés con vocabulario de calidad, SMT y problem solving.',
      time:'20 min', score:89, tags:['english','growth'], icon:'🛡️', intent:'Preparación profesional',
      steps:['Escuchar una entrevista o mock interview.','Responder 3 preguntas en voz alta.','Repetir tu respuesta con vocabulario técnico.'],
      resources:[['Video','Quality engineer interview','youtube','Quality Engineer interview questions and answers English'],['Video','Manufacturing interview English','youtube','manufacturing engineer interview English subtitles'],['Pronunciation','YouGlish: root cause analysis','youglish','root cause analysis']]
    },
    {
      id:'smt', section:'tech', type:'Learn Tech', title:'SMT + English Sprint',
      desc:'Combina vocabulario técnico, ejemplos reales y frases listas para junta.',
      time:'28 min', score:92, tags:['tech','english','growth','focus'], icon:'🔎', intent:'Capacidad técnica + inglés',
      steps:['Ver un video técnico con subtítulos.','Extraer 5 términos SMT.','Explicar el proceso en inglés durante 60 segundos.'],
      resources:[['Video','SMT process explained','youtube','SMT process explained English subtitles'],['Video','PCB assembly process','youtube','PCB assembly SMT process English subtitles'],['Pronunciation','YouGlish: soldering','youglish','soldering']]
    },
    {
      id:'ai-tools', section:'tech', type:'AI Discovery', title:'AI Tools for Builders',
      desc:'Herramientas IA aplicadas a automatización, análisis y producto.',
      time:'24 min', score:86, tags:['tech','silicon','growth'], icon:'🤖', intent:'Descubrimiento útil',
      steps:['Abrir una búsqueda actual de herramientas IA.','Identificar una herramienta aplicable.','Convertirla en idea para automatizar un proceso.'],
      resources:[['Video','AI tools automation','youtube','AI tools for automation dashboards workflow'],['Search','AI agents builders','google','AI agents tools for builders automation'],['Video','AI productivity systems','youtube','AI productivity system tools explained']]
    },
    {
      id:'deep-work', section:'focus', type:'Focus', title:'Deep Work Manufacturing',
      desc:'Bloque de concentración para reportes, dashboards, RCA o análisis de yield.',
      time:'45 min', score:90, tags:['focus','growth'], icon:'📊', intent:'Trabajo profundo',
      steps:['Abrir música sin letra.','Definir una sola tarea: reporte, dashboard o RCA.','Trabajar 45 minutos sin abrir redes.'],
      resources:[['Focus','Deep work no lyrics','youtube','deep work music no lyrics focus'],['Focus','Ambient focus music','ytMusic','ambient focus music no lyrics'],['Search','Pomodoro deep work','google','deep work 45 minute focus method']]
    },
    {
      id:'clarity', section:'focus', type:'Recovery', title:'Rebuild Mental Clarity',
      desc:'Secuencia corta para salir del ruido digital y regresar a claridad operativa.',
      time:'16 min', score:88, tags:['low','night','focus'], icon:'🧘', intent:'Reducir distracción',
      steps:['Cerrar fuentes de ruido digital.','Abrir audio calmado.','Escribir la siguiente acción útil.'],
      resources:[['Recovery','Calm focus reset','youtube','calm focus music mental clarity no lyrics'],['Breathing','Breathing exercise','youtube','short breathing exercise focus reset'],['Search','Digital minimalism','google','digital minimalism reduce distraction practical steps']]
    }
  ]
};

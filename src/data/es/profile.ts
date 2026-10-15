import type { SoftSkill, Stat } from '@/types/content';

export const hero = {
  availability: 'Disponible para roles Full Stack Semi Senior',
  /** El título se muestra como `titleHighlight` (con degradado) + `titleRest`. */
  titleHighlight: 'Software que resuelve',
  titleRest: 'problemas reales de negocio.',
  subtitle:
    'Soy Javier Yunga, desarrollador Full Stack. Llevo más de 4 años convirtiendo procesos contables, tributarios y operativos en sistemas web, móviles y backend que las empresas usan a diario.',
  /** Ruta dentro de public/. Si el archivo no existe se muestra el monograma. */
  photo: '/foto.png',
  monogram: 'JY',
  role: 'Desarrollador Full Stack · Semi Senior',
  cv: '/cv.pdf',
  /** Nombre con el que se guarda el CV al descargarlo. */
  cvFileName: 'Javier-Yunga-CV-ES.pdf',
};

export const stats: Stat[] = [
  { icon: 'clock', value: 4, suffix: '+', label: 'años desarrollando' },
  { icon: 'building', value: 5, label: 'empresas y equipos' },
  { icon: 'devices', value: 3, label: 'plataformas', detail: 'web, móvil, cloud' },
];

export const about = {
  paragraphs: [
    'Más de 4 años en equipos multidisciplinarios, del backend al despliegue. Experiencia en retail, cooperativas financieras, firmas de auditoría y startups, lo que me permite entender los procesos contables, tributarios y de control que el software debe respetar.',
    'Actualmente soy Ingeniero en Sistemas en Aliado Contable, donde desarrollo plataformas de auditoría y gestión documental. También realizo auditorías informáticas de controles TI.',
  ],
  /** Código decorativo que se escribe solo (k: palabra clave, s: texto, f: función, n: valor, c: comentario). */
  code: [
    `<span class="k">import</span> { Ingeniero } <span class="k">from</span> <span class="s">'javier-yunga'</span>;`,
    ``,
    `<span class="k">const</span> javier = <span class="k">new</span> <span class="f">Ingeniero</span>({`,
    `  experiencia: <span class="s">'4+ años'</span>,`,
    `  enfoque: [<span class="s">'web'</span>, <span class="s">'móvil'</span>, <span class="s">'backend'</span>],`,
    `  stack: [<span class="s">'Spring Boot'</span>, <span class="s">'NestJS'</span>, <span class="s">'Django'</span>],`,
    `  disponible: <span class="n">true</span>,`,
    `});`,
    ``,
    `javier.<span class="f">construir</span>(); <span class="c">// software que se usa a diario</span>`,
  ].join('\n'),
  /** Habilidades blandas, cada una con una prueba concreta. */
  softSkills: [
    { icon: 'sparkles', title: 'Aprendizaje rápido', proof: '4 certificaciones en 2025: Spring Boot 3, Flutter, Kafka, n8n + MCP' },
    { icon: 'users', title: 'Trabajo en equipo', proof: 'Equipos multidisciplinarios con Scrum en 5 empresas' },
    { icon: 'chat', title: 'Comunicación con negocio', proof: 'Toma de requerimientos con áreas contables, financieras y de auditoría' },
    { icon: 'chart', title: 'Orientación a resultados', proof: 'Mejoras medibles: 25%, 30%, 40% y 50% más rápido' },
  ] satisfies SoftSkill[],
  /** Tarjetas flotantes junto a la ventana de código. */
  highlights: [
    { label: 'Ingeniero en Sistemas', detail: 'Aliado Contable' },
    { label: 'Facturación electrónica', detail: 'Integración SRI' },
  ],
};

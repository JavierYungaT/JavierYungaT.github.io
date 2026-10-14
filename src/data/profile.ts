import type { Chip, Stat } from '@/types/content';

export const hero = {
  availability: 'Disponible para roles de Desarrollador Senior',
  /** El título se muestra como `titleHighlight` (con degradado) + `titleRest`. */
  titleHighlight: 'Construyo software',
  titleRest: 'que las empresas usan todos los días.',
  subtitle:
    'Soy Javier Yunga, Ingeniero en Ciencias de la Computación. Diseño y desarrollo sistemas web, móviles y backend: desde facturación electrónica con el SRI hasta plataformas de auditoría en tiempo real.',
  /** Ruta dentro de public/. Si el archivo no existe se muestra el monograma. */
  photo: '/foto.png',
  monogram: 'JY',
  role: 'Desarrollador de Software',
  cv: '/cv.pdf',
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
  principles: [
    { label: 'Arquitectura limpia', icon: 'layers' },
    { label: 'Principios SOLID', icon: 'shield' },
    { label: 'Patrones de diseño', icon: 'cube' },
    { label: 'CI/CD', icon: 'refresh' },
    { label: 'Scrum', icon: 'users' },
  ] satisfies Chip[],
  /** Tarjetas flotantes junto a la foto. */
  highlights: [
    { label: 'Ingeniero en Sistemas', detail: 'Aliado Contable' },
    { label: 'Facturación electrónica', detail: 'Integración SRI' },
  ],
};

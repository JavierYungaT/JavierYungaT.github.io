import type { Stat } from '@/types/content';

export const hero = {
  availability: 'Disponible para roles de Desarrollador Senior',
  title: 'Construyo software que las empresas usan todos los días.',
  subtitle:
    'Soy Javier Yunga, Ingeniero en Ciencias de la Computación. Diseño y desarrollo sistemas web, móviles y backend: desde facturación electrónica con el SRI hasta plataformas de auditoría en tiempo real.',
  /** Ruta dentro de public/. Si el archivo no existe se muestra el monograma. */
  photo: '/foto.jpg',
  monogram: 'JY',
  cv: '/cv.pdf',
};

export const stats: Stat[] = [
  { value: '4+', label: 'años desarrollando' },
  { value: '6', label: 'empresas y equipos' },
  { value: '3', label: 'plataformas', detail: 'web, móvil, cloud' },
];

export const about = {
  paragraphs: [
    'Más de 4 años en equipos multidisciplinarios, del backend al despliegue. Experiencia en retail, cooperativas financieras, firmas de auditoría y startups, lo que me permite entender los procesos contables, tributarios y de control que el software debe respetar.',
    'Actualmente Ingeniero en Sistemas en Aliado Contable y fundador de TekniaSoft (desarrollo web, apps móviles, integraciones con WhatsApp e IA, facturación electrónica y sistemas a medida). También realizo auditorías informáticas de controles TI.',
  ],
  principles: ['Arquitectura limpia', 'Principios SOLID', 'Patrones de diseño', 'CI/CD', 'Scrum'],
};

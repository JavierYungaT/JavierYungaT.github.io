import type { ExternalLink, NavLink, SectionHeading } from '@/types/content';

export const site = {
  name: 'Javier Yunga',
  /** El logo se muestra como "javier" + ".yunga" resaltado. */
  logo: { first: 'javier', second: '.yunga', mark: 'JY' },
  title: 'Javier Yunga · Desarrollador Full Stack',
  description:
    'Ingeniero en Ciencias de la Computación. Diseño y desarrollo sistemas web, móviles y backend: facturación electrónica con el SRI, plataformas de auditoría en tiempo real e integraciones con IA.',
  tagline: 'Ingeniero en Ciencias de la Computación. Sistemas web, móviles y backend que las empresas usan todos los días.',
  /** Vista previa al compartir el enlace (fuente en scripts/og-image.html). */
  ogImage: '/og.png',
  locale: 'es_EC',
  lang: 'es',
};

export const navigation: NavLink[] = [
  { label: 'Experiencia', href: '/#experiencia' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Contacto', href: '/#contacto' },
];

/** Etiqueta pequeña y título de cada sección. */
export const sections = {
  about: { eyebrow: 'Sobre mí', title: 'Del backend al despliegue, entendiendo el negocio' },
  practices: { eyebrow: 'Cómo construyo software', title: 'Código limpio, decisiones con criterio' },
  experience: { eyebrow: 'Experiencia', title: 'Mi carrera, commit a commit' },
  projects: { eyebrow: 'Proyectos', title: 'Lo que he construido' },
  stack: { eyebrow: 'Stack', title: 'Tecnologías con las que trabajo' },
  education: { eyebrow: 'Formación', title: 'Formación y certificaciones' },
  contact: { eyebrow: 'Contacto', title: '¿Tienes un proyecto o una vacante?' },
} satisfies Record<string, SectionHeading>;

export const contact = {
  email: 'javieryunga4@gmail.com',
  /** WhatsApp con código de Ecuador (+593), sin el 0 inicial en el enlace. */
  whatsapp: { label: '+593 95 948 4373', href: 'https://wa.me/593959484373' },
  text: 'Busco roles de Desarrollador Full Stack Semi Senior, remotos o híbridos. Respondo en menos de 24 horas.',
};

export const socialLinks: ExternalLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-yunga' },
  { label: 'GitHub', href: 'https://github.com/JavierYungaT' },
];

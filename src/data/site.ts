import type { ExternalLink, NavLink } from '@/types/content';

export const site = {
  name: 'Javier Yunga',
  logo: 'javier.yunga',
  title: 'Javier Yunga · Desarrollador de Software',
  description:
    'Ingeniero en Ciencias de la Computación. Diseño y desarrollo sistemas web, móviles y backend: facturación electrónica con el SRI, plataformas de auditoría en tiempo real e integraciones con IA.',
  locale: 'es_EC',
  lang: 'es',
};

export const navigation: NavLink[] = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
];

export const contact = {
  email: 'javieryunga4@gmail.com',
  title: '¿Tienes un proyecto o una vacante?',
  text: 'Busco roles de Desarrollador Senior, remotos o híbridos. Respondo en menos de 24 horas.',
};

export const socialLinks: ExternalLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-yunga' },
  { label: 'GitHub', href: 'https://github.com/JavierYungaT' },
];

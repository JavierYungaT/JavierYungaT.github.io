import type { ExternalLink, NavLink, SectionHeading } from '@/types/content';

export const site = {
  name: 'Javier Yunga',
  /** The logo renders as "javier" + highlighted ".yunga". */
  logo: { first: 'javier', second: '.yunga', mark: 'JY' },
  title: 'Javier Yunga · Full Stack Developer',
  description:
    'Computer Science Engineer. I design and build web, mobile and backend systems: electronic invoicing with Ecuador’s tax authority (SRI), real-time audit platforms and AI integrations.',
  tagline: 'Computer Science Engineer. Web, mobile and backend systems that businesses use every day.',
  /** Link preview image (source in scripts/og-image-en.html). */
  ogImage: '/og-en.png',
};

export const navigation: NavLink[] = [
  { label: 'Experience', href: '/en/#experiencia' },
  { label: 'Projects', href: '/en/#proyectos' },
  { label: 'Stack', href: '/en/#stack' },
  { label: 'Contact', href: '/en/#contacto' },
];

/** Small label and title for each section. */
export const sections = {
  about: { eyebrow: 'About me', title: 'From requirements to deployment' },
  practices: { eyebrow: 'How I build software', title: 'Clean code, deliberate decisions' },
  experience: { eyebrow: 'Experience', title: 'My career, commit by commit' },
  projects: { eyebrow: 'Projects', title: 'What I have built' },
  stack: { eyebrow: 'Stack', title: 'Technologies I work with' },
  education: { eyebrow: 'Education', title: 'Education and certifications' },
  contact: { eyebrow: 'Contact', title: 'Have a project or an opening?' },
} satisfies Record<string, SectionHeading>;

export const contact = {
  email: 'javieryunga4@gmail.com',
  /** WhatsApp with Ecuador’s country code (+593), without the leading 0 in the link. */
  whatsapp: { label: '+593 95 948 4373', href: 'https://wa.me/593959484373' },
  text: 'I’m looking for mid-level Full Stack Developer roles, remote or hybrid. I reply within 24 hours.',
};

export const socialLinks: ExternalLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/javier-yunga' },
  { label: 'GitHub', href: 'https://github.com/JavierYungaT' },
];

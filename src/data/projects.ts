import type { Project } from '@/types/content';

export const projectsNote =
  'Algunos proyectos son privados por acuerdos con clientes; puedo mostrarlos en una entrevista.';

// Cada línea mide lo mismo en una fuente monoespaciada: edítalo con cuidado.
const auditPlatformDiagram = [
  '┌───────────┐   REST/HTTPS   ┌─────────────────┐',
  '│           │───────────────>│   Django REST   │───┐',
  '│  Next.js  │                └─────────────────┘   │   ┌──────────────┐',
  '│           │   WS + JWT     ┌─────────────────┐   ├──>│  PostgreSQL  │',
  '│           │───────────────>│ Channels (ASGI) │───┘   └──────────────┘',
  '└───────────┘                └────────^────────┘',
  '                                      │ grupos / pub-sub',
  '                             ┌────────┴────────┐',
  '                             │      Redis      │',
  '                             └─────────────────┘',
].join('\n');

/** El primer proyecto con `featured: true` se muestra a ancho completo. */
export const projects: Project[] = [
  {
    title: 'CRM y auditoría externa multi-firma',
    description:
      'Plataforma usada por varias firmas auditoras para gestionar clientes, encargos y documentación. Dashboards con filtros por firma y auditor, y notificaciones en tiempo real por WebSockets con JWT y enrutamiento por grupos.',
    tags: ['Django REST', 'Django Channels', 'Redis', 'Next.js', 'PostgreSQL', 'AWS Lightsail'],
    featured: true,
    diagram: auditPlatformDiagram,
    links: { demo: '', repo: '' },
  },
  {
    title: 'Extractor de datos de la Superintendencia de Compañías',
    description:
      'Scraper con Selenium y OCR (Tesseract) que lee los PDF con PyMuPDF e identifica la firma auditora externa de cada compañía.',
    tags: ['Python', 'Selenium', 'Tesseract OCR', 'PyMuPDF', 'PostgreSQL'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Gestión de carreras por WhatsApp',
    description:
      'SaaS multi-cooperativa: los pasajeros piden por WhatsApp, los conductores usan una app móvil y el operador asigna desde una central web con mapas.',
    tags: ['NestJS', 'React Native', 'WhatsApp Cloud API', 'Google Maps', 'PostgreSQL'],
    status: 'Producto TekniaSoft · en desarrollo',
    links: { demo: '', repo: '' },
  },
  {
    title: 'Microservicios bancarios',
    description:
      'Servicios de clientes y cuentas comunicados por eventos con RabbitMQ, con pruebas y Docker Compose.',
    tags: ['Java 17', 'Spring Boot 3', 'RabbitMQ', 'Docker Compose', 'PostgreSQL'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Migración de WordPress a Astro',
    description:
      'Rediseño del sitio de una firma de auditoría con servicios, tarifario, blog y contacto.',
    tags: ['Astro', 'TypeScript', 'Vercel'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Asistentes de WhatsApp con IA',
    description: 'Chatbots que informan sucursales y agendan citas, automatizados con n8n.',
    tags: ['LLMs', 'n8n', 'MCP', 'WhatsApp'],
    links: { demo: '', repo: '' },
  },
];

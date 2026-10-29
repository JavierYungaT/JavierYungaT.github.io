import type { Project } from '@/types/content';

export const projectsNote: string =
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

/** Cuántos proyectos se ven antes de pulsar "Ver más proyectos" (incluye el destacado). */
export const projectsPreviewCount: number = 5;

/** El primer proyecto con `featured: true` se muestra a ancho completo. */
export const projects: Project[] = [
  {
    title: 'CRM y auditoría externa multi-firma',
    icon: 'layers',
    description:
      'Plataforma usada por varias firmas auditoras para gestionar clientes, encargos y documentación. Dashboards con filtros por firma y auditor, y notificaciones en tiempo real por WebSockets con JWT y enrutamiento por grupos.',
    tags: ['Django REST', 'Django Channels', 'Redis', 'Next.js', 'PostgreSQL', 'AWS Lightsail'],
    featured: true,
    diagram: auditPlatformDiagram,
    links: { demo: '', repo: '' },
  },
  {
    title: 'Control de calidad para Odoo 18',
    icon: 'shield',
    description:
      'Módulo propio para Odoo 18 Community: inspecciones automáticas en recepciones, entregas y producción que bloquean la validación, no conformidades con costo, puntaje de calidad por proveedor, reportes QWeb en PDF y HTML, y dashboard en OWL. Con 21 pruebas en GitHub Actions y traducción al español.',
    tags: ['Odoo 18', 'Python', 'OWL 2', 'QWeb', 'PostgreSQL', 'Docker'],
    links: { demo: '', repo: 'https://github.com/JavierYungaT/odoo18-quality-control' },
  },
  {
    title: 'Facturación electrónica integrada con el SRI',
    icon: 'receipt',
    caseStudy: 'facturacion-sri',
    description:
      'Conexión con el SRI para emitir facturas electrónicas y notas de crédito y débito desde el sistema empresarial. Consultas 40% más rápidas con indexación y paginación avanzada, y procesamiento de grandes volúmenes de datos fiscales con Hibernate y procedimientos almacenados.',
    tags: ['Spring Boot', '.NET', 'Hibernate', 'API SRI', 'SQL Server', 'Angular'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Reservas de espacios deportivos',
    icon: 'calendar',
    description:
      'Apps publicadas en Google Play y App Store con notificaciones push. Validación de reservas 30% más rápida gracias a mejoras en la lógica de disponibilidad y los bloqueos concurrentes.',
    tags: ['Node.js', 'TypeScript', 'Flutter', 'PostgreSQL', 'Docker', 'AWS'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Gestión documental con reportes PDF',
    icon: 'folder',
    description:
      'Reportes dinámicos y archivos PDF personalizados dentro del sistema de gestión documental, con dashboards internos en tiempo real y APIs REST para documentos y sincronización de datos.',
    tags: ['Python', '.NET', 'TypeScript', 'React', 'PDFKit', 'Docker', 'GitHub Actions'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Extractor de datos de la Superintendencia de Compañías',
    icon: 'scan',
    description:
      'Scraper con Selenium y OCR (Tesseract) que lee los PDF con PyMuPDF e identifica la firma auditora externa de cada compañía.',
    tags: ['Python', 'Selenium', 'Tesseract OCR', 'PyMuPDF', 'PostgreSQL'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Módulos financieros, inventario y conciliaciones',
    icon: 'chart',
    description:
      'Módulos financieros, de stock e inventario, con conciliaciones bancarias y reportes contables en JasperReports y Oracle Forms & Reports.',
    tags: ['Spring Boot', '.NET', 'Laravel', 'Angular', 'JasperReports', 'Oracle Forms'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Gestión de carreras por WhatsApp',
    icon: 'map',
    description:
      'SaaS multi-cooperativa: los pasajeros piden por WhatsApp, los conductores usan una app móvil y el operador asigna desde una central web con mapas.',
    tags: ['NestJS', 'React Native', 'WhatsApp Cloud API', 'Google Maps', 'PostgreSQL'],
    status: 'En desarrollo',
    links: { demo: '', repo: '' },
  },
  {
    title: 'Microservicios bancarios',
    icon: 'bank',
    description:
      'Servicios de clientes y cuentas comunicados por eventos con RabbitMQ, con pruebas y Docker Compose.',
    tags: ['Java 17', 'Spring Boot 3', 'RabbitMQ', 'Docker Compose', 'PostgreSQL'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Cobranzas y contratos laborales',
    icon: 'document',
    description:
      'Digitalización completa del proceso de cobranza de deudas, con registro y seguimiento de pagos, y un generador de contratos laborales que aumentó 50% la productividad de RRHH. Carga del sistema 35% más rápida.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Migración de WordPress a Astro',
    icon: 'globe',
    description:
      'Rediseño del sitio de una firma de auditoría con servicios, tarifario, blog y contacto.',
    tags: ['Astro', 'TypeScript', 'Vercel'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Asistentes de WhatsApp con IA',
    icon: 'chat',
    description: 'Chatbots que informan sucursales y agendan citas, automatizados con n8n.',
    tags: ['LLMs', 'n8n', 'MCP', 'WhatsApp'],
    links: { demo: '', repo: '' },
  },
];

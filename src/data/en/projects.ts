import type { Project } from '@/types/content';

export const projectsNote: string =
  'Some projects are private under client agreements; I’m happy to walk through them in an interview.';

// Every line has the same width in a monospaced font: edit with care.
const auditPlatformDiagram = [
  '┌───────────┐   REST/HTTPS   ┌─────────────────┐',
  '│           │───────────────>│   Django REST   │───┐',
  '│  Next.js  │                └─────────────────┘   │   ┌──────────────┐',
  '│           │   WS + JWT     ┌─────────────────┐   ├──>│  PostgreSQL  │',
  '│           │───────────────>│ Channels (ASGI) │───┘   └──────────────┘',
  '└───────────┘                └────────^────────┘',
  '                                      │ groups / pub-sub',
  '                             ┌────────┴────────┐',
  '                             │      Redis      │',
  '                             └─────────────────┘',
].join('\n');

/** How many projects show before "Show more projects" (includes the featured one). */
export const projectsPreviewCount: number = 5;

/** The first project with `featured: true` spans the full width. */
export const projects: Project[] = [
  {
    title: 'Multi-firm CRM and external audit platform',
    icon: 'layers',
    description:
      'Platform used by several audit firms to manage clients, engagements and documents. Dashboards filtered by firm and auditor, and real-time notifications over WebSockets with JWT and group routing.',
    tags: ['Django REST', 'Django Channels', 'Redis', 'Next.js', 'PostgreSQL', 'AWS Lightsail'],
    featured: true,
    diagram: auditPlatformDiagram,
    links: { demo: '', repo: '' },
  },
  {
    title: 'Quality control for Odoo 18',
    icon: 'shield',
    description:
      'Custom Odoo 18 Community module: automatic inspections on receipts, deliveries and manufacturing orders that block validation, non-conformities with cost, supplier quality score, QWeb PDF and HTML reports, and an OWL dashboard. 21 tests on GitHub Actions and a Spanish translation.',
    tags: ['Odoo 18', 'Python', 'OWL 2', 'QWeb', 'PostgreSQL', 'Docker'],
    links: { demo: '', repo: 'https://github.com/JavierYungaT/odoo18-quality-control' },
  },
  {
    title: 'Electronic invoicing integrated with the SRI',
    icon: 'receipt',
    caseStudy: 'facturacion-sri',
    description:
      'Integration with Ecuador’s tax authority (SRI) to issue electronic invoices and credit and debit notes from the enterprise system. 40% faster queries with indexing and advanced pagination, and large tax-data volumes processed with Hibernate and stored procedures.',
    tags: ['Spring Boot', '.NET', 'Hibernate', 'SRI API', 'SQL Server', 'Angular'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Sports facility bookings',
    icon: 'calendar',
    description:
      'Apps published on Google Play and the App Store with push notifications. 30% faster booking validation thanks to improved availability logic and concurrent locking.',
    tags: ['Node.js', 'TypeScript', 'Flutter', 'PostgreSQL', 'Docker', 'AWS'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Document management with PDF reports',
    icon: 'folder',
    description:
      'Dynamic reports and custom PDF files inside the document management system, with real-time internal dashboards and REST APIs for documents and data sync.',
    tags: ['Python', '.NET', 'TypeScript', 'React', 'PDFKit', 'Docker', 'GitHub Actions'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Data extractor for Ecuador’s Companies Superintendence',
    icon: 'scan',
    description:
      'Scraper with Selenium and OCR (Tesseract) that reads PDFs with PyMuPDF and identifies each company’s external audit firm.',
    tags: ['Python', 'Selenium', 'Tesseract OCR', 'PyMuPDF', 'PostgreSQL'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Finance, inventory and reconciliation modules',
    icon: 'chart',
    description:
      'Finance, stock and inventory modules, with bank reconciliations and accounting reports built in JasperReports and Oracle Forms & Reports.',
    tags: ['Spring Boot', '.NET', 'Laravel', 'Angular', 'JasperReports', 'Oracle Forms'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Ride dispatch over WhatsApp',
    icon: 'map',
    description:
      'Multi-tenant SaaS for taxi cooperatives: passengers request rides on WhatsApp, drivers use a mobile app and dispatchers assign trips from a web console with maps.',
    tags: ['NestJS', 'React Native', 'WhatsApp Cloud API', 'Google Maps', 'PostgreSQL'],
    status: 'In development',
    links: { demo: '', repo: '' },
  },
  {
    title: 'Banking microservices',
    icon: 'bank',
    description:
      'Customer and account services that communicate through RabbitMQ events, with tests and Docker Compose.',
    tags: ['Java 17', 'Spring Boot 3', 'RabbitMQ', 'Docker Compose', 'PostgreSQL'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'Debt collection and employment contracts',
    icon: 'document',
    description:
      'Fully digitized debt collection with payment tracking, plus an employment contract generator that raised HR productivity by 50%. 35% faster system load times.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'WordPress to Astro migration',
    icon: 'globe',
    description: 'Redesign of an audit firm’s website with services, pricing, blog and contact pages.',
    tags: ['Astro', 'TypeScript', 'Vercel'],
    links: { demo: '', repo: '' },
  },
  {
    title: 'AI WhatsApp assistants',
    icon: 'chat',
    description: 'Chatbots that share branch information and book appointments, automated with n8n.',
    tags: ['LLMs', 'n8n', 'MCP', 'WhatsApp'],
    links: { demo: '', repo: '' },
  },
];

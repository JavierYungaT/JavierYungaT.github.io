import type { Experience } from '@/types/content';

/** Most recent first. */
export const experience: Experience[] = [
  {
    role: 'Systems Engineer',
    company: 'Aliado Contable',
    period: '2025 — present',
    current: true,
    ref: 'HEAD → main',
    highlights: [
      'Multi-firm CRM and external audit platform with real-time notifications (WebSockets with JWT).',
      'REST APIs for document management, bookings and real-time data sync.',
      'Docker and CI/CD with GitHub Actions on AWS.',
    ],
    tags: ['Python', 'Django REST', '.NET', 'TypeScript', 'React', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    role: 'Full Stack Developer',
    company: 'La Motora',
    period: 'May 2024 — Nov 2025',
    current: false,
    highlights: [
      'Document management and sports booking systems published on Google Play and the App Store.',
      '30% faster booking validation (availability logic and concurrent locking).',
      'Push notifications, custom PDFs and real-time dashboards.',
    ],
    tags: ['Node.js', '.NET', 'TypeScript', 'Flutter', 'Angular', 'MongoDB', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Service Desk Assistant',
    company: 'Cooperativa de Ahorro y Crédito CREA',
    period: 'Feb 2024 — May 2024',
    current: false,
    highlights: [
      'Optimized SQL queries on the Oracle core banking system: 25% faster reports.',
      'Task automation on Linux servers and user support with GLPI.',
    ],
    tags: ['Oracle', 'PL/SQL', 'Linux', 'Bash', 'GLPI'],
  },
  {
    role: 'Software Developer',
    company: 'Almacenes Juan Eljuri',
    period: 'Mar 2023 — Feb 2024',
    current: false,
    highlights: [
      'SRI integration for electronic invoices and credit/debit notes; 40% faster queries with indexing and pagination.',
      'Finance, stock and inventory modules; bank reconciliations with JasperReports.',
    ],
    tags: ['Spring Boot', '.NET', 'Hibernate', 'Laravel', 'Angular', 'SQL Server'],
  },
  {
    role: 'Web Developer',
    company: 'MycodedMind',
    period: 'Sep 2022 — Feb 2023',
    current: false,
    highlights: [
      'Fully digitized the debt collection process.',
      'Employment contract generator that raised HR productivity by 50%; 35% faster system load times.',
    ],
    tags: ['PHP', 'JavaScript', 'MySQL', 'REST'],
  },
];

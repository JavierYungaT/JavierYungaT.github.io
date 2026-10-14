import type { Experience } from '@/types/content';

/** Ordenado de la más reciente a la más antigua. */
export const experience: Experience[] = [
  {
    role: 'Ingeniero en Sistemas',
    company: 'Aliado Contable',
    period: '2025 — presente',
    current: true,
    ref: 'HEAD → main',
    highlights: [
      'Plataforma CRM y de auditoría externa multi-firma con notificaciones en tiempo real (WebSockets con JWT).',
      'APIs REST para gestión documental, reservas y sincronización de datos en tiempo real.',
      'Docker y CI/CD con GitHub Actions sobre AWS.',
    ],
    tags: ['Python', 'Django REST', 'TypeScript', 'React', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'La Motora',
    period: 'may 2024 — nov 2025',
    current: false,
    highlights: [
      'Sistemas de gestión documental y reservas deportivas publicados en Google Play y App Store.',
      'Validación de reservas 30% más rápida (lógica de disponibilidad y bloqueos concurrentes).',
      'Notificaciones push, PDFs personalizados y dashboards en tiempo real.',
    ],
    tags: ['Node.js', 'TypeScript', 'Flutter', 'Angular', 'MongoDB', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Asistente de Mesa de Servicio',
    company: 'Cooperativa de Ahorro y Crédito CREA',
    period: 'feb 2024 — may 2024',
    current: false,
    highlights: [
      'Consultas SQL optimizadas sobre el core financiero en Oracle: reportes 25% más rápidos.',
      'Automatización de tareas en servidores Linux y soporte con GLPI.',
    ],
    tags: ['Oracle', 'PL/SQL', 'Linux', 'Bash', 'GLPI'],
  },
  {
    role: 'Desarrollador de Software',
    company: 'Almacenes Juan Eljuri',
    period: 'mar 2023 — feb 2024',
    current: false,
    highlights: [
      'Integración con el SRI para facturación electrónica y notas de crédito/débito; consultas 40% más rápidas con indexación y paginación.',
      'Módulos financieros, stock e inventario; conciliaciones bancarias con JasperReports.',
    ],
    tags: ['Spring Boot', 'Hibernate', 'Laravel', 'Angular', 'SQL Server'],
  },
  {
    role: 'Desarrollador Web',
    company: 'MycodedMind',
    period: 'sep 2022 — feb 2023',
    current: false,
    highlights: [
      'Digitalización completa del proceso de cobranzas.',
      'Generador de contratos laborales que aumentó 50% la productividad de RRHH; carga del sistema 35% más rápida.',
    ],
    tags: ['PHP', 'JavaScript', 'MySQL', 'REST'],
  },
];

import type { ExtraGroup, SkillGroup } from '@/types/content';

/** Tecnologías con nivel. Niveles: 'advanced' (avanzado), 'intermediate' (intermedio), 'basic' (básico). */
export const stack: SkillGroup[] = [
  {
    title: 'Backend y lenguajes',
    icon: 'server',
    skills: [
      { name: 'Spring', level: 'advanced' },
      { name: 'Java', level: 'intermediate' },
      { name: 'J2EE', level: 'intermediate' },
      { name: 'EJB', level: 'intermediate' },
      { name: 'JSP', level: 'intermediate' },
      { name: '.NET / ASP.NET Core', level: 'intermediate' },
      { name: 'PHP', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'C++', level: 'intermediate' },
    ],
  },
  {
    title: 'Frontend y móvil',
    icon: 'mobile',
    skills: [
      { name: 'HTML', level: 'advanced' },
      { name: 'Angular', level: 'intermediate' },
      { name: 'React', level: 'intermediate' },
      { name: 'React Native', level: 'intermediate' },
      { name: 'Android', level: 'intermediate' },
      { name: 'WordPress', level: 'intermediate' },
      { name: 'iPhone (iOS)', level: 'basic' },
    ],
  },
  {
    title: 'Bases de datos',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 'advanced' },
      { name: 'SQL Server', level: 'intermediate' },
      { name: 'Oracle', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
    ],
  },
  {
    title: 'Modelado, redes y entorno',
    icon: 'globe',
    skills: [
      { name: 'UML', level: 'advanced' },
      { name: 'TCP/IP', level: 'intermediate' },
      { name: 'Web Server', level: 'intermediate' },
      { name: 'Eclipse', level: 'intermediate' },
    ],
  },
];

/** Conocimientos complementarios, sin nivel. `detail` es opcional. */
export const stackExtras: ExtraGroup[] = [
  {
    title: 'Otros conocimientos',
    icon: 'sparkles',
    items: [
      { name: 'Toma de requerimientos' },
      { name: 'Manejo de inventario' },
      { name: 'Manejo de facturas' },
      { name: 'Mantenimiento de equipos' },
      { name: 'Configuración DNS' },
      { name: 'Paquete Office' },
      { name: 'Enrutamiento en routers Cisco' },
      { name: 'Google Cloud' },
      { name: 'AWS' },
      { name: 'Windows Server' },
      { name: 'Linux' },
      { name: 'Active Directory' },
      { name: 'Laravel' },
      { name: 'Flutter' },
      { name: 'Docker' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'DevOps y Cloud',
    icon: 'cloud',
    items: [
      { name: 'Docker', detail: 'Contenedores para despliegues consistentes' },
      { name: 'AWS (EC2, S3)', detail: 'Hosting de backend y almacenamiento' },
      { name: 'CI/CD', detail: 'Automatización con GitHub Actions' },
    ],
  },
  {
    title: 'Herramientas',
    icon: 'code',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Jira' },
      { name: 'Trello' },
      { name: 'Slack' },
      { name: 'Zoho' },
      { name: 'GLPI' },
    ],
  },
  {
    title: 'Metodología ágil',
    icon: 'users',
    items: [{ name: 'Scrum', detail: 'Trabajo colaborativo en equipos multidisciplinarios' }],
  },
];

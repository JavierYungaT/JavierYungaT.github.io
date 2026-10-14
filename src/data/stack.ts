import type { SkillGroup } from '@/types/content';

export const stack: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    skills: [
      { name: 'Spring Boot', level: 'avanzado' },
      { name: 'Node.js / NestJS', level: 'intermedio' },
      { name: 'Python / Django', level: 'intermedio' },
      { name: 'Laravel / PHP', level: 'intermedio' },
      { name: 'Java EE / JSP', level: 'intermedio' },
    ],
  },
  {
    title: 'Frontend y móvil',
    icon: 'mobile',
    skills: [
      { name: 'HTML / CSS', level: 'avanzado' },
      { name: 'Angular', level: 'intermedio' },
      { name: 'React / Next.js', level: 'intermedio' },
      { name: 'Flutter', level: 'intermedio' },
      { name: 'React Native', level: 'intermedio' },
    ],
  },
  {
    title: 'Datos',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 'avanzado' },
      { name: 'PostgreSQL', level: 'intermedio' },
      { name: 'Oracle / PL/SQL', level: 'intermedio' },
      { name: 'SQL Server', level: 'intermedio' },
      { name: 'MongoDB / Firebase', level: 'intermedio' },
    ],
  },
  {
    title: 'Cloud y DevOps',
    icon: 'cloud',
    skills: [
      { name: 'UML', level: 'avanzado' },
      { name: 'Docker', level: 'intermedio' },
      { name: 'AWS', level: 'intermedio' },
      { name: 'GitHub Actions', level: 'intermedio' },
      { name: 'Linux / Windows Server', level: 'intermedio' },
    ],
  },
];

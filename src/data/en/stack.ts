import type { ExtraGroup, SkillGroup } from '@/types/content';

/** Technologies with a level: 'advanced', 'intermediate' or 'basic'. */
export const stack: SkillGroup[] = [
  {
    title: 'Backend and languages',
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
    title: 'Frontend and mobile',
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
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 'advanced' },
      { name: 'SQL Server', level: 'intermediate' },
      { name: 'Oracle', level: 'intermediate' },
      { name: 'PostgreSQL', level: 'intermediate' },
    ],
  },
  {
    title: 'Modeling, networking and tooling',
    icon: 'globe',
    skills: [
      { name: 'UML', level: 'advanced' },
      { name: 'TCP/IP', level: 'intermediate' },
      { name: 'Web Server', level: 'intermediate' },
      { name: 'Eclipse', level: 'intermediate' },
    ],
  },
];

/** Complementary skills, without a level. `detail` is optional. */
export const stackExtras: ExtraGroup[] = [
  {
    title: 'Other skills',
    icon: 'sparkles',
    items: [
      { name: 'Requirements gathering' },
      { name: 'Inventory management' },
      { name: 'Invoice management' },
      { name: 'Hardware maintenance' },
      { name: 'DNS configuration' },
      { name: 'Microsoft Office' },
      { name: 'Cisco router configuration' },
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
    title: 'DevOps and Cloud',
    icon: 'cloud',
    items: [
      { name: 'Docker', detail: 'Containers for consistent deployments' },
      { name: 'AWS (EC2, S3)', detail: 'Backend hosting and storage' },
      { name: 'CI/CD', detail: 'Automation with GitHub Actions' },
    ],
  },
  {
    title: 'Tools',
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
    title: 'Agile',
    icon: 'users',
    items: [{ name: 'Scrum', detail: 'Collaborative work in cross-functional teams' }],
  },
];

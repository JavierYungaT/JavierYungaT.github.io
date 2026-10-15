import type { Certification, Degree } from '@/types/content';

export const degree: Degree = {
  title: 'B.S. in Computer Science Engineering',
  institution: 'Universidad Politécnica Salesiana',
  period: '2017 — 2022',
  note: 'Degree registered with SENESCYT (Ecuador)',
};

/** How many certifications show before "See all". */
export const certificationsPreviewCount: number = 4;

/** Most recent first. Course names are kept as issued. */
export const certifications: Certification[] = [
  {
    name: 'Java Microservices with Kafka, Spring Boot and Event Sourcing',
    issuer: 'Udemy',
    date: 'Dec 2025',
    isoDate: '2025-12',
  },
  {
    name: 'n8n + MCP: Automation and AI agents',
    issuer: 'Udemy',
    date: 'Nov 2025',
    isoDate: '2025-11',
  },
  { name: 'Flutter Mobile: from zero to expert', issuer: 'Udemy', date: 'May 2025', isoDate: '2025-05' },
  { name: 'Spring Framework 6 and Spring Boot 3', issuer: 'Udemy', date: 'May 2025', isoDate: '2025-05' },
  { name: 'Cloud Computing', issuer: 'Google Actívate', date: 'Oct 2022', isoDate: '2022-10' },
  { name: 'Mobile App Development', issuer: 'Google Actívate', date: 'Oct 2022', isoDate: '2022-10' },
  { name: 'IoT Fundamentals: Big Data & Analytics', issuer: 'Cisco', date: 'Apr 2020', isoDate: '2020-04' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy', date: 'Dec 2019', isoDate: '2019-12' },
];

import type { Certification, Degree } from '@/types/content';

export const degree: Degree = {
  title: 'Ingeniero en Ciencias de la Computación',
  institution: 'Universidad Politécnica Salesiana',
  period: '2017 — 2022',
  note: 'Título registrado en SENESCYT',
};

/** Ordenadas de la más reciente a la más antigua. */
export const certifications: Certification[] = [
  {
    name: 'Java Microservices con Kafka, Spring Boot y Event Sourcing',
    issuer: 'Udemy',
    date: 'dic 2025',
    isoDate: '2025-12',
  },
  {
    name: 'n8n + MCP: Automatización y agentes de IA',
    issuer: 'Udemy',
    date: 'nov 2025',
    isoDate: '2025-11',
  },
  { name: 'Flutter Móvil: de cero a experto', issuer: 'Udemy', date: 'may 2025', isoDate: '2025-05' },
  { name: 'Spring Framework 6 y Spring Boot 3', issuer: 'Udemy', date: 'may 2025', isoDate: '2025-05' },
  { name: 'Cloud Computing', issuer: 'Google Actívate', date: 'oct 2022', isoDate: '2022-10' },
  { name: 'Desarrollo de Apps Móviles', issuer: 'Google Actívate', date: 'oct 2022', isoDate: '2022-10' },
  { name: 'IoT Fundamentals: Big Data & Analytics', issuer: 'Cisco', date: 'abr 2020', isoDate: '2020-04' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy', date: 'dic 2019', isoDate: '2019-12' },
];

/** Tipos compartidos por los archivos de src/data y los componentes que los muestran. */

import type { IconName } from '@/lib/icons';

export type { IconName };

export interface NavLink {
  label: string;
  href: string;
}

export interface ExternalLink {
  label: string;
  href: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
}

export interface Stat {
  icon: IconName;
  /** Número que se anima al aparecer. */
  value: number;
  /** Texto pegado al número, p. ej. "+". */
  suffix?: string;
  label: string;
  detail?: string;
}

export interface Experience {
  role: string;
  company: string;
  /** Texto visible del periodo, p. ej. "may 2024 — nov 2025". */
  period: string;
  /** Los trabajos actuales se muestran con el nodo relleno. */
  current: boolean;
  /** Etiqueta estilo git junto al hash (p. ej. "HEAD → main"). */
  ref?: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectLinks {
  /** URL de la demo. Déjala vacía si no hay. */
  demo?: string;
  /** URL del repositorio. Déjala vacía si es privado. */
  repo?: string;
}

export interface Project {
  title: string;
  icon: IconName;
  description: string;
  tags: string[];
  /** Proyecto a ancho completo con diagrama. */
  featured?: boolean;
  /** Etiqueta corta de estado, p. ej. "En desarrollo". */
  status?: string;
  /** Slug del caso de estudio en src/content/casos/ (opcional). */
  caseStudy?: string;
  /** Diagrama de arquitectura en texto monoespaciado. */
  diagram?: string;
  links?: ProjectLinks;
}

export type SkillLevel = 'avanzado' | 'intermedio';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  icon: IconName;
  skills: Skill[];
}

export interface Degree {
  title: string;
  institution: string;
  period: string;
  note?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  /** Texto visible, p. ej. "dic 2025". */
  date: string;
  /** Fecha ISO (AAAA-MM) para el atributo datetime. */
  isoDate: string;
}

export interface Practice {
  /** Identificador corto, usado en los ids de las pestañas. */
  id: string;
  label: string;
  icon: IconName;
  title: string;
  /** Por qué se hace así, en una o dos frases. */
  why: string;
  /** Proyectos donde se aplicó. */
  appliedIn: string[];
  principles: string[];
  filename: string;
  /** Lenguaje para el resaltado de sintaxis. */
  lang: 'ts' | 'java' | 'python' | 'sql' | 'yaml';
  code: string;
}

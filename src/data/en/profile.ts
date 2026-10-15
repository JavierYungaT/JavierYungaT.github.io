import type { SoftSkill, Stat } from '@/types/content';

export const hero = {
  availability: 'Open to mid-level Full Stack roles',
  /** The title renders as `titleHighlight` (gradient) + `titleRest`. */
  titleHighlight: 'Software that solves',
  titleRest: 'real business problems.',
  subtitle:
    'I’m Javier Yunga, a Full Stack Developer. For more than 4 years I’ve been turning accounting, tax and operational processes into web, mobile and backend systems that businesses use every day.',
  /** Path inside public/. If the file is missing, the monogram is shown. */
  photo: '/foto.png',
  monogram: 'JY',
  role: 'Full Stack Developer · Mid\u2011level',
  cv: '/cvEN.pdf',
  /** File name used when the CV is downloaded. */
  cvFileName: 'Javier-Yunga-CV-EN.pdf',
};

export const stats: Stat[] = [
  { icon: 'clock', value: 4, suffix: '+', label: 'years building software' },
  { icon: 'building', value: 5, label: 'companies and teams' },
  { icon: 'devices', value: 3, label: 'platforms', detail: 'web, mobile, cloud' },
];

export const about = {
  paragraphs: [
    'More than 4 years in cross-functional teams, from backend to deployment. I have worked in retail, credit unions, audit firms and startups, which helps me understand the accounting, tax and compliance processes software has to respect.',
    'I currently work as a Systems Engineer at Aliado Contable, building audit and document management platforms. I also perform IT controls audits.',
  ],
  /** Decorative code that types itself (k: keyword, s: string, f: function, n: value, c: comment). */
  code: [
    `<span class="k">import</span> { Engineer } <span class="k">from</span> <span class="s">'javier-yunga'</span>;`,
    ``,
    `<span class="k">const</span> javier = <span class="k">new</span> <span class="f">Engineer</span>({`,
    `  experience: <span class="s">'4+ years'</span>,`,
    `  focus: [<span class="s">'web'</span>, <span class="s">'mobile'</span>, <span class="s">'backend'</span>],`,
    `  stack: [<span class="s">'Spring Boot'</span>, <span class="s">'NestJS'</span>, <span class="s">'Django'</span>],`,
    `  available: <span class="n">true</span>,`,
    `});`,
    ``,
    `javier.<span class="f">build</span>(); <span class="c">// software people use every day</span>`,
  ].join('\n'),
  /** Soft skills, each backed by concrete proof. */
  softSkills: [
    { icon: 'sparkles', title: 'Fast learner', proof: '4 certifications in 2025: Spring Boot 3, Flutter, Kafka, n8n + MCP' },
    { icon: 'users', title: 'Teamwork', proof: 'Cross-functional Scrum teams across 5 companies' },
    { icon: 'chat', title: 'Business communication', proof: 'Requirements gathering with accounting, finance and audit teams' },
    { icon: 'chart', title: 'Results-driven', proof: 'Measurable gains: 25%, 30%, 40% and 50% faster' },
  ] satisfies SoftSkill[],
  /** Floating cards next to the code window. */
  highlights: [
    { label: 'Systems Engineer', detail: 'Aliado Contable' },
    { label: 'Electronic invoicing', detail: 'SRI integration' },
  ],
};

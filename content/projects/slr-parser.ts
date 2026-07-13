import type { Project } from '@/types'

export const slrParserProject: Project = {
  id: 'slrParser',
  slug: 'slr-parser',
  displayName: 'SLR Parser',
  tagline: 'Desktop SLR parser with Java Swing GUI — accepts any context-free grammar.',
  description: 'A desktop application implementing a complete SLR (Simple LR) parser. Accepts any context-free grammar, constructs FIRST/FOLLOW sets and the full SLR parsing table, and displays a step-by-step parse trace. Distributed as a standalone LR.jar — no installation needed.',
  techStack: ['Java', 'Java Swing', 'NetBeans', 'Compiler Theory'],
  features: [
    'Accepts arbitrary context-free grammars as input',
    'Constructs SLR parsing table — FIRST, FOLLOW, ACTION, GOTO sets',
    'Step-by-step parse trace for any input string',
    'Standalone LR.jar — double-click to run, no installation required',
  ],
  screenshots: [
    'https://raw.githubusercontent.com/pankajj42/SLR-Parser/master/Sample%20Screenshot.png',
  ],
  repository: 'https://github.com/pankajj42/SLR-Parser',
  liveUrl: '',
}

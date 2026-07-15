import type { Experience } from '@/types'

export const experience: Experience[] = [
  {
    company: 'Arista Networks',
    companyUrl: 'https://www.arista.com',
    role: 'Software Engineer',
    type: 'fulltime',
    period: 'July 2017 – September 2018',
    location: 'Bengaluru, India',
    highlights: [
      'Designed and implemented a state-tracking model for all Hardware CLI commands, making them asynchronous — preventing process terminations that compromised EOS (Extensible Operating System) stability.',
      'Eliminated socket buffer overflow in the IPC layer, preventing service crashes and enabling reliable data flow to cloud services.',
      'Developed and enhanced CAPI models to support structured JSON output, WebAPIs, and CLI console output — used across the EOS platform.',
      'Authored unit and integration tests in Python; maintained feature documentations and enhanced internal developer tooling.',
      'Resolved 10+ critical customer escalations, directly improving system reliability and satisfaction for enterprise network customers.',
      'Mentored an intern through his project, providing technical guidance and code reviews.',
    ],
  },
  {
    company: 'Arista Networks',
    companyUrl: 'https://www.arista.com',
    role: 'Software Engineer Intern',
    type: 'intern',
    period: 'May 2016 – July 2016',
    location: 'Bengaluru, India',
    highlights: [
      'Implemented Timestamp support in the Forwarding Database, enabling accurate time-based tracking of network forwarding events.',
      'Enabled CLI commands to return structured JSON output, streamlining automation workflows and monitoring integrations.',
    ],
  },
]

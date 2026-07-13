import type { Project } from '@/types'

export const liveVideoSurveillanceProject: Project = {
  id: 'liveVideoSurveillance',
  slug: 'live-video-surveillance',
  displayName: 'Live Video Surveillance System',
  tagline: 'B.Tech project: RTSP/RTMP media server, PHP admin portal, and Android streaming apps.',
  description: 'B.Tech final year project — a complete live video surveillance platform. A Node.js/CoffeeScript media server handles RTSP/RTMP ingest and HLS output via ffmpeg. A PHP web portal provides stream viewing and admin management. Two Android apps handle live streaming and remote viewing.',
  techStack: ['Node.js', 'CoffeeScript', 'Java (Android)', 'PHP', 'MySQL', 'RTSP', 'RTMP', 'HLS', 'ffmpeg'],
  features: [
    'Node.js media server — RTSP/RTMP ingest, ffmpeg transcoding, HLS output',
    'ffmpeg compression to minimise bandwidth across mobile and web viewers',
    'Android app for streaming device camera as an RTMP source',
    'Android app for viewing all active camera streams',
    'PHP admin portal for stream management and DVR configuration',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/FinalYearProject-Live-Video-Surveillance-through-CCTV-and-Mobile',
  liveUrl: '',
}

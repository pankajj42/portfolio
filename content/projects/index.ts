import type { Project } from '@/types'
import { bankingMicroservicesProject } from './banking-microservices'
import { chessProject } from './chess'
import { codeflexAiProject } from './codeflex-ai'
import { liveVideoSurveillanceProject } from './live-video-surveillance'
import { notesGrpcProject } from './notes-grpc'
import { pedestrianDetectionProject } from './pedestrian-detection'
import { realEstateProject } from './real-estate'
import { slrParserProject } from './slr-parser'
import { socketIoChatAppProject } from './socketio-chat-app'
import { springBootChatAppProject } from './springboot-chat-app'
import { ticketDashboardProject } from './ticket-dashboard'
import { weatherAppProject } from './weather-app'
import { welthFinanceTrackerProject } from './welth-finance-tracker'
import { portfolioProject } from './portfolio'
import { vaultyProject } from './vaulty'

/**
 * To add a new project:
 * 1. Create content/projects/my-project.ts
 * 2. Import it here and add to the projects object
 * 3. Add it to config.ts → projectOrder (and optionally featuredProjects)
 */
export const projects: Record<string, Project> = {
  notesGrpc: notesGrpcProject,
  bankingMicroservices: bankingMicroservicesProject,
  ticketDashboard: ticketDashboardProject,
  welthFinanceTracker: welthFinanceTrackerProject,
  codeflexAi: codeflexAiProject,
  realEstate: realEstateProject,
  chess: chessProject,
  weatherApp: weatherAppProject,
  socketIoChatApp: socketIoChatAppProject,
  springBootChatApp: springBootChatAppProject,
  slrParser: slrParserProject,
  liveVideoSurveillance: liveVideoSurveillanceProject,
  pedestrianDetection: pedestrianDetectionProject,
  portfolio: portfolioProject,
  vaulty: vaultyProject, 
}

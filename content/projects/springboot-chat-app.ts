import type { Project } from '@/types'

export const springBootChatAppProject: Project = {
  id: 'springBootChatApp',
  slug: 'springboot-chat-app',
  displayName: 'Spring Boot Chat App',
  tagline: 'Real-time chat built with Spring Boot WebSocket support.',
  description: 'A real-time chat application using Spring Boot\'s STOMP WebSocket support for live messaging. Serves a static frontend directly. Built as a focused exercise in Spring Boot WebSocket integration.',
  techStack: ['Java', 'Spring Boot', 'WebSockets', 'STOMP', 'HTML', 'CSS', 'JavaScript', 'Maven'],
  features: [
    'Real-time messaging via Spring Boot STOMP WebSocket support',
    'Server-side message broadcasting to all connected clients',
    'Static frontend served by Spring Boot',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/SpringBoot_Chat_App',
  liveUrl: '',
}

import type { Project } from '@/types'

export const socketIoChatAppProject: Project = {
  id: 'socketIoChatApp',
  slug: 'socketio-chat-app',
  displayName: 'Real-time Chat App',
  tagline: 'Socket.IO chat with React frontend and Node.js backend, fully Dockerised.',
  description: 'A real-time chat application with a React frontend and a Node.js/Socket.IO backend, Dockerised as a monorepo. Client and server run in separate containers started with a single docker compose up.',
  techStack: ['React', 'JavaScript', 'Socket.IO', 'Node.js', 'Docker', 'Docker Compose'],
  features: [
    'Real-time messaging via Socket.IO WebSocket connection',
    'Room-based chat architecture',
    'Fully Dockerised — client and server in separate containers, docker compose up starts everything',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/SocketIO_ChatApp',
  liveUrl: '',
}

import type { Project } from '@/types'

export const weatherAppProject: Project = {
  id: 'weatherApp',
  slug: 'weather-app',
  displayName: 'Klimate — Weather App',
  tagline: 'Weather app with dark/light themes, favourites, search history, Recharts, and Docker.',
  description: 'A production-quality weather application built with React and TypeScript. Features dark/light theme toggling, city search with favourites and recent history in localStorage, current location detection via Geolocation API, and interactive weather charts via Recharts. Fully Dockerised for one-command startup.',
  techStack: [
    'React', 'TypeScript', 'TanStack Query', 'Shadcn UI',
    'Recharts', 'Tailwind CSS', 'Vite', 'Docker', 'Docker Compose',
  ],
  features: [
    'Light and dark theme with system-preference detection',
    'City favourites and recent-search history stored in localStorage',
    'Geolocation API for automatic current-location weather',
    'Interactive weather charts via Recharts',
    'OpenWeather API integration',
    'One-command setup with Docker Compose',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/WeatherApp',
  liveUrl: 'https://weather-app-kappa-lilac-88.vercel.app/',
}

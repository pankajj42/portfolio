import type { Project } from '@/types'

export const pedestrianDetectionProject: Project = {
  id: 'pedestrianDetection',
  slug: 'pedestrian-detection',
  displayName: 'Pedestrian Detection in IR Video',
  tagline: 'IEEE paper: pedestrian detection in thermal infrared video using classical image processing.',
  description: 'Research project implementing pedestrian detection in thermal infrared video using background subtraction, morphological operations, and contour-based detection tuned for low-contrast infrared imagery. Published as an IEEE paper.',
  techStack: ['MATLAB', 'Python', 'Digital Image Processing', 'Computer Vision'],
  features: [
    'Background subtraction for moving object detection in thermal video',
    'Morphological operations for noise reduction and shape refinement',
    'Contour-based pedestrian candidate extraction',
    'Evaluated on infrared video datasets — published as IEEE paper',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/DigitalImageProcessing-Pedestrian-Dectection-in-Infrared-Images',
  liveUrl: '',
}

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Code With Buddy',
    description: 'Live collaborative code editor built with Socket.IO, allowing real-time code sharing, syntax highlighting, and execution.',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Socket.IO', 'Express', 'Monaco Editor'],
    github: 'https://github.com/ratnapriya/code-with-buddy',
    live: 'https://code-buddy.vercel.app',
    category: 'Dev',
    featured: true
  },
  {
    id: 2,
    title: 'Drishyam',
    description: 'Biometric payment solution for visually impaired users, using facial recognition and voice commands for secure transactions.',
    image: 'https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['OpenCV', 'TensorFlow', 'Python', 'Flask'],
    github: 'https://github.com/ratnapriya/drishyam',
    category: 'AI',
    featured: true
  },
  {
    id: 3,
    title: 'Diabetic Retinopathy Detection',
    description: 'CNN model for early detection of diabetic retinopathy from retinal images with 90% accuracy on test dataset.',
    image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['CNN', 'Keras', 'TensorFlow', 'Medical AI'],
    github: 'https://github.com/ratnapriya/retinopathy-detection',
    category: 'AI',
    featured: true
  },
  {
    id: 4,
    title: 'PrivShield',
    description: 'Privacy-preserving machine learning framework that enables training on encrypted data using homomorphic encryption.',
    image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ML', 'Privacy', 'Cryptography', 'Python'],
    github: 'https://github.com/ratnapriya/privshield',
    category: 'AI',
    featured: true
  },
  {
    id: 5,
    title: 'GlowUp',
    description: 'AI-powered skincare recommendation system that analyzes facial images to suggest personalized skincare routines.',
    image: 'https://images.pexels.com/photos/3373750/pexels-photo-3373750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['AI', 'React', 'TensorFlow.js', 'Computer Vision'],
    github: 'https://github.com/ratnapriya/glowup',
    live: 'https://glowup-skincare.vercel.app',
    category: 'Design',
    featured: true
  },
  {
    id: 6,
    title: 'LearnAI Explorer',
    description: 'Interactive dashboard for AI learning resources with progress tracking and personalized recommendations.',
    image: 'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind', 'Recommendation'],
    github: 'https://github.com/ratnapriya/learnai-explorer',
    live: 'https://learnai-explorer.vercel.app',
    category: 'Design',
    featured: false
  },
  {
    id: 7,
    title: 'InspoFrame',
    description: 'Fashion moodboard builder that allows users to create, share, and explore fashion inspiration collections.',
    image: 'https://images.pexels.com/photos/5325104/pexels-photo-5325104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Unsplash API', 'Draggable', 'Cloudinary'],
    github: 'https://github.com/ratnapriya/inspoframe',
    live: 'https://inspoframe.vercel.app',
    category: 'Design',
    featured: false
  },
  {
    id: 8,
    title: 'Startify Studio',
    description: 'Brand kit generator for startups that creates logos, color palettes, and typography recommendations.',
    image: 'https://images.pexels.com/photos/13017593/pexels-photo-13017593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['NextJS', 'ML Color Theory', 'SVG Generation', 'Typography'],
    github: 'https://github.com/ratnapriya/startify',
    category: 'Design',
    featured: false
  },
  {
    id: 9,
    title: 'PortMeUp',
    description: 'UX portfolio generator that helps designers create professional portfolios with case studies and interactive elements.',
    image: 'https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Framer Motion', 'Styled Components', 'Portfolio'],
    github: 'https://github.com/ratnapriya/portmeup',
    live: 'https://portmeup.vercel.app',
    category: 'Design',
    featured: false
  }
];
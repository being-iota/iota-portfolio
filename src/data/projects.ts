import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Code With Buddy',
    description: 'A real-time collaborative code editor enabling 100+ users to code simultaneously with zero latency.',
    image: '/projects/code-with-buddy.jpg',
    tags: ['React.js', 'CodeMirror', 'Node.js', 'Express.js', 'Socket.IO'],
    github: 'https://github.com/being-iota/Code-with-Buddy',
    live: 'https://code-with-buddy-i1u9-git-main-kaap10s-projects.vercel.app/',
    category: 'Dev',
    featured: true
  },
  {
    id: 2,
    title: 'IOTA Portfolio',
    description: 'A modern, interactive portfolio website showcasing my projects and skills with a beautiful 3D particle background.',
    image: '/projects/portfolio-preview.jpg',
    tags: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS'],
    github: 'https://github.com/ratnapriya/iota-portfolio',
    live: 'https://being-iota.netlify.app',
    category: 'Dev',
    featured: true
  },
  {
    id: 3,
    title: 'Drishyam',
    description: 'Biometric-based accessible payment system for the visually impaired with 98% accurate voice and facial recognition.',
    image: '/projects/drishyam.jpg',
    tags: ['React.js', 'Tailwind CSS', 'Python', 'Flask', 'Node.js', 'SQLite'],
    github: 'https://github.com/being-iota/Drishyam',
    category: 'AI',
    featured: true
  },
  {
    id: 4,
    title: 'Diabetic Retinopathy Detection',
    description: 'AI model with 90% accuracy for early diabetic retinopathy detection using deep learning.',
    image: '/projects/diabetic-retinopathy.jpg',
    tags: ['Python', 'TensorFlow', 'Keras', 'Flask', 'HTML', 'CSS', 'Messidor Dataset'],
    github: 'https://github.com/being-iota/Diabetic-Retinopathy-Detection-with-CNN',
    live: 'https://diabeticretinopathyai.netlify.app/',
    category: 'AI',
    featured: true
  },
  {
    id: 5,
    title: 'PrivShield',
    description: 'Privacy-preserving ML system using encrypted training and inference with Homomorphic Encryption and Federated Learning.',
    image: '/projects/privshield.jpg',
    tags: ['Python', 'PyTorch', 'PySyft', 'Flask'],
    github: 'https://github.com/being-iota/Privshield-PPML',
    live: 'https://privshield.netlify.app/',
    category: 'AI',
    featured: true
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    title: 'Startify Studio',
    description: 'Brand kit generator for startups that creates logos, color palettes, and typography recommendations.',
    image: 'https://images.pexels.com/photos/13017593/pexels-photo-13017593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['NextJS', 'ML Color Theory', 'SVG Generation', 'Typography'],
    github: 'https://github.com/ratnapriya/startify',
    category: 'Design',
    featured: false
  },
  {
    id: 10,
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
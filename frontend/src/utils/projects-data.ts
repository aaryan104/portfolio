export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  techStack: string[];
  role: string;
  timeline: string;
  status: 'Live' | 'In Progress' | 'Archived';
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  images: string[]; // Placeholder URLs
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'placementai',
    title: 'PlacementAI',
    oneLiner: 'AI-driven recruitment and automated resume-to-job pairing portal.',
    description: 'PlacementAI transforms the college recruitment workflow by using LLMs to scan student resumes, match them against job specs, generate automated fit scores, and simulate interactive conversational technical screening interviews.',
    techStack: ['React', 'FastAPI', 'OpenAI API', 'LangChain', 'PostgreSQL', 'Tailwind CSS'],
    role: 'Lead Full-Stack & AI Engineer',
    timeline: '3 Months (2025)',
    status: 'Live',
    githubUrl: 'https://github.com/AaryanMangukiya/PlacementAI',
    demoUrl: 'https://placement-ai-demo.vercel.app', // Placeholder
    features: [
      'Automated Resume Parsing and ATS score grading using OpenAI embeddings.',
      'Conversational audio-based technical interviews powered by speech-to-text APIs.',
      'Real-time metrics dashboards showing placement ratios and performance charts.',
      'Recruiter panel for bulk job matching and candidate evaluation exports.'
    ],
    images: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    slug: 'greencoin',
    title: 'GreenCoin',
    oneLiner: 'Blockchain waste-recycling reward platform.',
    description: 'GreenCoin incentivizes municipal waste recycling. Users photograph waste bins, AI models verify the recycling, and rewards are minted on-chain as GreenCoins redeemable at associated retail stores.',
    techStack: ['Solidity', 'React', 'Node.js', 'Web3.js', 'Express', 'MongoDB'],
    role: 'Smart Contract & Web3 Engineer',
    timeline: '4 Months (2024)',
    status: 'Live',
    githubUrl: 'https://github.com/AaryanMangukiya/GreenCoin',
    demoUrl: 'https://greencoin-waste-rewards.vercel.app',
    features: [
      'Solidity ERC-20 smart contracts deployed to testnets for reward token distributions.',
      'AI verification filters confirming photographed items match eligible recyclables.',
      'E-commerce coupon marketplace to redeem GreenCoin tokens with API partners.',
      'Metamask integration for secure user login and Web3 transaction signing.'
    ],
    images: [
      'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    slug: 'felix-jarvis-ai',
    title: 'Jarvis AI (FELIX)',
    oneLiner: 'Custom voice assistant utilizing localized LLMs and task routines.',
    description: 'FELIX is a high-performance desktop and Web voice assistant that coordinates tasks, triggers local scripts, summarizes audio transcripts, and handles calendar planning through voice command pipelines.',
    techStack: ['Python', 'FastAPI', 'OpenAI Whisper', 'PyTTSX3', 'React', 'Zustand'],
    role: 'Creator & Developer',
    timeline: '6 Months (2024)',
    status: 'Live',
    githubUrl: 'https://github.com/AaryanMangukiya/Felix-Jarvis',
    demoUrl: 'https://felix-assistant.vercel.app',
    features: [
      'Low-latency Whisper local streaming pipeline for precise speech-to-text mapping.',
      'Custom intent classifier directing voice commands to file control routines.',
      'Email drafting, schedule creation, and Spotify playback integration.',
      'Beautiful electron-glass desktop wrapper with visual sound wave bars.'
    ],
    images: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    slug: 'roadresq',
    title: 'RoadRESQ',
    oneLiner: 'AI road distress mapping and pothole detection app.',
    description: 'RoadRESQ analyzes live dashboard camera streams to automatically detect road anomalies like potholes and cracks. Locations are mapped and logged to city municipal dashboards to schedule repairs.',
    techStack: ['Python', 'YOLO v8', 'FastAPI', 'React Native', 'Google Maps API'],
    role: 'AI Model Trainer & Mobile Engineer',
    timeline: '2 Months (2024)',
    status: 'In Progress',
    githubUrl: 'https://github.com/AaryanMangukiya/RoadRESQ',
    features: [
      'Real-time object detection using a lightweight custom-trained YOLO v8 model.',
      'GPS mapping of anomalies onto shared Map markers with category markers.',
      'Web dashboard for city planners showing high-density anomaly areas.',
      'Automatic report generation with street photo attachments.'
    ],
    images: [
      'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1594913785162-e6785382defb?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    slug: 'ladli',
    title: 'Ladli',
    oneLiner: 'Women safety monitoring and emergency alert mobile hub.',
    description: 'Ladli is an emergency distress tracker. In critical situations, shaking the phone triggers emergency alert loops, recording surrounding audio and sending location maps to close contacts and nearby stations.',
    techStack: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Twilio API', 'Firebase Cloud Messaging'],
    role: 'Backend & Mobile Developer',
    timeline: '3 Months (2023)',
    status: 'Live',
    githubUrl: 'https://github.com/AaryanMangukiya/Ladli',
    features: [
      'Background shake detection triggering automatic SMS and Whatsapp coordinates via Twilio.',
      'Real-time geolocation tracking using socket connection endpoints.',
      'Silent voice recording uploads directly to secure backup Cloudinary storage.',
      'Interactive safe-route mapping highlighting lit avenues.'
    ],
    images: [
      'https://images.unsplash.com/photo-1508962914676-134849a727f0?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60'
    ]
  },
  {
    slug: 'portfolio-v2',
    title: 'Personal Portfolio',
    oneLiner: 'Premium personal portfolio site with FastAPI backend caching.',
    description: 'A custom personal portfolio website engineered with React, Vite, Framer Motion, and Tailwind CSS. Backed by a FastAPI caching server that proxies GitHub stats and LeetCode activity datasets.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FastAPI', 'Redis', 'MongoDB'],
    role: 'Creator & Designer',
    timeline: '1 Month (2026)',
    status: 'Live',
    githubUrl: 'https://github.com/AaryanMangukiya/portfolio',
    features: [
      'Custom Tailwind design tokens and glassmorphism styling layers.',
      'Framer Motion spring calculations for smooth custom cursors and card tilt shifts.',
      'Redis cache layer on FastAPI endpoints avoiding public API rate limits.',
      'Rate-limited Contact Form submissions validating schema patterns via Zod.'
    ],
    images: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
    ]
  }
];

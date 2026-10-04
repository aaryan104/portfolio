export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  profile: string;
  resumePdfUrl: string;
}

export interface EducationEntry {
  degree: string;
  duration: string;
  institution: string;
  grade: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export interface ProjectEntry {
  title: string;
  subtitle: string;
  githubUrl?: string;
  demoUrl?: string;
  bullets: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: {
    programmingLanguages: string[];
    webTechnologies: string[];
    frameworksLibraries: string[];
    tools: string[];
    databases: string[];
    concepts: string[];
    languages: string[];
  };
  education: EducationEntry[];
  experience: ExperienceEntry[];
  certifications: CertificationEntry[];
  projects: ProjectEntry[];
}

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Aaryan Mangukiya",
    title: "Software Developer",
    email: "aaryanmangukiya@gmail.com",
    phone: "(+91) 9714112411",
    github: "aaryan104",
    githubUrl: "https://github.com/aaryan104",
    linkedin: "aaryan-mangukiya",
    linkedinUrl: "https://www.linkedin.com/in/aaryan-mangukiya-367210370/",
    profile: "Aspiring Full-Stack Developer with internship experience in ASP.NET, SQL Server, and modern web technologies. Passionate about building scalable web applications and AI-powered solutions, with hands-on experience in REST APIs, database design, and full-stack development.",
    resumePdfUrl: "/Aaryan_Mangukiya_Resume_Updated.pdf"
  },
  skills: {
    programmingLanguages: ["Python", "Java", "C#", "C", "C++", "PHP"],
    webTechnologies: ["HTML", "JavaScript", "Bootstrap", "Tailwind CSS"],
    frameworksLibraries: ["ASP.NET Core", "ASP.NET MVC", "Web API", "Flask", "ReactJS", "Pandas", "NumPy"],
    tools: ["Git", "GitHub", "Postman"],
    databases: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
    concepts: ["OOP", "Data Structures & Algorithms", "DBMS", "REST APIs", "CRUD Operations", "SDLC"],
    languages: ["English", "Gujarati", "Hindi"]
  },
  education: [
    {
      degree: "Master of Science - Information Technology",
      duration: "July 2025 - Pursuing",
      institution: "Smt. Chandaben Mohanbhai Patel Institute - Charusat University | Changa, Anand, Gujarat",
      grade: "CGPA: 7.82"
    },
    {
      degree: "Bachelor of Science - Information Technology",
      duration: "July 2022 - May 2025",
      institution: "Shree Ramkrishna Institute - Sarvajanik University | Surat, Gujarat",
      grade: "CGPA: 9.09"
    },
    {
      degree: "Higher Secondary (General Stream)",
      duration: "June 2020 - April 2022",
      institution: "Ankur Vidhyabhavan | Surat, Gujarat",
      grade: "Per: 74.67%"
    }
  ],
  experience: [
    {
      role: "Intern - Dotnet Developer",
      organization: "Toshal Infotech Pvt. Ltd.",
      duration: "November 2024 - May 2025",
      bullets: [
        "Built a full-stack Online Food Ordering System supporting 3 user roles with 15+ core features, including menu management, order tracking, and delivery management.",
        "Designed role-based authentication supporting 3 user roles (Admin, Customer, Delivery Agent).",
        "Implemented 20+ CRUD operations using SQL Server for menu, orders, users, and delivery management.",
        "Collaborated with a 3-member development team using Git, debugging, and feature implementation."
      ]
    }
  ],
  certifications: [
    {
      title: "C, C++ Programming",
      issuer: "Indian Institute of Computer Learning (IICL)",
      date: "December 2022"
    },
    {
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      date: "November 2025",
      verifyUrl: "https://www.credly.com"
    },
    {
      title: "Getting Started with Git and GitHub",
      issuer: "IBM",
      date: "November 2025",
      verifyUrl: "https://www.credly.com"
    },
    {
      title: "Prompt Engineering for ChatGPT",
      issuer: "Vanderbilt University",
      date: "November 2025",
      verifyUrl: "https://coursera.org"
    },
    {
      title: "Introduction to JavaScript",
      issuer: "Coursera",
      date: "December 2025",
      verifyUrl: "https://coursera.org"
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "February 2026",
      verifyUrl: "https://www.credly.com"
    },
    {
      title: "MongoDB: The Complete Guide to NoSQL Database Development",
      issuer: "EDUCBA",
      date: "March 2026",
      verifyUrl: "https://www.educba.com"
    },
    {
      title: "Ignite Bootcamp - Idea to Plan",
      issuer: "Wadhwani Foundation",
      date: "April 2026"
    },
    {
      title: "IIT Roorkee – IDE (Innovation, Design & Entrepreneurship) Bootcamp Participation",
      issuer: "IDE Bootcamp",
      date: "April 2026"
    },
    {
      title: "ISRO – Space Science and Technology Awareness Training (START)",
      issuer: "ISRO",
      date: "2024"
    }
  ],
  projects: [
    {
      title: "PlacementAI – AI-Powered Placement Preparation Platform",
      subtitle: "React, Python, REST API, FastAPI, Tailwind CSS, MongoDB, Git",
      githubUrl: "https://github.com/happy8924/PlacementAI",
      bullets: [
        "Developing an AI-powered placement preparation platform to help students prepare for technical interviews through resume analysis, personalized learning roadmaps, and recruiter-driven practice modules.",
        "A functional prototype has been completed, with AI integration currently in progress."
      ]
    },
    {
      title: "RoadRESQ – Emergency Roadside Assistance Platform",
      subtitle: "Flutter, Dart, Firebase, Go Router, Git",
      githubUrl: "https://github.com/nilkanth-910/RoadRESQ",
      bullets: [
        "Built a cross-platform roadside assistance application connecting stranded vehicle owners with nearby mechanics.",
        "Implemented role-based workflows for customers and mechanics, emergency request handling, service tracking, and responsive mobile interfaces."
      ]
    },
    {
      title: "GreenCoin – Gamified Tree Plantation & Carbon Credit Tracker",
      subtitle: "PHP, MySQL, JavaScript, HTML, CSS, Bootstrap, Google Maps API",
      githubUrl: "https://github.com/aaryan104/GreenCoins",
      bullets: [
        "Built a web platform that encourages tree plantation through gamification by tracking plantations, estimating carbon credits, QR-based verification, leaderboards, and reward mechanisms.",
        "Integrated map visualization and secure backend operations for real-time plantation management."
      ]
    },
    {
      title: "Ladli | Luxury Indian Ethnic Fashion",
      subtitle: "React, Node.js, Express.js, MongoDB, JWT, Tailwind CSS",
      githubUrl: "https://github.com/aaryan104/Ladli-boutique",
      demoUrl: "https://ladli-boutique.vercel.app/",
      bullets: [
        "Women's Fashion E-Commerce Platform: Offers an elegant shopping experience featuring product discovery, search & filters, and checkout flow.",
        "Built product catalog, cart, wishlist, coupon system, order tracking, and admin dashboards for inventory management."
      ]
    },
    {
      title: "Online Food Ordering System",
      subtitle: "ASP.NET Web Forms, C#, SQL Server, Tailwind CSS",
      githubUrl: "https://github.com/aaryan104/OnlineFoodOrderingSystem",
      bullets: [
        "Developed a full-stack food ordering web application with role-based access for Admin, Customers, and Delivery Agents.",
        "Implemented food item management, order placement, delivery tracking, and order status update functionalities.",
        "Designed a responsive and modern user interface using Tailwind CSS and integrated secure SQL Server database operations."
      ]
    },
    {
      title: "Cloud-Based Image Processing System",
      subtitle: "ReactJS, JavaScript, Cloudinary, HTML, CSS",
      githubUrl: "https://github.com/aaryan104/CloudinaryImageUpload",
      bullets: [
        "Developed a cloud-based image processing web application supporting image upload, resizing, cropping, and filter functionalities.",
        "Built responsive user interfaces using ReactJS and JavaScript for real-time image preview and interaction."
      ]
    },
    {
      title: "CricketInfo",
      subtitle: "ASP.NET Core, C#, SQL Server, Bootstrap",
      githubUrl: "https://github.com/aaryan104/scoreCard",
      bullets: [
        "Cricket Tournament Management System: Centralizes tournament fixtures, player profiles, schedules, scoreboards, and statistics.",
        "Automated points table calculations, match fixtures generation, live score entry, and statistical report logging."
      ]
    }
  ]
};

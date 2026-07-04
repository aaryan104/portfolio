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
    linkedinUrl: "https://linkedin.com/in/aaryan-mangukiya",
    profile: "Passionate Software Developer with hands-on experience in developing frontend and backend web applications using Python, ASP.NET, JavaScript, and SQL databases. Strong understanding of OOP, REST APIs, Data Structures, and modern web technologies. Skilled in developing scalable applications, working with Git/GitHub, and solving real-world problems through software development projects. Seeking an opportunity to contribute, learn, and grow as a Software Development Engineer Intern.",
    resumePdfUrl: "https://res.cloudinary.com/demo/image/upload/sample.pdf"
  },
  skills: {
    programmingLanguages: ["Python", "JavaScript", "C#", "C", "C++"],
    webTechnologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
    frameworksLibraries: ["ASP.NET Core", "ASP.NET MVC", "Web API", "Flask", "ReactJS", "Pandas", "NumPy"],
    tools: ["Git", "GitHub", "Postman"],
    databases: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
    concepts: ["OOP", "Data Structures & Algorithms", "DBMS", "REST APIs", "CRUD Operations"],
    languages: ["English", "Gujarati", "Hindi"]
  },
  education: [
    {
      degree: "B.Sc. Information Technology",
      duration: "July 2022 - May 2025",
      institution: "SRKI- Shri RamKrishna Institute, Sarvajanik University",
      grade: "CGPA – 9.20"
    },
    {
      degree: "M.Sc. Information Technology",
      duration: "July 2025 - Pursuing",
      institution: "CMPICA, Charusat University",
      grade: "CGPA – 7.92"
    }
  ],
  experience: [
    {
      role: "Intern – Dotnet Developer",
      organization: "Toshal Infotech Pvt. Ltd.",
      duration: "November 2024 - May 2025",
      bullets: [
        "Worked on ASP.NET-based web applications and backend development.",
        "Developed CRUD modules, database integrations, and REST API functionalities.",
        "Collaborated on real-world project development using SQL Server and Git.",
        "Improved debugging, problem-solving, and software development workflow skills."
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
    }
  ],
  projects: [
    {
      title: "Online Food Ordering System",
      subtitle: "ASP.NET Web Forms, C#, SQL Server, Tailwind CSS",
      githubUrl: "https://github.com/aaryan104",
      bullets: [
        "Developed a full-stack food ordering web application with role-based access for Admin, Customers, and Delivery Agents.",
        "Implemented food item management, order placement, delivery tracking, and order status update functionalities.",
        "Designed a responsive and modern user interface using Tailwind CSS and integrated secure SQL Server database operations.",
        "Built REST API-based modules and optimized backend workflows for efficient order processing."
      ]
    },
    {
      title: "GreenCoin – Gamified Tree-Planting & Carbon Credit Tracker",
      subtitle: "PHP, MySQL, JavaScript, Google Maps API",
      githubUrl: "https://github.com/aaryan104",
      bullets: [
        "Developed an environmental web platform to track tree plantations and estimate carbon credit contributions.",
        "Implemented QR-based plantation verification system and interactive map visualization using Google Maps API.",
        "Designed leaderboard and reward system using GreenCoins to encourage user participation and engagement.",
        "Integrated real-time data management and secure backend operations using PHP and MySQL."
      ]
    },
    {
      title: "Cloud-Based Image Processing System",
      subtitle: "ReactJS, JavaScript, Cloudinary, HTML, CSS",
      githubUrl: "https://github.com/aaryan104",
      bullets: [
        "Developed a cloud-based image processing web application supporting image upload, resizing, cropping, and filter functionalities.",
        "Built responsive user interfaces using ReactJS and JavaScript for real-time image preview and interaction.",
        "Integrated Cloudinary services for cloud image storage and image processing operations.",
        "Improved user experience with dynamic rendering and optimized frontend performance."
      ]
    },
    {
      title: "RoadRESQ – Emergency Roadside Assistance Platform",
      subtitle: "IDE Bootcamp Project | Flutter & Dart Based Real-Time Assistance Application",
      githubUrl: "https://github.com/aaryan104",
      bullets: [
        "Developed a cross-platform roadside assistance application connecting stranded vehicle owners with nearby mechanics in real time using Flutter and Dart.",
        "Designed separate role-based workflows for customers and mechanics, including emergency request handling, job acceptance, live tracking, and earnings dashboard.",
        "Implemented modular Flutter architecture with reusable widgets, declarative routing using go_router, and responsive mobile UI design.",
        "Built interactive features such as service history tracking, mechanic performance dashboard, customer feedback system, and profile management.",
        "Enhanced user experience with smooth animations, shimmer loading effects, and optimized mobile-first UI components.",
        "Structured the application using scalable folder organization and maintainable code practices suitable for production-level development.",
        "Presented the project at the IDE Bootcamp as a real-world solution for emergency roadside support and local mechanic connectivity."
      ]
    }
  ]
};

const PROJECTS = [
  {
    title: "Vehicle Maintenance Tracker",
    description:
      "Java console application to track vehicle service history, fuel expenses, and renewal reminders for bikes and cars. Built using object‑oriented design with classes for users, vehicles, and service records, applying exception handling and collections (ArrayList/Map) to manage data and generate maintenance summaries in the terminal.",
    tech: ["Java", "MySQL"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLr90-t1job3xWKY37BjXuTWQhrHIzA6zg5QAPXxATw&s",   // put this image inside images/ folder
    link: "https://github.com/nandakishor200324-lab/vehicle-maintenance-tracker"
  },
  {
    title: "NETFLIX-CLONE",
    description:
      "Netflix‑style streaming UI built with React and Vite, powered by TMDB. Features hero banner, category carousels, Top‑10 row, search, and a detail modal with real movie data, showcasing API integration, state management, and polished responsive design.",
    tech: ["React", "Vite", "JavaScript", "Axios", "TMDB REST API", "HTML5", "CSS3", "Git/GitHub"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGdIZ1MFia4tH6wMk4O5TKgtPlGHxflb6fw&s",
    link: "https://github.com/nandakishor200324-lab/NETFLIX-CLONE"
  },
  {
    title: "Personal Developer Portfolio",
    description:
      "Single-page responsive portfolio website with smooth scrolling, animations and dynamic content using JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqU4OCEob9HZo5WTSFpQQp4ichUadQ9DS1gu59ei5uq0hEoQzcdKNTPf4&s",
    link: "https://github.com/YOUR_USERNAME/portfolio-website"
  }
];
const SKILLS = [
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },

  { name: "HTML", category: "Web" },
  { name: "CSS", category: "Web" },
  { name: "JSP", category: "Web" },
  { name: "Servlets", category: "Web" },

  { name: "JDBC", category: "Backend & DB" },
  { name: "MySQL", category: "Backend & DB" },

  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Eclipse", category: "Tools" }
];

const EXPERIENCE = [
  {
    type: "education",
    title: "B.Tech in Electronics & Communication Engineering",
    organization: "Annamacharya Institute of Technology and Sciences",
    location: "Rajampet, India",
    period: "2021 – 2025",
    details: [
      "Developed a real-time wireless video streaming system using multi-core CPU/GPU parallel processing.",
    "Implemented adaptive encoding/decoding techniques to maintain video quality under changing wireless network conditions.",
    "Integrated error-resilience and recovery mechanisms to reduce frame loss and improve reliability.",
    "Optimized the transmission pipeline to minimize latency and enhance streaming performance."
    ]
  },
  {
    type: "project",
    title: "Vehicle Maintenance Tracker (Java, JSP, MySQL)",
    organization: "Personal Project",
    location: "Bengaluru, India",
    period: "2025",
    details: [
      "Developed CRUD features for vehicles, services, fuel logs and reminders using JSP/Servlets and JDBC.",
      "Designed MySQL schema for users, vehicles and service history."
    ]
  },
  {
    type: "project",
    title: "Netflix‑Style Movie App (React + TMDB)",
    organization: "Personal Project",
    location: "Bengaluru, India",
    period: "2025",
    details: [
      "Implemented responsive streaming UI with hero banner, rows and search powered by TMDB API.",
      "Used Git/GitHub for version control and deployment."
    ]
  },
  {
    type: "project",
    title: "Personal Developer Portfolio (HTML/CSS/JS)",
    organization: "Personal Project",
    location: "Bengaluru, India",
    period: "2025",
    details: [
      "Created a single‑page responsive portfolio with smooth scrolling and animations.",
      "Rendered projects, skills and contact info dynamically using JavaScript."
    ]
  }
];

const CONTACT = {
  email: "nandakishor200324@gmail.com",
  phone: 8639176121, // or "+91-XXXXXXXXXX" if you want to show phone
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/nanda24/",
  github: "https://github.com/nandakishor200324-lab",
  otherLinks: [
    // optional: "https://leetcode.com/your-id",
    // optional: "https://www.hackerrank.com/your-id"
  ]
};




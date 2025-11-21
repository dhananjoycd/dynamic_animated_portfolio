/* eslint-disable no-useless-escape */
import { Code, Database, Globe, Zap, Users } from "lucide-react";

export const SKILL_CATEGORIES = [
  { id: "all", name: "All Skills", icon: Zap },
  { id: "frontend", name: "Frontend", icon: Globe },
  { id: "backend", name: "Backend", icon: Database },
  { id: "tools", name: "Tools & DevOps", icon: Code },
  { id: "soft", name: "Soft Skills", icon: Users },
];

export const SKILLS_DATA = [
  // Frontend
  { name: "React.js", category: "frontend", level: 90, color: "primary" },
  { name: "Tailwind CSS", category: "frontend", level: 95, color: "primary" },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: 85,
    color: "primary",
  },
  { name: "HTML5 & CSS3", category: "frontend", level: 95, color: "primary" },
  { name: "Framer Motion", category: "frontend", level: 80, color: "primary" },

  // Backend
  { name: "Node.js", category: "backend", level: 85, color: "secondary" },
  { name: "Express.js", category: "backend", level: 80, color: "secondary" },
  { name: "MongoDB", category: "backend", level: 80, color: "secondary" },
  { name: "REST APIs", category: "backend", level: 90, color: "secondary" },

  // Tools & DevOps
  { name: "Git & GitHub", category: "tools", level: 95, color: "teal" },
  { name: "VS Code", category: "tools", level: 95, color: "teal" },
  { name: "Vercel/Netlify", category: "tools", level: 85, color: "teal" },

  // Soft Skills
  { name: "Problem Solving", category: "soft", level: 95, color: "blue" },
  { name: "Team Collaboration", category: "soft", level: 90, color: "blue" },
  { name: "Research & Analysis", category: "soft", level: 85, color: "blue" },
];

// ... আগের ডেটার নিচে এটি যোগ করুন

export const PROJECTS_DATA = [
  {
    title: "E-commerce MERN Stack App",
    description:
      "A full-stack e-commerce platform featuring secure payments, user authentication, and admin product management.",
    tags: ["MERN Stack", "Stripe", "Redux", "Tailwind"],
    imageUrl: "/assets/6238206.jpg", // আপনার ছবি পাথ
    liveUrl: "https://live-ecommerce-demo.com",
    githubUrl: "https://github.com/dhananjoy/ecommerce-mern",
  },
  {
    title: "Climate Data Visualization Tool",
    description:
      "A research project visualizing long-term climate data using D3.js, React, and a Python backend for data processing.",
    tags: ["React", "D3.js", "Python", "Data Viz"],
    imageUrl: "/assets/Business-Facebook-Cover-Banner-03.jpg",
    liveUrl: "https://live-climate-tool.com",
    githubUrl: "https://github.com/dhananjoy/climate-viz-tool",
  },
  {
    title: "Portfolio Website V1",
    description:
      "The first version of my portfolio, showcasing a clean, minimalist design with smooth scroll animations.",
    tags: ["React", "Gatsby", "Styled Components"],
    imageUrl: "/assets/1201.jpg",
    liveUrl: "https://old-portfolio-v1.com",
    githubUrl: "https://github.com/dhananjoy/portfolio-v1",
  },
  // আরও প্রজেক্ট ডেটা যোগ করুন...
];

// ... আগের ডেটার নিচে এটি যোগ করুন

export const EXPERIENCE_DATA = [
  {
    title: "Junior MERN Stack Developer (Internship)",
    company: "Innovatech Solutions",
    date: "Jul 2024 - Present",
    description:
      "Contributed to developing scalable REST APIs with Node.js/Express and building reusable UI components in React.",
    icon: "Code", // Lucide-react থেকে Code icon
  },
  {
    title: "Web Development Freelancer",
    company: "Self-Employed",
    date: "Jan 2024 - Jun 2024",
    description:
      "Delivered 5+ client projects, focusing on responsive design and performance optimization using Tailwind CSS.",
    icon: "Zap", // Lucide-react থেকে Zap icon
  },
];

export const EDUCATION_DATA = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    date: "2019 - 2023",
    description:
      "Graduated with a focus on Software Engineering, Database Management, and Advanced Algorithms.",
    icon: "GraduationCap", // Lucide-react থেকে GraduationCap icon
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Rajshahi College",
    date: "2017 - 2019",
    description:
      "Major in Science group. Secured top marks in Mathematics and Physics.",
    icon: "BookOpen", // Lucide-react থেকে BookOpen icon
  },
];
// ... আগের ডেটার নিচে এটি যোগ করুন

export const RESEARCH_DATA = [
  {
    title: "Predictive Climate Modeling using RNNs",
    category: "Machine Learning",
    summary:
      "Developed a Recurrent Neural Network (RNN) model to forecast short-term weather patterns with high accuracy using time-series analysis.",
    equation:
      "$$L(y, hat{y}) = \\frac{1}{N} \\sum_{i=1}^N (y_i - hat{y}_i)^2$$", // Mean Squared Error (MSE) loss function
    modelDiagram: "/assets/images/rnn_architecture.png", // [Image of Recurrent Neural Network Architecture]

    downloadLink: "/assets/documents/rnn_climate_paper.pdf",
  },
  {
    title: "Optimizing Database Queries with Indexing Theory",
    category: "Database/CS Theory",
    summary:
      "Analyzed and optimized complex SQL queries using advanced database indexing strategies (B-Trees) to reduce latency by 40%.",
    equation: "$$O(\\log_b n)$$", // B-Tree search complexity
    modelDiagram: "/assets/images/b_tree_diagram.png", // [Image of B-Tree Data Structure]

    downloadLink: "/assets/documents/indexing_optimization.pdf",
  },
  // আরও গবেষণা ডেটা যোগ করুন...
];

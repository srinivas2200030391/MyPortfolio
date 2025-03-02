import { FaGithub, FaLinkedin, FaInstagram, FaPython } from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiSpring } from "react-icons/si";
import { FaAws, FaJava, FaJs, FaNodeJs } from "react-icons/fa";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Srinivas Kommirisetty",
  greet: "Hello there! 👋",
  description:
    "I’m a Full Stack Developer skilled in React, Next.js, and Spring Boot, with a passion for building scalable and efficient web applications. I love solving complex problems, optimizing performance, and creating seamless digital experiences.",
};



export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A sleek and responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and achievements.",
    image: projectImage1,
    githubLink: "https://github.com/srinivas2200030391/MyPortfolio",
  },
  {
    id: 2,
    name: "Code Theatre",
    description:
      "An advanced online code editor integrated with AI (Gemini) and Convex DB, allowing users to write, edit, and run code in real-time with authentication powered by Clerk.",
    image: projectImage2,
    githubLink: "https://github.com/srinivas2200030391/Code-Theatre",
  },
  {
    id: 3,
    name: "QuizCraft (Kahoot Clone)",
    description:
      "A real-time quiz platform built with the MERN stack, enabling users to create, share, and participate in quizzes with enhanced performance using Node.js caching.",
    image: projectImage3,
    githubLink: "https://github.com/srinivas2200030391/SoccKahootClone",
  },
  {
    id: 4,
    name: "Banking & Finance Management System",
    description:
      "A secure and efficient banking solution utilizing MongoDB for data storage, reducing latency by 90%. Features include transaction management, user authentication, and analytics.",
    image: projectImage4,
    githubLink:
      "https://github.com/srinivas2200030391/Banking-Finance-Management-System",
  },
  {
    id: 5,
    name: "Online Voting System",
    description:
      "A secure and privacy-focused voting platform built with Django and PostgreSQL, ensuring integrity and anonymity in online elections.",
    image: projectImage5,
    githubLink:
      "https://github.com/srinivas2200030391/Online-Voting-System-Using-Django-SDP1",
  },
  {
    id: 6,
    name: "Online Art Gallery",
    description:
      "A microservices-based art gallery platform developed using Spring Boot, allowing artists to showcase, sell artwork, and curators to manage collections seamlessly.",
    image: projectImage6,
    githubLink: "https://github.com/srinivas2200030391/OnlineArtGallery-JFSD",
  },
  {
    id: 7,
    name: "Visa Approval Prediction",
    description:
      "A machine learning model that predicts visa approval based on applicant details, analyzing historical data for better decision-making.",
    image: projectImage1,
    githubLink:
      "https://github.com/srinivas2200030391/Visa-Approval-Prediction-Machine-Learning",
  },
  {
    id: 8,
    name: "DSA Visualizer",
    description:
      "A Next.js-based tool that visually demonstrates sorting and searching algorithms, helping users understand DSA concepts interactively.",
    image: projectImage2,
    githubLink: "https://github.com/srinivas2200030391/Dsa-Project",
  },
  {
    id: 9,
    name: "Shortify",
    description:
      "A minimalistic and efficient URL shortener that allows users to create short links and track usage statistics.",
    image: projectImage3,
    githubLink: "https://github.com/srinivas2200030391/Shortify",
  },
  {
    id: 10,
    name: "DSA Complexity Analyzer",
    description:
      "A tool designed to analyze the time complexity of code, helping developers understand performance implications and optimize algorithms.",
    image: projectImage4,
    githubLink:
      "https://github.com/srinivas2200030391/DSA-Time-Complexity-Analyzer",
  },
];


export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Red Hat Certified Enterprise Developer",
    description: "EX-183 Certification",
    image: projectImage1,
    certificationLink:
      "https://www.credly.com/badges/61c2c1e1-c8d0-402c-8d80-2382b5c2a812/public_url",
  },
  {
    id: 2,
    name: "AWS Certified Cloud Practitioner",
    description: "AWS CP Certification",
    image: projectImage2,
    certificationLink:
      "https://www.credly.com/badges/30db5aae-1858-453b-a5eb-5e762b3fbc92/public_url",
  },
  {
    id: 3,
    name: "PCAP Certified Python Developer",
    description: "PCAP 31-03x Certification",
    image: projectImage3,
    certificationLink: "",
  },
];

export const BIO = [
  "I'm Srinivas Kommirisetty, a Computer Science student at KL University with a CGPA of 9.73/10. Passionate about technology, I specialize in building scalable, high-performance web applications.",
  "I’ve developed projects like 'Banking & Finance Management System' and 'AI Resume Maker,' leveraging React, Django, and Spring Boot to create efficient and user-friendly solutions.",
  "As a competitive coder, I thrive on solving complex problems, organizing coding events, and mentoring others. My expertise spans MongoDB, PostgreSQL, AWS Cloud, and system optimization, reflecting my commitment to innovation and excellence.",
];


export const SKILLS = [
  {
    icon: <FaPython className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Python",
    experience: "2+ years",
  },
  {
    icon: <FaJava className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Java",
    experience: "2+ years",
  },
  {
    icon: <FaJs className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <BiLogoDjango className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Django",
    experience: "1.5+ years",
  },
  {
    icon: <SiSpring className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Spring & Spring Boot",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1.5+ years",
  },
  {
    icon: <FaAws className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "AWS",
    experience: "1+ years",
  },
];


export const EXPERIENCES = [
  {
    title: "Competitive Coder",
    company: "School of Competitive Coding (SOCC)",
    duration: "Aug 2023 - Present",
    description:
      "Solved 50+ coding challenges in 6 months, improving problem-solving speed by 30%. Led a recursion workshop for 150+ participants, enhancing their algorithmic skills by 35%. Organized 8 coding events, increasing member engagement by 40% and boosting quiz scores by 25%.",
  },
  {
    title: "Academic & Skill Development Lead",
    company: "KL Focus",
    duration: "Aug 2023 - Present",
    description:
      "Led technical events, increasing student participation by 40%. Conducted skill development sessions that raised students' average test scores from 65% to 88%. Created detailed course handouts for Y24 students, aiding their academic growth.",
  },
  {
    title: "Full Stack Developer",
    company: "Independent Projects",
    duration: "2023 - Present",
    description:
      "Developed applications like 'Banking & Finance Management System' and 'AI Resume Maker,' leveraging React, Django, and Spring Boot. Focused on performance optimization, security, and user-friendly design to address real-world challenges.",
  },
  {
    title: "Event Organizer",
    company: "School of Competitive Coding (SOCC)",
    duration: "2024 - Present",
    description:
      "Managed and coordinated technical and coding events, fostering collaboration and enhancing problem-solving skills among participants. Designed workshops that introduced advanced coding techniques in a hands-on learning environment.",
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KL University",
    duration: "Expected 2026",
    description:
      "Achieved a stellar CGPA of 9.73/10. Pursued academic coursework focused on Data Structures, Algorithms, and Full Stack Development. Actively involved in technical events and project development, showcasing skills in frameworks like React, Django, and Spring Boot. Participated in hackathons and workshops, honing problem-solving abilities and collaborating with peers on innovative solutions.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Jr. College",
    duration: "June 2020 - April 2022",
    description:
      "Graduated with a remarkable score of 97.1%. Focused on foundational concepts in Mathematics, Physics, and Chemistry while developing problem-solving and analytical skills. Engaged in various extracurricular activities and leadership roles, fostering teamwork and communication.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/srinivaskommirisetty_13/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/srinivas2200030391",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "www.linkedin.com/in/kommirisettysrinivas",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

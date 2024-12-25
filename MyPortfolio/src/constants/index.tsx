import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Srinivas Kommirisetty",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full stack developer skilled in React, Next JS and Spring Boot, focused on building engaging and efficient web applications. I love turning ideas into impactful digital experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/srinivas2200030391/MyPortfolio",
  },
  {
    id: 2,
    name: "Code Theatre",
    description:
      "An online code editor supporting various programming languages, enabling users to write, edit, and run code in real-time. Built with a focus on collaboration and an intuitive user interface.",
    image: projectImage2,
    githubLink:
      "https://github.com/srinivas2200030391/Code-Theatre",
  },

  {
    id: 3,
    name: "SoccKahootClone",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/srinivas2200030391/SoccKahootClone",
  },
  {
    id: 4,
    name: "Banking-Finance-Management-System",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink:
      "https://github.com/srinivas2200030391/Banking-Finance-Management-System",
  },
  {
    id: 5,
    name: "Online Voting System Using Django",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink:
      "https://github.com/srinivas2200030391/Online-Voting-System-Using-Django-SDP1",
  },
  {
    id: 6,
    name: "Online Art Gallery",
    description:
      "A user-friendly online art gallery enabling artists to showcase and sell their art, curators to manage collections, and visitors to explore and purchase artwork. Developed using Spring Boot and Microservices for agility and resilience, ensuring seamless functionality even if individual services face interruptions.",
    image: projectImage6,
    githubLink: "https://github.com/srinivas2200030391/OnlineArtGallery-JFSD",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Red Hat Certified Enterprise Developer",
    description:
      "EX-183 Certification",
    image: projectImage1,
    certificationLink: "https://www.credly.com/badges/61c2c1e1-c8d0-402c-8d80-2382b5c2a812/public_url",
  },
  {
    id: 2,
    name: "AWS Certified Cloud Practitioner",
    description:
      "AWS CP Certification",
    image: projectImage2,
    certificationLink: "",
  },
  {
    id: 3,
    name: "PCAP Certified Python Developer",
    description:
      "PCAP 31-03x Certification",
    image: projectImage3,
    certificationLink: "",
  },

];

export const BIO = [
  "I am Srinivas Kommirisetty, a computer science student at KL University with a CGPA of 9.69/10. I am passionate about using technology to create innovative and impactful web applications.",
  "I have worked on projects like the 'Banking & Finance Management System' and 'AI Resume Maker,' where I utilized frameworks such as React, Django, and Spring Boot to deliver high-performance and user-friendly solutions.",
  "As an active competitive coder, I enjoy organizing coding events and workshops while constantly improving my problem-solving and algorithmic skills. My expertise extends to technologies like MongoDB, PostgreSQL, and AWS Cloud, showcasing my adaptability and commitment to excellence."
];


export const SKILLS = [
  {
    icon: <FaPython className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "Python",
    experience: "1.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <BiLogoDjango className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Django",
    experience: "1+ year",
  },
  {
    icon: <SiSpring className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Spring & Spring Boot",
    experience: "0.5+ year",
  },

  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "0.5+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "0.5+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "0.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "0.5+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Competitive Coder",
    company: "School of Competitive Coding",
    duration: "August 2023 - Present",
    description:
      "I completed 50 coding challenges in 6 months, enhancing problem-solving speed by 30%. I also led a recursion workshop for over 150 participants, improving their algorithmic implementation skills by 35%. Additionally, I organized 8 coding events, increasing member attendance by 40% and boosting algorithm quiz scores by 25%.",
  },
  {
    title: "Academic & Skill Development Lead",
    company: "KL Focus",
    duration: "August 2023 - Present",
    description:
      "I organized and led technical events, achieving a 40% increase in student participation compared to the previous year. I conducted skill development sessions, resulting in an improvement in students’ average test scores from 65% to 88%. I also prepared detailed course handouts for Y24 students, aiding their academic performance.",
  },
  {
    title: "Project Developer",
    company: "Independent Projects",
    duration: "2023 - Present",
    description:
      "I developed projects such as the 'Banking & Finance Management System' and 'AI Resume Maker,' utilizing frameworks like React, Django, and Spring Boot. These projects emphasized performance, security, and user-friendly design, addressing real-world challenges with innovative solutions.",
  },
  {
    title: "Event Organizer",
    company: "SOCC Club",
    duration: "2024 - Present",
    description:
      "I contributed to organizing and managing several technical and coding events under the SOCC Club banner. These events focused on advanced problem-solving techniques, fostering collaboration among participants and enhancing their skills in competitive coding.",
  }
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KL University",
    duration: "Expected 2026",
    description:
      "Achieved a stellar CGPA of 9.69/10. Pursued academic coursework focused on Data Structures, Algorithms, and Full Stack Development. Actively involved in technical events and project development, showcasing skills in frameworks like React, Django, and Spring Boot. Participated in hackathons and workshops, honing problem-solving abilities and collaborating with peers on innovative solutions.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Chaitanya Jr. College",
    duration: "June 2020 - April 2022",
    description:
      "Graduated with a remarkable score of 97.1%. Focused on foundational concepts in Mathematics, Physics, and Chemistry while developing problem-solving and analytical skills. Engaged in various extracurricular activities and leadership roles, fostering teamwork and communication.",
  },
  {
    degree: "Secondary School (SSC)",
    institution: "XYZ High School",
    duration: "June 2018 - March 2020",
    description:
      "Graduated with distinction, scoring 95% in the board exams. Developed strong foundational knowledge in subjects like Mathematics, Science, and English. Participated in various inter-school competitions, demonstrating leadership and organizational skills.",
  }
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

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import orthogaitImg from "@/public/orthogait.png";
import rmtdevImg from "@/public/rmtdev.png";
import eyeWantToRestImg from "@/public/eye-want-to-rest.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import golunchImg from '@/public/golunch.png';
import tremorguardImg from '@/public/tremorguard.png';
import timezonifyImg from '@/public/timezonify.png';
import wallGameImg from '@/public/wall-game.png';
import lbtmImg from '@/public/lbtm.png';
import kampungconnectImg from '@/public/kampungconnect.png';
import babeljamImg from '@/public/babeljam.png'

import { Experience, Project } from "./types";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData: Experience[] = [
  {
    title: "Software Engineer",
    location: "SGTraDex, Singapore",
    description: [
      `Implemented the user interface for a RAG-based chatbot with real-time text streaming, while enhancing reliability through custom evaluation metrics leveraging LLamaIndex and vector database technology`,
      `Identified solutions capable of returning deterministically-generated wallet addresses across different API keys for TradeTrust, an open-source blockchain verification service for logistics, by evaluating Web3 authentication services, including Magic.`,
      
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Jan 2024",
    skills: ["React", "LlamaIndex", "web3"],
  },
  {
    title: "Freelance Software Developer",
    location: "ShareLah SG, Singapore",
    description: [
      `Prevented ShareLah termination on App and Play stores by upgrading a 90k LoC legacy codebase to support minimum required versions, additionally achieving a 433\% boost in user conversion, by integrating single sign-on authentication and Apple/Google Pay within a month`,
      `Maintained a 99.9\% server uptime by managing application deployment and maintenance with AWS EC2 and S3.`,
      
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Jan 2024",
    skills: ["React Native", "Expo", "NestJS", "TypeScript", "Tailwind", "MongoDB", "AWS"],
  },
  {
    title: "Backend Developer Intern",
    location: "Computing for Voluntary Welfare Organisations, Singapore",
    description: [
      `Migrated a monolithic backend service with over 150,000 lines of code from Ruby on Rails to Golang, achieving a 5x performance boost and substantial enhancement in system maintainability`,
      `Eliminated the need for 17 different hard-coded forms in the codebase by conceptualising and developing a dynamic and extensible form schema`
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug 2023",
    skills: ["Golang", "Ruby on Rails", "React"]
  },
  {
    title: "full-Stack Developer",
    location: "Transliner, Singapore",
    description: [
      `Migrated a legacy enterprise resource planning (ERP) system from ASP.NET WebForms to ASP.NET Core, improving server performance by 600\%`,
      `Enabled clients to track shipments in real-time by transforming a pre-existing Wix site into a responsive client-facing website in Angular`,
      // `Championed development of a mobile version of the company's ERP system with React Native`,
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2020 - Aug 2020",
    skills: ["ASP.NET Core", "ASP.NET WebForms", "Angular", "React Native"]
  },
  {
    title: "Backend Developer Intern",
    location: "Centre for Strategic Infocomm Technologies, Singapore",
    description: [
      "Facilitated customisable survey creation by structuring the backend to read and write dynamic data for a drag-and-drop e-form builder in Spring Boot and MongoDB",
      `Developed a contextual feedback module to enhance internal data collection and analytics capabilities`
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2019 - Feb 2020",
    skills: ["Spring Boot", "Vue.js"]
  },
];

export const projectsData: Project[] = [
  {
    title: "KampungConnect",
    description:
      "Developed a robust volunteer management system for Groundup Initiative, featuring a customised authentication system for secure access, automated onboarding messages via Telegram, and comprehensive admin control over events and volunteer management. The system supports recurring events similar to Google Calendar, allowing volunteers to easily sign up for repeated engagements, enhancing both efficiency and user experience.",

    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "fly.io"],
    imageUrl: kampungconnectImg,
    link: "https://kampungconnect-staging.vercel.app/",
  },
  {
    title: "BabelJam",
    description:
      "Developed a multilingual video translation system for a hackathon, promoting accessibility across languages while retaining the original voice using a voice synthesizer. Key features include audio transcription, translation between languages, and voice cloning via ElevenLabs to match the original video's voice. The system also provides a web interface for manual adjustments to the transcription or translation.",

    tags: ["Next.js", "ElevenLabs", "OpenAI Whisper", "Google Translate", "wav2lipy"],
    imageUrl: babeljamImg,
    link: "https://devpost.com/software/babbel-jam",
  },
  {
    title: "E-Commerce Website",
    description:
      "I led the end-to-end development of an e-commerce site for an orthopaedics company with a focus on zero-cost maintenance and great user experience.",
    tags: ["React", "Next.js", "Stripe", "Commerce.js", "EzParcel"],
    imageUrl: orthogaitImg,
    link: "https://orthogait.com.sg",
  },
  {
    title: "Eye Want to Rest",
    description:
      "Initially a hackathon idea, I successfully developed and published this mobile application that aids individuals in maintaining optimal eye health.",
    tags: ["React Native", "Expo"],
    imageUrl: eyeWantToRestImg,
    link: "https://apps.apple.com/ca/app/eye-want-to-rest/id1619681661",
  },
  {
    title: "LooksBadToMe",
    description:
      `A web-based code-review game with a narrative of a young software engineering intern navigating the toxicity of the workplace environment by leveraging OpenAI to generate realistic responses.
      Submission for Hack&Roll 2024`,
    tags: ["Next.js", "tRPC", "OpenAI"],
    imageUrl: lbtmImg,
    link: "https://looksbadtome.vercel.app/",
  },
  {
    title: "GoLunch",
    description:
      "A web3-powered website that tracks distance travelled by users, which is stored as cryptocurrency to be exchanged for discounts at select restaurants.",
    tags: ["React", "Express.js", "MySQL", "Solidity", "web3.js", "ReduxJS"],
    imageUrl: golunchImg,
    link: "https://github.com/tankh99/golunch",
  },
  {
    title: "Wall Game",
    description:
      "A 3D web game built in 2 weeks to experiment with web-based 3D technologies.",
    tags: ["React", "Typescript", "three.js"],
    imageUrl: wallGameImg,
    link: "https://tankh99.github.io/react-threejs-wall-game",
  },
  {
    title: "TremorGuard",
    description:
      `A full-stack IoT solution to classify tremors in patients with Parkinson's disease, 
      including categorising their daily activities using AI and automatically generating their daily activity diaries.`,
    tags: ["Arduino", "PyTorch", "Azure IoTHub", "Next.js", "NestJS", "PostgreSQL"],
    imageUrl: tremorguardImg,
    link: "https://github.com/tankh99/tremorguard",
  },
  {
    title: "Timezonify",
    description:
      "A web extension that converts timezones for you automatically, developed for both Chrome and Firefox users.",
    tags: ["Javascript", "Web Extensions"],
    imageUrl: timezonifyImg,
    link: "https://github.com/tankh99/timezonify-extension",
  },
];

export const skillsData = [
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "NestJS",
  "Spring Boot",
  "ASP.NET",
  "Express",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "React Native",
  "Expo",
  "Go",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "Framer Motion",
];

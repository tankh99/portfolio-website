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
    title: "Freelance Software Developer",
    location: "ShareLah SG, Singapore",
    description: [
      `Took on a job of revitalising a legacy codebase with around 90,000 LoC and 1,500 pre-existing users`,
      `Within 1 month, I developed a completely new mobile application and server with a modern stack, deploying it on AWS and ensuring optimal user experience.`,
      
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
      `Conceptualised and developed a dynamic form schema in PostgreSQL, removing the need for 17 different hard-coded forms in the codebase`
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Aug 2023",
    skills: ["Golang", "Ruby on Rails", "React"]
  },
  {
    title: "full-Stack Developer",
    location: "Transliner, Singapore",
    description: [
      `Migrated a legacy enterprise resource planning (ERP) system from ASP.NET WebForms to ASP.NET Core, improving application performance by 600\%`,
      `Modernised an old Wix website using Angular to deliver a mobile-friendly and interactive web experience`,
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
      "Designed systems for a drag-and-drop e-form builder with Spring Boot and MongoDB, empowering companies to easily design highly-customisable surveys.",
      `Developed a contextual feedback module to enhance internal data collection and analytics capabilities`
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2019 - Feb 2020",
    skills: ["Spring Boot", "Vue.js"]
  },
];

export const projectsData: Project[] = [
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
      `A web-based code-review game with a narrative of a young SWE intern navigating the toxicity of the workplace environment by leveraging OpenAI to generate realistic responses.
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

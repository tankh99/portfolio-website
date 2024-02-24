import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { Experience } from "./types";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

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
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

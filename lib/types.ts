import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Experience = {
    title: string;
    // description: string;
    description: string[]; // List of points for experience
    location: string; // Includes company you worked for in format: COMPANY, CITY
    icon: JSX.Element;
    date: string;
    skills: string[]
}
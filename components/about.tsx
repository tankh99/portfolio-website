"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After completing a year of study in Creative Writing at Singapore Polytechnic, I came to the realization that my true passion lay elsewhere.
      Thus, I made the decision to shift my focus and pursue a course in <span className="font-bold">programming</span>, which ultimately led me to discover a genuine enthusiasm for addressing real-world challenges and making a direct and positive impact on others.

      real-world problem-solving and positively impacting others through programming. {" "}
      I am particularly drawn to the prospect of contributing to the healthtech industry, driven by a desire to bring about meaningful change for patients and caretakers alike.
      </p>
      <p className="mb-3">
        My core stack
        current looks like {" "}
        <span className="font-medium">
          React, Next.js, NestJS, PostgreSQL, React Native
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        apply the skills I learn into projects that directly impact people.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy swimming 🏊 and consuming content on productivity and philosophy 📚. 
        I also enjoy{" "}<span className="font-medium">learning new things</span> and volunteering, usually as a tutor for children from
        disadvantaed backgrounds or befriending the elderly.
      </p>
    </motion.section>
  );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { Badge } from "./ui/badge";
import Tag from "./tag";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={`${item.title}.${index}`}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="!text-lg font-semibold capitalize">{item.title}</h3>
              <p className="font-extralight !text-sm text-gray-400 !mt-0 pb-2">{item.location}</p>
              <div className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description.map((desc, index) => {
                  return (
                    // Indent each item in description
                    <div key={desc} className="flex items-start gap-x-2">
                      <p>-</p>
                      <p className="">{desc}
                      </p>
                    </div>
                  )
                })}
              </div>
              <br/>
              <div className="font-semibold pb-4">Skills</div>
              <div className="flex flex-wrap mt-4 gap-2 sm:mt-auto">{item.skills.map((skill) => {
                return (
                  <Tag tag={skill} key={skill}/>
                )
              })}</div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

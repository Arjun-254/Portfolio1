import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import DjsceLogo from "../assets/DJSCE_Logo.png"
import CmuLogo from "../assets/Cmu_Logo.jpg"

const educationData = [
  {
    date:"2025 - 2027",
    degree: 'Carnegie Mellon University – School of Computer Science',
    college: "Master of Science in Artificial Intelligence and Innovation (MSAII)",
    points: ['GPA 4.00/4.00'],
    icon: CmuLogo,
  },
  {
    date:"2021 - 2024",
    degree: 'University of Mumbai - Dwarkadas J. Sanghvi College of Engineering  ',
    college: "Bachelor of Technology in Computer Engineering & Honors in Intelligent Computing",
    points: ['GPA 9.38/10.0'],
    icon: DjsceLogo,
  },
];

export const Education = () => {
  return (
    <div>
      <VerticalTimeline layout="2-columns" animate={true}>
        {educationData.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            contentStyle={{
              background: "#1e1b4b",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: "#1e1b4b" }}
            icon={
              <img
                src={experience.icon}
                alt={experience.college}
                className="w-25 h-25 object-contain rounded-full"
              />
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {experience.degree}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {experience.college}
              </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, pointIndex) => (
                <li
                  key={`experience-point-${pointIndex}`}
                  className="text-white-100 text-[12px] md:text-lg pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

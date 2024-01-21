import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiStarSLine } from "react-icons/ri";
import HLogo from "../src/assets/HSEC_Logo.png";

const timelineData = [
  {
    date: "June 2023 - August 2023",
    title: "SDE Intern",
    company: "HDFC Securities",
    icon: HLogo,
    points: [
      "Developed ReactJS and Firebase-based webpages for HDFC Sky, optimizing the customer onboarding process via referrals. These pages efficiently managed over 2 million requests.",
      "Conducted real-time app review analytics using web scraping (Beautiful Soup), NLP, and BERT for Sentiment Analysis.",
      "Reduction of turnaround time and increased operational efficiency with automation of tasks using Python",
    ],
  },
];

export const Timeline = () => {
  return (
    <div>
      <VerticalTimeline layout="1-column-left">
        {timelineData.map((experience, index) => (
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
                alt={experience.title}
                className="w-25 h-25 object-contain rounded-full"
              />
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {experience.company}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {experience.title}
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

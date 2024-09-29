import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HLogo from "../assets/HSEC_Logo.png";
import uiucLogo from "../assets/UIUC.png"

const timelineData = [
  {
    date:"May 2024 - Present",
    title: 'Research Intern',
    company: "University of Illinois Urbana-Champaign",
    points: [
      "UIUC+ Research Program in Software Engineering.",
    ],
    icon: uiucLogo,
  },
  {
    date: "June 2023 - August 2023",
    title: "SDE Intern",
    company: "HDFC Securities",
    icon: HLogo,
    points: [
      "Developed ReactJS and Firebase-based webpages for HDFC Sky, optimizing the customer onboarding process via referrals. These pages have efficiently managed over 2 million requests to date.",
      "Conducted real-time app review analytics using web scraping (Beautiful Soup), NLP, and BERT(Sentiment Analysis) to identify recurring themes in reviews, aiding in understanding user concerns and bugs.",
      "Reduction of turnaround time and increased operational efficiency with automation of tasks using Python.",
    ],
  },
];

export const Timeline = () => {
  return (
    <div>
      <VerticalTimeline layout="2-columns" animate={true}>
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

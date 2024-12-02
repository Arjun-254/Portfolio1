import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HLogo from "../assets/HSEC_Logo.png";
import uiucLogo from "../assets/UIUC.png"
import DjsceLogo from "../assets/DJSCE_Logo.png"
import CrisLogo from "../assets/CrisLogo.png"

const timelineData = [
  {
    date:"December 2024 Onwards",
    title: 'Incoming Machine Learning Intern',
    company: "CRIS - Ministry of Railways, Government of India",
    points: [
      "Incoming 6-month Intern at the Centre for Railway Information Systems (CRIS) to work on Speech-to-Speech translation and multi-modal AI software systems to recognise and mitigate issues raised by customers who travel using India’s Railway Network."
    ],
    icon: CrisLogo,
  },
  {
    date:"May 2024 - Ongoing",
    title: 'UIUC+ Research Intern',
    company: "University of Illinois Urbana-Champaign",
    points: [
      "Undergraduate Research: Working under Prof. Darko Marinov at UIUC in the domain of Mutation Testing with a focus on the application of ML and Generative AI for Equivalent Mutant Detection",
      "Led the development of a web-based task allocation system to create a manually labelled mutant dataset, including writing documentation for the mutant labeling task and serving as site admin to ensure smooth operation.", 
      "Wrote and optimized a shell script to perform TCE+ as a baseline for equivalent mutant detection, incorporating Maven test execution, containerization via Docker, and comprehensive cross-system testing to ensure reproducibility.",
      "Currently investigating the application of LLMs for Equivalent Mutant Detection."
    ],
    icon: uiucLogo,
  },
  {
    date: "August 2023 – January 2024",
    title: "Teaching Assistant",
    company: "Dwarkadas J Sanghvi College of Engineering",
    icon: DjsceLogo,
    points: [
      "Assisted Prof. Aniket Kore in teaching Python lab sessions for Second Year Computer Engineering students, covering libraries like NumPy, Pandas, Matplotlib and Tkinter.",
      "Held hands-on laboratory sessions, guiding students in learning and applying concepts while providing clarification and debugging help to support their exam preparation.",
    ],
  },
  {
    date: "June 2023 - August 2023",
    title: "SDE Intern",
    company: "HDFC Securities",
    icon: HLogo,
    points: [
      "Conducted real-time app review analytics using web scraping, N-gram & LDA-based topic modeling, and fine-tuned BERT for sentiment analysis to identify core issues and bugs, aiding user understanding.",
      "Wrote Python scripts to automate excel and bond market data processing tasks, resulting in areduction of turnaround time by 97%. This led to substantial time and cost savings, improving overall efficiency.",
      "Created Web pages utilizing ReactJS and Firebase for HDFC Sky, tracking and streamlining the customer on-boarding journey through referrals. These web pages have handled over 2.3 million requests to date.",
      "CSVQueryBot: Employed LangChain and OpenAI APIs to facilitate the transformation of natural language user queries into pandas code to perform data analytics on user uploaded CSV files."
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

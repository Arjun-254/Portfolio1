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

const internshipData = [
  {
    date:"December 2024 - June 2025",
    title: 'Machine Learning Intern',
    company: "CRIS - Ministry of Railways, Government of India",
    points: [
      "Designed a hierarchical masked LSTM for multi-class complaint classification using Tensorflow with dynamic subtype gating via a custom ‘MaskedDense’ layer, enforcing class-conditional output spaces, achieving a 94.92% type and 89.62% subtype accuracy on a blind test-set of 100k real-world complaints with millisecond inference times on CPU.",
      "Developed a scalable NLI-based mislabeling detection pipeline correcting manual data annotation errors, boosting effective subtype accuracy by +18.7% and showcasing the power of data-centric AI at scale.",
      "Generated synthetic complaints using a Markov chain model to fill 88% of missing entries in underrepresented classes, boosting dataset coverage by +4.7% and validating quality-quantity tradeoffs via ablation studies."
    ],
    icon: CrisLogo,
  },
  {
    date:"May 2024 - June 2025",
    title: 'UIUC+ Research Intern',
    company: "University of Illinois Urbana-Champaign",
    points: [
      "Undergraduate Research: Worked under Prof. Darko Marinov at UIUC in the domain of Mutation Testing with a focus on the application of ML, GenAI and code-focused LLMs for equivalent mutant detection in mutation testing.",
      "Led the development of a web-based task allocation system to create a human-labeled equivalent mutant dataset, authored documentation for the labeling task, reviewed 40+ PRs, and served as site administrator to ensure seamless labeling.",
      "Engineered a Dockerized TCE+ baseline pipeline for reproducible testing of 1500+ Java mutants and developed Python analytics scripts for agreement score computation, consensus analysis, and automated quality control systems."
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
      "Review Analytics: Built real-time app review analytics pipelines using web scraping, N-grams/LDA topic modeling, and fine-tuned BERT for sentiment analysis, identifying key issues that contributed to a 37% app rating increase.",
      "Referral System: Engineered dynamic web pages using ReactJS and Firebase Dynamic Links, enabling referral link generation with UTM tagging, input validation and social sharing, supporting 2.3M+ onboarding requests.",
      "Workflow Automation: Developed a Python automation framework for Excel and Bond Market data processing tasks, achieving a 97% reduction in turnaround time and delivering substantial operational efficiency gains.",   
      "CSVQueryBot: Employed LangChain and OpenAI APIs to facilitate the transformation of natural language user queries into pandas code to perform data analytics on user uploaded CSV files."
    ], 
  },
];

export const Timeline = () => {
  return (
    <div>
      <VerticalTimeline layout="2-columns" animate={true}>
        {internshipData.map((experience, index) => (
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

import { useRef } from "react";

import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import img from "../assets/web.png";
import img1 from "../assets/mobile.png";
import img2 from "../assets/creator.png";
import { useInView } from "framer-motion";

const About = () => {
  const tiltCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
        <span
          style={{
            transform: isInView
              ? "none"
              : "translateX(-200px) translateY(-200px)  perspective(500px)",
            opacity: isInView ? 1 : 0,
            transition:
              "opacity 1.3s cubic-bezier(0.17, 0.55, 0.55, 1), transform 1.3s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          {children}
        </span>
      </section>
    );
  }

  return (
    <div className="pb-20">
      <div className="flex justify-center items-center flex-column">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
      </div>
      <div className="flex justify-center items-center flex-column">
        <h1 className={`${styles.sectionHeadText}`}>Overview</h1>
      </div>

      <p className="mx-10 mt-4 text-secondary text-[17px] w-3xl flex justify-center items-center">
        I am a highly motivated college student eager to start an internship or
        research opportunity that will allow me to utilize my problem-solving
        skills and attention to detail to further develop my abilities in the
        field of computer science. I'm a quick learner and excited to learn new
        frameworks and languages.
      </p>
      <div className="mt-5 mx-auto flex flex-wrap gap-10 justify-center items">
        <Section>
          <Tilt className="">
            <div className="w-auto green-pink-gradient rounded-[20px] shadow-card p-[1px]">
              <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
                <p className="font-bold max-w-m"> Comp-Sci Major </p>
                <img src={img} className="w-16 h-16 mt-1" />
              </div>
            </div>
          </Tilt>
        </Section>

        <Section>
          <Tilt className="">
            <div className="w-auto green-pink-gradient rounded-[20px] shadow-card p-[1px]">
              <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
                <p className="font-bold "> Web Developer </p>
                <img src={img1} className="w-16 h-16 mt-1" />
              </div>
            </div>
          </Tilt>
        </Section>

        <Section>
          <Tilt className="">
            <div className="w-auto green-pink-gradient rounded-[20px] shadow-card p-[1px]">
              <div className="bg-gradient-to-r from-purple-700 to-blue-900 rounded-[20px] py-16 px-6 flex justify-evenly items-center flex-col group">
                <p className="font-bold ">AI/ML Developer</p>
                <img src={img2} className="w-16 h-16 mt-1" />
              </div>
            </div>
          </Tilt>
        </Section>
      </div>
    </div>
  );
};

export default About;

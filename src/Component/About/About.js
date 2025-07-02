import "./about.css";
import * as AiIcons from "react-icons/ai";
import { motion } from "framer-motion";
import { ScrollIn } from "../Animation";

function About() {
  const stack = [
    { tag: "React" },
    { tag: "Typescript" },
    { tag: "Tailwind CSS" },
    { tag: "Javascript (ES6+)" },
    { tag: "Jest" },
    { tag: "REST API Consumption" },
    { tag: "Git & Github" },
    { tag: "HTML5" },
    { tag: "CSS Modules" },
    { tag: "CSS3" },
    { tag: "React Storybook" },
  ];

  return (
    <div id="about" className="about-container">
      <div className="container-header">
        <div className="dash" />
        <h2>About Me</h2>
        <div className="dash" />
      </div>

      <div className="about-content">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          className="about-image"
        >
          <motion.div variants={ScrollIn} className="image-fit">
            <div href="https://www.linkedin.com/in/matthew-vincent-b77a16239">
              <img
                src="https://i.imgur.com/dC1xy6j_d.webp?maxwidth=1520&fidelity=grand"
                alt="Vincent Matthew"
                width="100%"
                height="100%"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* About Detail */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.25 }}
          className="about-details"
        >
          <motion.div variants={ScrollIn}>
            <h1>Matthew Vincent</h1>
            <p>
              I’m a results-driven frontend developer based in Lagos, Nigeria, with a passion for transforming ideas into clean, responsive, and high-performing web applications. I specialize in building modern UIs using React, TypeScript, and Tailwind CSS, with a strong emphasis on performance, accessibility, and real-world usability.

              My skillset includes REST API consumption, component-based architecture, and scalable state management. I write well-tested code using Jest, collaborate seamlessly across cross-functional teams, and thrive in agile environments where speed and precision matter.
            </p>
            <p>
              With a keen eye for detail and a commitment to continuous learning, I stay updated with the latest industry trends and best practices. I’m passionate about creating user-centric designs that not only look great but also provide an intuitive user experience.
            </p>
            {/* <h4>STACK</h4> */}
            <div className="mt-5">
              <h2>Stacks</h2>
              <p>These are the stacks i have confidently worked with</p>
              <div className="stack">
                {stack.map((item, index) => (
                  <span key={index}>
                    <AiIcons.AiOutlineCheckCircle />
                    {item.tag}
                  </span>
                ))}
              </div>
            </div>

            {/* <a
              className="btn form-btn"
              href="https://github.com/mathetis041"
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

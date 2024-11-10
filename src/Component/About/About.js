import "./about.css";
import * as AiIcons from "react-icons/ai";
import { motion } from "framer-motion";
import { ScrollIn } from "../Animation";

function About() {
  const stack = [
    { tag: "HTML5" },
    { tag: "CSS" },
    { tag: "Tailwind CSS" },
    { tag: "JS Frameworks" },
    { tag: "JS Libraries" },
    { tag: "Git" },
    { tag: "React Storybook" }
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
            <a href="https://www.linkedin.com/in/matthew-vincent-b77a16239">
              <img
                src="https://i.imgur.com/dC1xy6j_d.webp?maxwidth=1520&fidelity=grand"
                alt="Vincent Matthew"
                width="100%"
                height="100%"
              />
            </a>
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
              A frontend web developer; I am a Frontend Web Developer. I
              specialise in making interactive, responsive web site using HTML,
              CSS, JavaScript and Tailwind. I have been certified by more than
              three programming institution online (FreeCodeCamp, Udacity, Meta,
              Open Weaver and IBM).
            </p>
            <p>
              I have a strong passion in growing and learning new things, and
              working with persons of like-mind. I have also worked in a teams
              during intern trainings or Cohorts.
              <br /> I feel more very confident using
            </p>
            {/* <h4>STACK</h4> */}
            <div className="stack">
              {stack.map((item, index) => (
                <span key={index}>
                  <AiIcons.AiOutlineCheckCircle />
                  {item.tag}
                </span>
              ))}
            </div>

            <a
              className="btn form-btn"
              href="https://github.com/mathetis041"
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

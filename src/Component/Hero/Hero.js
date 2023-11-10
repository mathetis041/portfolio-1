import * as BsIcons from "react-icons/bs";
import "./hero.css";
import { motion } from "framer-motion";
import ScrollIntoView from "react-scroll-into-view";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.hgroup
          initial="offscreen"
          whileInView="link"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            offscreen: {
              y: "10px",
              opacity: 0,
              visibility: "hidden",
            },
            link: {
              y: 0,
              opacity: 1,
              visibility: "visible",
              transition: {
                type: "spring",
                delay: 1,
                staggerChildren: 0.5,
                y: { duration: 1 },
                duration: 2,
              },
            },
          }}
        >
          <h5>Hi, my name is</h5>
          <h1>MATTHEW VINCENT</h1>
          <h2>Frontend Developer</h2>
        </motion.hgroup>

        <motion.div
          className="scroll-down"
          initial="offscreen"
          animate={{ y: [0, 5, 10, 5, 0] }}
          transition={{ type: "spring", repeat: Infinity }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ScrollIntoView smooth="true" selector="#about">
            <BsIcons.BsArrowDownCircle size="2rem" />
          </ScrollIntoView>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

import * as VSCIcons from "react-icons/vsc";
import { motion } from "framer-motion";
import { Letter, ScrollIn } from "../Animation";

function Recent({ data }) {
  return data.map((card, index) => {
    return (
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={ScrollIn}
        key={index}
        className="project-card"
      >
        <div className="card-detail">
          <small>{card.type}</small>
          <h4>
            <span>
              {card.name.split("").map((char, index) => (
                <motion.span key={index} variants={Letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </h4>
          <motion.div variants={ScrollIn} className="paragraph">
            {card.about}
            <div className="links">
              <a
                className="repo-link"
                href={card.source}
                target="_blank"
                title="Github Link or code sample upon request"
                rel="noreferrer"
              >
                <VSCIcons.VscGithubAlt size="1.1rem" />
              </a>
              <a
                className="live"
                href={card.url}
                target="_blank"
                title="Live Link"
                rel="noreferrer"
              >
                <VSCIcons.VscLinkExternal size="1rem" />
              </a>
            </div>
          </motion.div>
          <div className="card-stack">
            {card.stack.map((item, index) => (
              <span key={index}>{item.tag}</span>
            ))}
          </div>
        </div>
        <div className="card-image">
          <a className="live" href={card.url} target="_blank" rel="noreferrer">
            <img src={card.image} alt={card.imageAlt} width="100%" />
          </a>
        </div>
      </motion.div>
    );
  });
}

export default Recent;

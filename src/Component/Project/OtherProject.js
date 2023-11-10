import * as VSCIcons from "react-icons/vsc";
import * as AiIcons from "react-icons/ai";
import { motion } from "framer-motion";

function Other({ data }) {
  return (
    <div className="side-project-container">
      {data.map((card, index) => {
        return (
          <div key={index} className="side-card">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                offscreen: {
                  opacity: 0,
                  visibility: "hidden",
                },
                onscreen: {
                  opacity: 1,
                  visibility: "visible",
                  transition: {
                    type: "spring",
                    delay: index / 4,
                    staggerChildren: 0.5,
                    duration: 2,
                  },
                },
              }}
              className="side-card-detail"
            >
              <div className="links">
                <AiIcons.AiOutlineFileDone size="2rem" />
                <a
                  className="side-repo-link"
                  href={card.source}
                  target="_blank"
                  title="Github Link"
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
              <div className="paragraph">
                <h4>
                  <a href={card.url} target="_blank" rel="noreferrer">
                    {card.name}
                  </a>
                </h4>
                {card.about}
              </div>
              <div className="card-stack">
                {card.stack.map((item, index) => (
                  <span key={index}>{item.tag}</span>
                ))}
              </div>
            </motion.div>

            <div className="side-card-image">
              <a
                className="live"
                href={card.url}
                target="_blank"
                rel="noreferrer"
              >
                <img src={card.image} alt={card.imageAlt} width="100%" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Other;

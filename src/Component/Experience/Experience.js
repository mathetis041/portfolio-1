import "./experience.css";
import { SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import { ScrollIn } from "../Animation";
import { ExperienceData } from "./ExperienceData";

import {
  NextArrow,
  PrevArrow,
  SliderButtons,
  SplideContainer,
  SplideItem,
} from "./ExperienceStyle";

function Experience() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      id="experience"
      className="ex-container"
    >
      <motion.div variants={ScrollIn} className="ex-content">
        <h1>Experience</h1>
        <SplideContainer
          options={{
            rewind: true,
            rewindSpeed: "2000",
            perPage: 1,
            pagination: false,
            drag: false,
          }}
          hasTrack={false}
          style={{ position: "static" }}
        >
          <SplideTrack>
            {ExperienceData.map((card, index) => {
              return (
                <SplideItem key={index}>
                  <div className="splide-item-container">
                    <h5>{card.label}</h5>
                    <h1>{card.company}</h1>
                    <div className="card-detail">
                      <p>{card.year}</p>
                      <ul>
                        {card.info.map((item, index) => (
                          <li key={index}>{item.content}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      className="btn form-btn"
                      href={card.certificate}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                    </a>
                  </div>
                </SplideItem>
              );
            })}
          </SplideTrack>

          {/* <span></span> */}
          <SliderButtons className="splide__arrows">
            <PrevArrow className="splide__arrow splide__arrow--prev" />
            <NextArrow className="splide__arrow splide__arrow--next" />
          </SliderButtons>
        </SplideContainer>
      </motion.div>
    </motion.div>
  );
}

export default Experience;

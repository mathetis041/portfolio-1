import { motion } from "framer-motion";
import { useState } from "react";
import { ScrollIn } from "../Animation";
import Recent from "./HotProject";
import Other from "./OtherProject";
import "./project.css";
import { HotProject, ProjectData } from "./ProjectData";

function Project() {
  const [project, setProject] = useState(false);
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div
        variants={ScrollIn}
        id="project"
        className="project-container"
      >
        <div className="container-header">
          <div className="dash" />
          <h2>Things I have Built</h2>
          <div className="dash" />
        </div>

        <div className="project-background-width">
          <div className="project-content">
            <div className="card-container">
              <Recent data={HotProject} />
            </div>
            <b
              className="btn form-btn"
              onClick={() => setProject((prev) => !prev)}
            >
              {project ? "Less Project Tabs" : "More Project Tabs"}
            </b>
            {project ? (
              <>
                <p className="mt-4">
                  To see more projects I have done, check my{" "}
                  <a
                    className="profile-link"
                    href="https://www.frontendmentor.io/profile/Michaelajayi150"
                  >
                    Frontend Mentor
                  </a>{" "}
                  or{" "}
                  <a
                    className="profile-link"
                    href="https://github.com/Michaelajayi150"
                  >
                    Github
                  </a>{" "}
                  page
                </p>
                <Other data={ProjectData} />
              </>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Project;

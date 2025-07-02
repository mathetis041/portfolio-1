import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

// import { FaFilePdf } from "react-icons/fa6";

function Footer() {
  const contactLink = [
    /*
    {
      url: "",
      el: <BsIcons.BsGithub />,
    },
   */
    {
      url: "https://www.frontendmentor.io/profile/mathetis041",
      el: <SiIcons.SiFrontendmentor />,
    },
    { url: "", el: <FaFileAlt /> },
    { url: "github.com/mathetis041", el: <FaIcons.FaGithub /> },
    {
      url: "https://www.linkedin.com/in/matthew-vincent-b77a16239",
      el: <BsIcons.BsLinkedin />,
    },
    { url: "mailto: matthewonuoha41@gmail.com", el: <FiIcons.FiMail /> },
  ];
  return (
    <div className="text-center pb-3">
      <div className="hero-contact">
        {contactLink.map((item, index) => (
          <motion.a
            initial="offscreen"
            whileInView="link"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              offscreen: {
                opacity: 0,
                visibility: "hidden",
              },
              link: {
                opacity: 1,
                visibility: "visible",
                transition: {
                  type: "spring",
                  delay: 1 + index / 4,
                  duration: 2,
                },
              },
            }}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            {item.el}
          </motion.a>
        ))}
      </div>
      <a
        href="https://github.com/mathetis04"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
      </a>
      <p>Built by Matthew Vincent</p>
    </div>
  );
}

export default Footer;

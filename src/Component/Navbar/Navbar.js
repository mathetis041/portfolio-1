import { useState } from "react";
import * as RiIcons from "react-icons/ri";
import { Container, Navbar } from "react-bootstrap-v5";
import logo from "../../asset/logo.png";
import "./navbar.css";
import ScrollIntoView from "react-scroll-into-view";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const Tags = [
    // { content: "Work", hash: "project" },
    { content: "About", hash: "about" },
    { content: "Experience", hash: "experience" },
    { content: "Contact", hash: "contact" },
  ];

  const Heads = {
    offscreen: {
      opacity: 0,
      visibility: "hidden",
    },
    logo: {
      opacity: 1,
      visibility: "visible",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <motion.div
          initial="offscreen"
          whileInView="logo"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={Heads} className="navbar-logo">
            <img src={logo} alt="Michael .A" width="50px" height="50px" />
          </motion.div>
        </motion.div>
        <div
          className={!isOpen ? "navbar-toggler" : "navbar-toggler fixs"}
          onClick={toggle}
        >
          <RiIcons.RiMenu4Fill size="1.5rem" />
        </div>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={
            !isOpen ? "justify-content-end" : "justify-content-end show"
          }
        >
          <div className="me-2 nav-content">
            {Tags.map((item, index) => (
              <ScrollIntoView
                smooth="true"
                selector={`#${item.hash}`}
                key={index}
              >
                <motion.div
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
                        delay: index / 4,
                        duration: 2,
                      },
                    },
                  }}
                  className="nav-link"
                  onClick={toggle}
                >
                  {item.content}
                </motion.div>
              </ScrollIntoView>
            ))}
            <motion.div
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
                    delay: 1,
                    duration: 2,
                  },
                },
              }}
            >
            
            </motion.div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

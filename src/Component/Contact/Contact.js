import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import "./contact.css";
import { ScrollIn } from "../Animation";

function Contact() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [Status, setStatus] = useState(false);
  const [state, handleSubmit] = useForm("xnqkrylk");

  useEffect(() => {
    if (state.succeeded) {
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 2000);
    }
  }, [setForm, state.succeeded]);

  const handleChange = (inputSpec) => (e) => {
    setForm({ ...Form, [inputSpec]: e.target.value });
    console.log(state.errors);
  };

  const PopModal = {
    offscreen: {
      opacity: 0,
      visibility: "hidden",
    },
    popIn: {
      opacity: 1,
      visibility: "visible",
      transition: {
        type: "spring",
        duration: 2,
      },
    },

    popOut: {
      opacity: 0,
      visibility: "hidden",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };

  return (
    <div id="contact" className="contact-section">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        className="container"
      >
        <motion.div variants={ScrollIn} className="contact-container">
          <hgroup className="text-content-header">
            <h1 className="section-topic">Have a Project?</h1>
            <h3 className="section-topic">I'd love to hear from you</h3>
          </hgroup>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name */}
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Company Name"
              value={Form.name}
              onChange={handleChange("name")}
              required
            />
            {/* Name Error */}
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            {/* Email */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Company Email"
              value={Form.email}
              onChange={handleChange("email")}
              required
            />
            {/* Email Error */}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* Subject */}
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Creating a product web app"
              value={Form.subject}
              minLength="10"
              onChange={handleChange("subject")}
              required
            />
            {/* Subject Error */}
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />

            {/* Text area */}
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Hi, I think we need a site for our products at Company X. How soon can you hop on to discuss this?"
              value={Form.message}
              onChange={handleChange("message")}
              minLength="30"
              required
            />
            {/* Text Message Error */}
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              className="btn form-btn"
              type="submit"
              value="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div initial="offscreen" animate={Status ? "popIn" : "popOut"}>
          <motion.div variants={PopModal} className="pop-modal">
            <span>
              Your Message has been sent, We will get back to you shortly.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;

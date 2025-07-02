import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero/Hero";
import NavBar from "./Component/Navbar/Navbar";
import Preloader from "./Component/Preloader";
import Project from "./Component/Project/Project";
import { useState } from "react";
import { Parallax } from "react-parallax";

// import BackgroundImage from "./asset/backgroundImages/images";

// import LinkUp from "./Component/LinkUp";

function App() {
  const [isLoading, setLoading] = useState(true);

  const loadScreen = () => {
    setLoading(false);
  };

  window.addEventListener("load", loadScreen);

  return (
    <div className="dark-mode">
      {isLoading && <Preloader />}
      <NavBar />
      <Parallax bgImage="https://res.cloudinary.com/doijevrqo/image/upload/v1750979981/robs-HOrhCnQsxnQ-unsplash_ai9ipx.jpg" bgImageStyle={{ height: 1000 }} strength={500}>
        <Hero />
      </Parallax>

      <Parallax strength={500}>
        <About />
        {/* <LinkUp /> */}
      </Parallax>

      <Parallax bgImage='https://res.cloudinary.com/doijevrqo/image/upload/v1750979963/codioful-formerly-gradienta-bKESVqfxass-unsplash_jmt2h7.jpg' bgImageStyle={{ height: 1000 }} strength={500}>
        <Experience />
      </Parallax>

      <Parallax strength={500}>
        <Project />
      </Parallax>

      <Parallax strength={500}>
        <Contact />
      </Parallax>

      <Footer />
    </div>
  );
}

export default App;

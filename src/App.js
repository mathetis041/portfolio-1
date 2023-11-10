import { Parallax } from "react-parallax";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero/Hero";
import LinkUp from "./Component/LinkUp";
import NavBar from "./Component/Navbar/Navbar";
// import Project from "./Component/Project/Project";
import Bg from "./asset/background-image.jpg";
import Preloader from "./Component/Preloader";
import { useState } from "react";

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
      <Parallax bgImage={Bg} bgImageStyle={{ height: 1000 }} strength={500}>
        <Hero />
      </Parallax>

      <Parallax strength={500}>
        <About />
        <LinkUp />
      </Parallax>

      <Parallax bgImage={Bg} bgImageStyle={{ height: 1000 }} strength={500}>
        <Experience />
      </Parallax>

      <Parallax strength={500}>
        <Contact />
      </Parallax>

      <Footer />
    </div>
  );
}

export default App;

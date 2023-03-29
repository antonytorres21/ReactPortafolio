import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <section>
        <Home id="home" />
      </section>
      <section>
        <AboutMe id="aboutme" />
      </section>
      <section>
        <Skills id="skills" />
      </section>
      <section>
        <Projects id="projects" />
      </section>
      <section>
        <Contact id="contact" />
      </section>
      <Footer />
    </div>
  );
}

export default App;

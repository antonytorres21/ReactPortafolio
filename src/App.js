import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

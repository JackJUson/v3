import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Social />
      <Home />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

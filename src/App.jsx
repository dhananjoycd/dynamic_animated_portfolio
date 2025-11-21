import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import ExperienceEducation from "./components/sections/ExperienceEducation";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen tech-background   text-white font-body relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <ExperienceEducation />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

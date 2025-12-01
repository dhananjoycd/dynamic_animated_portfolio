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
    <div className="min-h-screen bg-background-dark text-white font-body relative overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Add global responsive padding */}
      <main className="pt-20 px-4 sm:px-6 lg:px-8 space-y-20">
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

import "./App.css";
import Heading from "./components/heading/heading";
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Socials from "./components/socials/socials";

function App() {
  const handleClickScrollProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollSocials = () => {
    const element = document.getElementById("socials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Heading
        scrollProjectsCallback={handleClickScrollProjects}
        scrollSocialsCallback={handleClickScrollSocials}
      />
      <AboutMe />
      <div id="projects"></div>
      <Projects />
      <Skills />
      <div id="socials"></div>
      <Socials />
      <p>@2023 Reiling | All Rights Reserved</p>
    </div>
  );
}

export default App;

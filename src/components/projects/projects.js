import Project from "./project/project";
import "./projects.css";

import graphite from "../../assets/graphite.jpeg";
import pulsar from "../../assets/pulsar.png";
import tinyweather from "../../assets/TinyWeather2.png";

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <ul className="projects-list">
        <li>
          <Project
            image={graphite}
            description="A demo webshop for sustainable office supplies.
React Frontend, Django REST Backend"
            features={[
              "Session managment JWT and non logged in users",
              "Shopping cart and checkout",
              "Search for products",
              "User reviews, verified purchase",
              "Admin page with graphs",
            ]}
            title="Graphite - Webshop"
            reversed={false}
            link="https://graphite-shop.netlify.app/"
            github="https://github.com/Sil-Rei/Graphite-Webshop"
          />
        </li>
        <li>
          <Project
            image={pulsar}
            description="A stock portfolio simulaton site with real data.
Angular Frontend, Django REST Backend"
            features={[
              "Login / register with captcha and email verification",
              "Password reset",
              "Notificaton bar, system info and user events",
              "Create unlimited portfolios and simulate real stock performance",
              "Make your portfolios public and get votes",
            ]}
            title="Pulsar - Stock Simulation"
            reversed={true}
            link="https://pulsar-stocks.com"
            github="https://github.com/Sil-Rei/pulsar"
          />
        </li>
        <li>
          <Project
            image={tinyweather}
            description="A fast and minimalistic weather application build with Codepen using the OpenWeather API and plain Javascript"
            features={[
              "Search for every city",
              "Temperatures",
              "Current weather",
              "Wind",
            ]}
            title="Tiny Weather - Weather App"
            reversed={false}
            link="https://codepen.io/Sil-Rei/full/bGxEwWj"
            github="https://codepen.io/Sil-Rei/pen/bGxEwWj"
          />
        </li>
      </ul>
    </div>
  );
}

export default Projects;

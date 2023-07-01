import "./socials.css";
import { Linkedin, Github, EnvelopeFill } from "react-bootstrap-icons";

function Socials() {
  return (
    <div className="socials-container">
      <h1 className="socials-heading">Socials</h1>
      <div className="socials-icons">
        <a
          href="https://www.linkedin.com/in/silas-reiling/"
          className="social-icon"
        >
          <Linkedin />
        </a>
        <a href="https://github.com/Sil-Rei" className="social-icon">
          <Github />
        </a>
        <a href="mailto:silas@silasreiling.com" className="social-icon">
          <EnvelopeFill />
        </a>
      </div>
    </div>
  );
}

export default Socials;

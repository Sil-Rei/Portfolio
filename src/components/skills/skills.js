import "./skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-wrapper">
        <div className="webdev-skills">
          <h3 className="skills-h3">WebDev Skills</h3>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS / SCSS / SASS</li>
            <li>Angular</li>
            <li>React</li>
            <li>Django REST</li>
            <li>Bootstrap</li>
            <li>sqlite3</li>
            <li>Postgresql</li>
          </ul>
        </div>
        <div className="language-skills">
          <h3 className="skills-h3">Language Skills</h3>
          <ul className="skills-list">
            <li>Java</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>JavaScript / Typescript</li>
            <li>
              <br />
            </li>
            <li>
              <h3 className="skills-h3">Other</h3>
            </li>
            <li>Git / GitHub</li>
            <li>Bash</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

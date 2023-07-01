import "./heading.css";

function Heading({ scrollProjectsCallback, scrollSocialsCallback }) {
  const handleClickProjects = () => {
    scrollProjectsCallback();
  };

  const handleClickSocials = () => {
    scrollSocialsCallback();
  };

  return (
    <div className="heading-container">
      <h1 className="heading-job-title">Full Stack Web Developer</h1>
      <h1 className="heading-name">Silas Reiling</h1>
      <div className="cta-button-row">
        <button className="cta-button" onClick={handleClickProjects}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Projects
        </button>
        <button className="cta-button" onClick={handleClickSocials}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          Socials
        </button>
      </div>
    </div>
  );
}

export default Heading;

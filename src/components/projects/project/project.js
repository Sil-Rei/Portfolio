import "./project.css";

function Project({
  image,
  description,
  features,
  title,
  reversed,
  link,
  github,
}) {
  const mappedFeatures = features?.map((feature, index) => {
    return <li key={index}>{feature}</li>;
  });
  const isReversedContainer = reversed
    ? "project-container reversed"
    : "project-container";

  const isReversedRight = reversed
    ? "project-right reversed-right"
    : "project-right";
  return (
    <div className={isReversedContainer}>
      <div className="blob"></div>
      <div className="project-left">
        <h2 className="project-title">{title}</h2>
        <img className="project-image" src={image} alt="website screenshot" />
      </div>
      <div className={isReversedRight}>
        <p className="project-description">
          {description}
          <br />
          <br />
          Features:
        </p>
        <ul className="project-features">{mappedFeatures}</ul>
        <div className="project-buttons">
          <a href={link} className="project-button">
            Demo
          </a>
          <a href={github} className="project-button">
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

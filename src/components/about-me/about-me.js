import "./about-me.css";
import me from "../../assets/me.jpg";

function AboutMe() {
  return (
    <div className="about-me-container">
      <h1 className="about-me-header">About Me</h1>
      <div className="info-wrapper">
        <img src={me} alt="Me" className="me-image" />
        <p className="about-me-text">
          Hey, I'm Silas and I'm a full-stack developer with a passion for
          creating beautiful and intuitive websites and applications. <br />{" "}
          <br />
          I'm currently in my 6th semester of studying applied computer science,
          where I'm building a strong foundation in programming / markup
          languages such as HTML, CSS, and JavaScript, as well as backend
          technologies like Django REST. <br />
          <br />
          While I may be early in my career, I've already developed a deep
          interest in web development and have been working hard to build my
          skills and knowledge. I'm eager to continue learning and growing as a
          developer, and I'm excited to see where this journey takes me.
        </p>
      </div>
      <hr className="line" />
    </div>
  );
}

export default AboutMe;

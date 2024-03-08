import Screenshot from "/img/MultiRoll.jpeg";
import Character from "/img/Character.jpeg";

const Projects = () => {
  return (
    <>
      <div className="hero">
        <h2>
          No.1: MultiRoll, <br />a Dungeons and
          <br />
          Dragons Companion
        </h2>
        <p className="learn-more">Learn More Below </p>
      </div>
      <p>A tool to streamline combat encounters and dice rolling in D&D</p>
      <img src={Screenshot} />
      <img src={Character} />
    </>
  );
};

export default Projects;

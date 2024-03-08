import Screenshot from "/img/MultiRoll.jpeg";
import Character from "/img/Character.jpeg";

const Projects = () => {
  return (
    <>
      <h2>
        MultiRoll, <br />a Dungeons and
        <br />
        Dragons Companion
      </h2>
      <p>A tool to streamline combat encounters and dice rolling in D&D</p>
      <img src={Screenshot} />
      <img src={Character} />
    </>
  );
};

export default Projects;

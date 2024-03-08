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
        <p className="learn-more">Check it Out Below vVv</p>
      </div>
      <div className="info-container">
        <p>
          MultiRoll is a slick web tool created to streamline encounters and
          dice rolling in D&D
        </p>
        <img src={Screenshot} />
      </div>
      <div className="info-container">
        <img src={Character} />
        <p>
          Features include a character creator with dynamic personalization
          options, a quick roller for non-combat scenarios, and motion graphics
          utilizing Three.js and Framer Motion React libraries
        </p>
      </div>
    </>
  );
};

export default Projects;

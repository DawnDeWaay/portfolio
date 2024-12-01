import { motion } from "motion/react";
import Header from "./components/Header";
import BigText from "./components/BigText";
import { IconRosette } from "@tabler/icons-react";
import Gallery from "./components/Gallery";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const constraintsRef = useRef(null);
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    setIsMouseDevice("ontouchstart" in window === false);
  }, []);
  return (
    <main id="Main" className="overflow-x-clip">
      <div className="grain" />
      <div className="grain" />
      <Header />
      <motion.div className="relative h-screen w-screen" ref={constraintsRef}>
        <motion.div
          drag={isMouseDevice ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          className="absolute bottom-0 right-0 p"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          <IconRosette stroke={1} size="70vh" color="#796C98" z="10" />
        </motion.div>
        <h1 className="absolute bottom-0 left-0 text-[15vw] pl-[5%] pb-8 pointer-events-none w-full">
          Dawn&nbsp;
          <br />
          DeWaay III&nbsp;
        </h1>
      </motion.div>
      <div>
        <BigText text={"Biography"} />
        <motion.div className="content">
          <div>
            <h3>
              Hey, I'm Dawn! Ever since I built my first computer all the way
              back in middle school, I've had a passion for gorgeous design and
              technology, and as a React-focused frontend software developer,
              I've had the privilege of marrying those two concepts together.
              After graduating from the University of Iowa in December of 2023,
              I've worked tirelessly to learn both frontend and backend
              technologies in order to bring my ideas to life, beginning with
              React + JavaScript.
            </h3>
          </div>
        </motion.div>
      </div>
      <div>
        <BigText text={"Work"} />
        <motion.div className="content">
          <h2 className="sub-head">Knight Moves</h2>
          <div className="section">
            <h3>
              Since January 2024, I've been designing & building Knight Moves'
              full-stack web application "Skillmp", a skills repository
            </h3>
            <h3>
              I designed the company's database schema, put together several
              crucial front-end designs, and built the project's API.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
            <h2 className="sub-head w-full">
              Languages &<br />
              Frameworks
            </h2>
            <div className="w-full">
              <p>JavaScript/TypeScript</p>
              <p>React.JS, Next.JS</p>
              <p>Python</p>
              <p>Java</p>
              <p>AWS Services</p>
              <p>Databases</p>
              <p>C & Assembly</p>
            </div>
          </div>
          <h2 className="sub-head">Personal Projects</h2>
          <div className="section"></div>
        </motion.div>
      </div>
      <div>
        <BigText text={"Education"} />
        <motion.div className="content">
          <div className="section">
            <h3>
              I graduated from the University of Iowa with a Bachelor's in
              Computer Science and a minor in Psychology in late 2023. I was
              heavily active in the software engineering department and
              participated in several clubs outside of school. These included
              the campus symphony, where I played in the cello section for two
              years, the badminton club, which helped me lose 60 pounds over the
              course of a year, and the Hawks Union, an activist group born
              inside the university.
            </h3>
          </div>
        </motion.div>
      </div>
      <div>
        <BigText text={"Passions"} />
        <motion.div className="content">
          <div className="h-screen w-screen p-4 flex center justify-center">
            <iframe
              className="spotify w-[100%] max-w-[800px] min-h-[40%] max-h-[50vh]"
              src="https://open.spotify.com/embed/playlist/1G9FItLV9x9ZYH87NJ7qkx?utm_source=generator&theme=0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
      <Gallery />
    </main>
  );
}

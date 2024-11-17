import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BigText from "./components/BigText";
import { IconRosette } from "@tabler/icons-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="Main">
      <div className="grain" />
      <div className="grain" />
      <Header scrolled={scrolled} />
      <div className="h-screen w-screen">
        <motion.div
          className="absolute bottom-0 right-[6%] h-[70vh] w-[70vh]"
          initial={{ y: 80 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          <IconRosette stroke={1} size={"100%"} color="#796C98" />
        </motion.div>
        <h1 className="absolute bottom-0 left-0 text-[15vw] pl-[5%]">
          Dawn
          <br />
          DeWaay III
        </h1>
      </div>
      <div className="max-w-full mx-auto px-8 [z-index: 8]">
        <div>
          <BigText text={"Biography"} />
          <motion.div className="content">
            <div>
              <h3>
                Hey, I'm Dawn! Ever since I built my first computer all the way
                back in middle school, I've had a passion for gorgeous design
                and technology, and as a React-focused frontend software
                developer, I've had the privilege of marrying those two concepts
                together. After graduating from the University of Iowa in
                December of 2023, I've worked tirelessly to learn both frontend
                and backend technologies in order to bring my ideas to life,
                beginning with React + JavaScript.
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
            <h2 className="sub-head">Languages/Frameworks</h2>
            <div>
              <p>JavaScript/TypeScript</p>
              <p>React.JS, Next.JS</p>
              <p>Python</p>
              <p>Java</p>
              <p>AWS Services</p>
              <p>Databases</p>
              <p>C & Assembly</p>
            </div>
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
                years, the badminton club, which helped me lose 60 pounds over
                the course of a year, and the Hawks Union, an activist group
                born inside the university.
              </h3>
            </div>
          </motion.div>
        </div>
        <div>
          <BigText text={"Passions"} />
          <motion.div className="content">
            <div className="h-screen w-screen">
              <iframe
                className="spotify"
                height={500}
                width={600}
                src="https://open.spotify.com/embed/playlist/1G9FItLV9x9ZYH87NJ7qkx?utm_source=generator&theme=0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <h3>Tekken, fashion, cello, music, umm</h3>
          </motion.div>
        </div>
        <div>
          <BigText text={"Gallery"} />
          <motion.div className="content">
            <div className="flex flex-wrap gap-4 justify-left max-w-[1000px] mx-auto px-4"></div>
          </motion.div>
          <div className="h-screen w-screen"></div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

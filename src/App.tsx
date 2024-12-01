import { motion, useSpring, useTransform } from "motion/react";
import Header from "./components/Header";
import BigText from "./components/BigText";
import { IconRosette } from "@tabler/icons-react";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";

type TextItem = {
  char: string | null;
  type: "char" | "space" | "break";
  delay: number | null;
};

export default function App() {
  const [displayedText, setDisplayedText] = useState<TextItem[]>([]);
  const [textWithDelays, setTextWithDelays] = useState<TextItem[]>([]);

  const x = useSpring(0, { stiffness: 100, damping: 15 });
  const y = useSpring(0, { stiffness: 100, damping: 15 });

  const rotateX = useTransform(x, [0, 400], [-45, 45]);
  const rotateY = useTransform(y, [0, 400], [-45, 45]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const normalizedX = event.clientX / viewportWidth;
    const normalizedY = event.clientY / viewportHeight;

    x.set(normalizedX * 200);
    y.set(normalizedY * 200);
  }

  function resetToInitial() {
    x.set(200, true);
    y.set(200, true);
  }

  const containerVariants = {
    initial: { opacity: 1 },
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };
  const text: TextItem[] = [
    { char: "D", type: "char", delay: null },
    { char: "a", type: "char", delay: null },
    { char: "w", type: "char", delay: null },
    { char: "n", type: "char", delay: null },
    { char: "br", type: "break", delay: null },
    { char: "D", type: "char", delay: null },
    { char: "e", type: "char", delay: null },
    { char: "W", type: "char", delay: null },
    { char: "a", type: "char", delay: null },
    { char: "a", type: "char", delay: null },
    { char: "y", type: "char", delay: null },
    { char: "\u00A0", type: "space", delay: null },
    { char: "I", type: "char", delay: null },
    { char: "I", type: "char", delay: null },
    { char: "I", type: "char", delay: null },
  ];

  useEffect(() => {
    const updatedText = text.map((item) => ({
      ...item,
      delay: Math.random() * 150 + 50,
    }));
    setTextWithDelays(updatedText);
  }, []);

  useEffect(() => {
    if (textWithDelays.length > 0) {
      let timeoutId: NodeJS.Timeout;
      const displayTextSequentially = (index: number) => {
        if (index < textWithDelays.length) {
          const currentItem = textWithDelays[index];
          if (currentItem.char !== null) {
            setDisplayedText((prev) => [...prev, currentItem]);
          }
          timeoutId = setTimeout(
            () => displayTextSequentially(index + 1),
            currentItem.delay!
          );
        }
      };

      displayTextSequentially(0);

      return () => clearTimeout(timeoutId);
    }
  }, [textWithDelays]);

  return (
    <main id="Main" className="overflow-x-clip">
      <div className="grain" />
      <div className="grain" />
      <Header />
      <motion.div
        className="relative h-screen w-screen"
        onMouseMove={handleMouse}
        onMouseLeave={resetToInitial}
      >
        <motion.div
          className="absolute bottom-0 right-0 p"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{ x: rotateX, y: rotateY }}
        >
          <IconRosette stroke={1} size="70vh" color="#796C98" z="10" />
        </motion.div>
        <motion.h1
          className="absolute bottom-0 left-0 text-[15vw] pl-[5%] pb-8 pointer-events-none"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          style={{ display: "inline-block" }}
        >
          {displayedText.map((item, index) => {
            if (item.type === "char") {
              return (
                <span key={index} className="redaction50">
                  {item.char}
                </span>
              );
            }
            if (item.type === "space") {
              return <span key={index}>&nbsp;</span>;
            }
            if (item.type === "break") {
              return (
                <span key={index}>
                  &nbsp;
                  <br />
                </span>
              );
            }
            return null;
          })}
          {displayedText.length < text.length && (
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className="inline-block h-[15vw] w-[2px] bg-slate-900"
              style={{
                position: "relative",
                marginLeft: "2px",
              }}
            />
          )}
        </motion.h1>
      </motion.div>
      <div>
        <BigText text={"Biography"} />
        <motion.div className="content">
          <div className="section">
            <h3 className="w-full px-6 md:p-0">
              Hey, I'm Dawn! Ever since I built my first computer all the way
              back in middle school, I've had a passion for gorgeous design and
              technology, and as a React-focused frontend software developer,
              I've had the privilege of marrying those two together. After
              graduating from the University of Iowa in December of 2023, I've
              worked tirelessly to learn both frontend and backend technologies
              in order to bring my ideas to life, beginning with React +
              JavaScript.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">
                Languages &<br />
                Frameworks
              </h2>
              <div className="w-full md:border-l-2 border-black md:pl-4">
                <p>* JavaScript/TypeScript</p>
                <p>* React.JS, Next.JS</p>
                <p>* Python</p>
                <p>* Java</p>
                <p>* AWS Services</p>
                <p className="nowrap">* Databases (SQL, GraphQL, REST APIs)</p>
                <p>* C & Assembly</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <BigText text={"Work"} />
        <motion.div className="content">
          <div className="section gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">Knight Moves</h2>
              <h3 className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
                Since January 2024, I've been building Knight Moves' full-stack
                web application, the Skills Mastery Platform. I designed the
                project from front to back, including database, APIs, secrets,
                and frontend design.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">
                University of Iowa
                <br />
                Security
              </h2>
              <div className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4"></div>
            </div>
            <h2 className="head">Personal Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4 gap-4">
              <h2 className="sub-head">
                <span className="italic">no.1~ </span>MultiRoll
              </h2>
              <p className="w-full md:border-l-2 border-black md:pl-4">
                MultiRoll is a Dungeons & Dragons dice roller available on the
                web, this was my first foray into web development
              </p>
              <h2 className="sub-head">
                <span className="italic">no.2~ </span>To-Do
              </h2>
              <p className="w-full md:border-l-2 border-black md:pl-4">
                To-Do is a web-based reminders app I created to hone my React.JS
                and design skills
              </p>
            </div>
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
          <div className="h-screen p-4 flex center justify-center w-full">
            <iframe
              className="w-full max-w-[1000px] min-h-[40%] max-h-[50vh]"
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

import { motion, useSpring, useTransform, type Variants } from "motion/react";
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

  const x = useSpring(200, { stiffness: 100, damping: 15 });
  const y = useSpring(200, { stiffness: 100, damping: 15 });

  const posX = useTransform(x, [0, 400], [-45, 45]);
  const posY = useTransform(y, [0, 400], [-45, 45]);

  useEffect(() => {
    x.set(200);
    y.set(200);
  }, [x, y]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const normalizedX = event.clientX / viewportWidth;
    const normalizedY = event.clientY / viewportHeight;

    x.set(normalizedX * 200);
    y.set(normalizedY * 200);
  }

  function resetToInitial() {
    x.set(200);
    y.set(200);
  }

  const cursorVariants: Variants = {
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
            currentItem.delay!,
          );
        }
      };
      displayTextSequentially(0);
      return () => clearTimeout(timeoutId);
    }
  }, [textWithDelays]);

  return (
    <main id="Main" className="overflow-x-clip overscroll-contain">
      <Header />
      <div className="grain" />
      <div className="grain" />
      <motion.div
        className="relative h-screen w-screen"
        onMouseMove={handleMouse}
        onMouseLeave={resetToInitial}
      >
        <motion.div
          className="absolute bottom-0 right-0"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{ x: posX, y: posY }}
        >
          <IconRosette stroke={1} size="70vh" color="#796C98" />
        </motion.div>
        <motion.h1
          className="absolute bottom-0 left-0 text-[15vw] pl-[5%] mb-[5.5rem] md:mb-8 pointer-events-none"
          animate={{
            transition: {
              staggerChildren: 0.3,
            },
          }}
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
            <h3 className="w-full px-6 md:p-0 mt-4">
              Hey, I’m Dawn. I’m a Full-Stack Engineer who specializes in
              single-handedly building and launching enterprise B2B SaaS
              platforms from scratch. I love taking complex product ideas and
              turning them into production-ready web apps—handling everything
              from intuitive UI/UX design to robust, multi-tenant cloud
              architecture. Ultimately, I build clean, high-performance software
              that scales, delivering the execution of an entire development
              team wrapped into a single engineer.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">
                Languages &<br />
                Frameworks
              </h2>
              <ul className="w-full md:border-l-2 border-black md:pl-4 gap-2">
                <li>* JavaScript/TypeScript</li>
                <li>* React.JS, Next.JS</li>
                <li>
                  * AWS Cognito, AppSync, S3, Cloudwatch, Lambda, Amplify, etc.
                </li>
                <li>* Databases (SQL, GraphQL, REST APIs)</li>
                <li>* Java & JVM Languages</li>
                <li>* Python</li>
                <li>* C & Assembly</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <BigText text={"Work"} />
        <motion.div className="content">
          <div className="section">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">
                Knight Moves - Lead Software Developer
              </h2>
              <h3 className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
                As Lead Developer at Knight Moves, I led a small team building
                Skillmp, our B2B learning platform, from an empty repo to a live
                product serving enterprise clients. I owned the full
                stack—TypeScript, Next.js, and AWS on the backend, plus the
                UI/UX design on the front—setting up multi-tenant auth, a
                role-based permission system, and the relational data layer
                powering user analytics and profile hydration. Balancing
                hands-on engineering with design and technical direction, I
                shipped a scalable, production-grade product while guiding the
                team through the full development lifecycle.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">University of Iowa Security</h2>
              <h3 className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
                While at the University of Iowa, I worked as a security officer,
                ensuring campus safety and honing my leadership and
                decision-making skills.
              </h3>
            </div>
            <h2 className="mt-4">Personal Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">
                <span className="italic">no.1~ </span>MultiRoll
              </h2>
              <p className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
                MultiRoll is a web-based Dungeons & Dragons dice roller and my
                first foray into web development. This project sparked my
                passion for creating interactive and functional web experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">
                <span className="italic">no.2~ </span>To-Do
              </h2>
              <p className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
                To-Do is a sleek web-based reminders app I built to refine my
                skills in React.js and frontend design, sharpening
                my ability to merge usability with aesthetic appeal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <BigText text={"Education"} />
        <motion.div className="content">
          <div className="section">
            <h3 className="w-full p-6 md:p-0"></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
              <h2 className="sub-head">The University of Iowa</h2>
              <p className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
                I graduated from the University of Iowa in late 2023 with a
                Bachelor’s degree in Computer Science and a minor in Psychology.
                During my time at Iowa, I was actively involved in the software
                engineering community and participated in a variety of clubs,
                including the campus symphony, badminton club, Sunset Club, and
                the UI Pride House. While balancing my academic and
                extracurricular commitments, I also embraced a fitness journey,
                practicing discipline and maintaining my mental health.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Gallery />
    </main>
  );
}

/** biome-ignore-all lint/suspicious/noArrayIndexKey: Animated text is rendered in a fixed sequence. */
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
	}, [text.map]);

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
						currentItem.delay ?? 0,
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
						<h3 className="w-full px-6 md:p-0 mt-4 mb-2">
							Hey, I’m Dawn—a Full-Stack Software Engineer and Designer who
							specializes in building scalable products on AWS. I turn ambitious
							ideas into polished, production-ready software, working across the
							entire product lifecycle: system architecture, cloud
							infrastructure, backend services, responsive interfaces, testing,
							deployment, and ongoing iteration. I’m especially experienced with
							enterprise B2B applications, multi-tenant systems, role-based
							access control, and data-rich analytical experiences. My approach
							combines rigorous engineering with thoughtful visual design so the
							products I build are dependable, intuitive, and enjoyable to use.
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
							<h2 className="sub-head">Technical Skills</h2>
							<ul className="w-full md:border-l-2 border-black md:pl-4">
								<li>
									<span className="font-bold">Languages & Frameworks</span>
									<br />
									<span className="text-[1.4rem]">
										TypeScript, JavaScript, React, Next.js, GraphQL, Node.js,
										WordPress, PHP, Java, Python, and C#
									</span>
								</li>
								<li>
									<span className="font-bold">State & Design</span>
									<br />
									<span className="text-[1.4rem]">
										TanStack Query, HTML/CSS, Tailwind CSS, Figma, Motion,
										Material UI, and Statsig
									</span>
								</li>
								<li>
									<span className="font-bold">Cloud & Data</span>
									<br />
									<span className="text-[1.4rem]">
										AWS Amplify, Cognito, DynamoDB, Lambda, S3, CloudWatch, IAM,
										AppSync, SQL, and MySQL
									</span>
								</li>
								<li>
									<span className="font-bold">Testing & Tooling</span>
									<br />
									<span className="text-[1.4rem]">
										Cypress, Jest, React Testing Library, Biome, Git, Maven, and
										npm
									</span>
								</li>
								<li>
									<span className="font-bold">Architecture & Practice</span>
									<br />
									<span className="text-[1.4rem]">
										RESTful APIs, CI/CD pipelines, multi-tenancy, Agile/Scrum,
										and responsive design
									</span>
								</li>
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
							<div className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
								<h3>
									Since January 2023, I’ve led the design and development of
									Skillmp, a scalable B2B Learning Management System built with
									Next.js and deployed on AWS. I took the platform from initial
									system design to production, owning its foundational frontend,
									backend, data, and cloud architecture.
								</h3>
								<h3 className="mt-4">
									I engineered its core enterprise capabilities, including
									multi-tenant role-based access control, real-time skill
									mastery tracking, automated service-request workflows, and a
									layered skills database. I also wireframed and developed
									analytical dashboards for role-proficiency comparisons and
									“Run vs. Build” time allocation, translating complex
									organizational data into clear, actionable interfaces.
								</h3>
								<h3 className="mt-4">
									The platform supported a 200%+ expansion in the client base
									and delivered STEM education to corporate partners such as EMC
									Insurance as well as underserved communities, including Window
									Rock High School and Meskwaki Nation. To keep that growth
									stable, I established end-to-end multi-tenant test coverage
									with Cypress and Jest and configured AWS CloudWatch monitoring
									to surface runtime issues and performance bottlenecks.
								</h3>
								<h3 className="mt-4">
									Alongside hands-on development, I lead a small engineering
									team using Agile practices—turning business goals into
									actionable user stories, managing a kanban workflow, hosting
									daily scrums, unblocking developers, and guiding features
									through delivery. I also contribute to product and curriculum
									strategy, including four highly rated courses covering OOP,
									Python, SQL, and frontend development.
								</h3>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
							<h2 className="sub-head">University of Iowa Student Security</h2>
							<h3 className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
								While attending the University of Iowa, I worked as a student
								security officer helping maintain a safe and welcoming campus.
								The role strengthened my leadership, situational awareness, and
								ability to make calm, responsible decisions under pressure.
							</h3>
						</div>
						<h2 className="mt-4">Personal Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
							<h2 className="sub-head">
								<span className="italic">no.1~ </span>Canon Music
							</h2>
							<p className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
								Canon Music is a Next.js application that uses OAuth 2.0 and the
								Web Audio API to provide authenticated playlist management and
								automated media curation. Its frontend combines dynamic API
								polling with real-time playback synchronization to create a
								fluid, responsive listening experience that remains fast as
								playback state changes.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
							<h2 className="sub-head">
								<span className="italic">no.2~ </span>MultiRoll
							</h2>
							<p className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
								MultiRoll is a collaborative, multi-tenant application built
								with AWS Amplify, DynamoDB, React Router, and Three.js. It
								supports real-time data streaming and synchronized shared state
								through a custom last-write-wins replication strategy. Three.js
								rendering and custom animation bring its interactive 3D objects
								to life while maintaining a smooth, highly responsive
								experience.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			<div>
				<BigText text={"Education"} />
				<motion.div className="content">
					<div className="section">
						<div className="grid grid-cols-1 md:grid-cols-2 w-full mt-4">
							<h2 className="sub-head">The University of Iowa</h2>
							<p className="w-full md:border-l-2 border-black p-6 md:p-0 md:pl-4">
								I earned my Bachelor’s degree in Computer Science from the
								University of Iowa in December 2023, graduating with a 3.6 GPA.
								My studies included a focus in Interdisciplinary Design and a
								minor in Psychology, giving me a broader understanding of how
								technical systems, visual design, and human behavior intersect.
								Beyond the classroom, I was involved with University of Iowa
								Student Security, the UI Pride House, UIowa Esports community
								events, and the Badminton Club.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			<Gallery />
		</main>
	);
}

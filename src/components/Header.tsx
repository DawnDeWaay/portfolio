/** biome-ignore-all lint/a11y/noStaticElementInteractions: Existing animated navigation wrappers are clickable. */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: Existing icon navigation uses pointer interactions. */
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import SvgEllipses from "./icons/SvgEllipses";
import SvgEmail from "./icons/SvgEmail";
import SvgFlower from "./icons/SvgFlower";
import SvgGitHub from "./icons/SvgGitHub";
import SvgInstagram from "./icons/SvgInstagram";
import SvgSpinner from "./icons/SvgSpinner";
import SvgSpotify from "./icons/SvgSpotify";
import SvgStairs from "./icons/SvgStairs";
import SvgLinkedIn from "./icons/SvgLinkedIn";
import WavyLine from "./WavyLine";
import FadeIn from "./FadeIn";
import SvgTwitter from "./icons/SvgTwitter";

const Header = () => {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	useEffect(() => {
		const sectionIds = ["Biography", "Work", "Education", "Gallery"];

		const updateActiveSection = () => {
			const header = document.querySelector<HTMLElement>(".header");
			const markerY = (header?.getBoundingClientRect().top ?? 0) + 72;
			const currentSection = sectionIds.find((id) => {
				const heading = document.getElementById(id);
				const section = heading?.parentElement;
				if (!section) return false;

				const rect = section.getBoundingClientRect();
				return rect.top <= markerY && rect.bottom > markerY;
			});

			setActiveSection((current) =>
				current === currentSection ? current : (currentSection ?? null),
			);
		};

		updateActiveSection();
		document.body.addEventListener("scroll", updateActiveSection, {
			passive: true,
		});
		window.addEventListener("resize", updateActiveSection);

		return () => {
			document.body.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
		};
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const year = new Date().getFullYear();

	return (
		<>
			<FadeIn />
			<div
				className="header fixed inset-0 border-2 border-black pointer-events-none"
				style={{ margin: "clamp(12px, 2vw, 38px)" }}
			>
				<motion.div
					className="flex items-center justify-between w-full"
					onClick={() => scrollToSection("Main")}
				>
					<motion.h1
						whileHover={{ color: "#796C98" }}
						className="cursor-pointer pointer-events-auto w-auto text-center z-40 inline-block text-[1.8rem] md:text-[2.2rem] redaction35"
					>
						&nbsp;&nbsp;Dawn DeWaay III&nbsp;
					</motion.h1>
					<div className="contact flex items-start justify-center h-full pointer-events-auto mr-2">
						<motion.a
							href="mailto:dawndewaay@gmail.com"
							target="_blank"
							rel="noopener"
							initial={{ color: "black" }}
							className="w-11 h-11 p-2"
						>
							<motion.div whileHover={{ color: "#0078d4" }}>
								<SvgEmail />
							</motion.div>
						</motion.a>
						<motion.a
							href="https://github.com/DawnDeWaay"
							target="_blank"
							rel="noopener"
							className="hidden w-11 h-11 p-2 md:block"
						>
							<SvgGitHub />
						</motion.a>
						<motion.a
							href="https://www.linkedin.com/in/dawndewaay/"
							target="_blank"
							rel="noopener"
							className="hidden w-11 h-11 p-2 md:block"
						>
							<SvgLinkedIn />
						</motion.a>
						<motion.a
							href="https://x.com/dawndewaay"
							target="_blank"
							rel="noopener"
							className="hidden w-11 h-11 p-2 md:block"
						>
							<SvgTwitter />
						</motion.a>
						<motion.a
							href="https://www.instagram.com/dawndewaay/"
							target="_blank"
							rel="noopener"
							className="hidden w-11 h-11 p-2 md:block"
						>
							<SvgInstagram />
						</motion.a>
						<motion.a
							href="https://open.spotify.com/user/donalddewaay"
							target="_blank"
							rel="noopener"
							className="hidden w-11 h-11 p-2 md:block"
						>
							<SvgSpotify />
						</motion.a>
					</div>
				</motion.div>
				<motion.div initial={{ y: -10 }}>
					<WavyLine />
				</motion.div>
				<motion.div className="flex absolute bottom-0 right-0 flex-col pointer-events-auto z-40">
					<div onClick={() => scrollToSection("Biography")}>
						<motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
							<SvgSpinner active={activeSection === "Biography"} />
						</motion.div>
					</div>
					<div onClick={() => scrollToSection("Work")}>
						<motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
							<SvgStairs active={activeSection === "Work"} />
						</motion.div>
					</div>
					<div onClick={() => scrollToSection("Education")}>
						<motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
							<SvgEllipses active={activeSection === "Education"} />
						</motion.div>
					</div>
					<div onClick={() => scrollToSection("Gallery")}>
						<motion.div className="cursor-pointer w-12 h-12 p-2 border-t-2 border-l-2 border-black">
							<SvgFlower active={activeSection === "Gallery"} />
						</motion.div>
					</div>
				</motion.div>
				<div className="redaction35 text-[1.2rem] absolute left-0 bottom-0 border-t-2 border-r-2 border-black italic hidden md:block">
					&nbsp;&nbsp;&nbsp;© {year} Dawn DeWaay III {"<3"}&nbsp;&nbsp;&nbsp;
				</div>
			</div>
		</>
	);
};

export default Header;

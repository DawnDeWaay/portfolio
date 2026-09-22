import { motion } from "motion/react";

const backgroundPath =
	"M8 72h56a8 8 0 0 0 8-8V8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8Z";
const logoPath =
	"M62 62H51.315625V43.8021149c0-4.9893607-1.8958333-7.7775826-5.8449219-7.7775826-4.2960937 0-6.540625 2.901578-6.540625 7.7775826V62H28.6333333V27.3333333h10.2967448v4.669595s3.0959636-5.7287132 10.452474-5.7287132C56.7356771 26.2742151 62 30.7644705 62 40.051212V62ZM16.349349 22.7940133C12.8420573 22.7940133 10 19.9296567 10 16.3970067S12.8420573 10 16.349349 10s6.3476562 2.8643566 6.3476562 6.3970067-2.8403646 6.3970066-6.3476562 6.3970066ZM11.0325521 62H21.769401V27.3333333H11.0325521V62Z";

const SvgLinkedIn = () => (
	<motion.svg
		initial="idle"
		animate="idle"
		whileHover="hover"
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		viewBox="0 0 72 72"
		style={{ width: "100%", height: "100%" }}
	>
		<motion.path
			d={backgroundPath}
			variants={{ idle: { fill: "#000000" }, hover: { fill: "#007EBB" } }}
			transition={{ duration: 0.2 }}
		/>
		<path d={logoPath} fill="#FFF" />
	</motion.svg>
);

export default SvgLinkedIn;

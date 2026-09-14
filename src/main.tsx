import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";

async function waitForFonts(timeoutMs = 2000) {
	if (!("fonts" in document)) {
		return;
	}

	const criticalFaces = [
		'400 1em "Redaction"',
		'400 1em "Redaction 50"',
		'400 1em "Redaction 35"',
		'400 1em "Redaction 10"',
	];

	const loadFonts = Promise.all(
		criticalFaces.map((face) => document.fonts.load(face)),
	).then(() => document.fonts.ready);

	await Promise.race([
		loadFonts,
		new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
	]);
}

async function bootstrap() {
	await waitForFonts();

	document.documentElement.classList.remove("fonts-loading");
	document.documentElement.classList.add("fonts-ready");

	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}

bootstrap();

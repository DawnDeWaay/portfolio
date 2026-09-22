const FadeIn = () => {
	return (
		<div
			className="pointer-events-none fixed top-0 left-0 h-[30vh] w-full z-30"
			style={{
				background:
					"linear-gradient(to bottom, #f1eef4 0%, #f1eef4 40%, transparent 100%)",
			}}
		/>
	);
};

export default FadeIn;

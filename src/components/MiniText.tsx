interface MiniTextProps {
	text: string;
	miniText: string;
}

const MiniText: React.FC<MiniTextProps> = ({ text, miniText }) => {
	return (
		<div className="flex flex-col justify-center border-y-[1.5px] border-black px-2 w-52">
			<p className="text-2xl text-center font-bold">{text}</p>
			<p className="text-base text-center">{miniText}</p>
		</div>
	);
};

export default MiniText;

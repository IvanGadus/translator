import { useState } from "react";
import FileDisplay from "./components/FileDisplay";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
	const [file, setFile] = useState(null);
	const [audioStream, setAudioStream] = useState(null);

	const isAudioAvailalbe = file || audioStream;

	const resetAudio = () => {
		setAudioStream(null);
		setFile(null);
	};

	return (
		<div className="flex flex-col max-w-[1000px] w-full mx-auto">
			<section className="min-h-screen flex flex-col">
				<Header />
				{isAudioAvailalbe ? (
					<FileDisplay
						file={file}
						audioStream={audioStream}
						resetAudio={resetAudio}
					/>
				) : (
					<HomePage setFile={setFile} setAudioStream={setAudioStream} />
				)}
				<footer></footer>
			</section>
		</div>
	);
}

export default App;

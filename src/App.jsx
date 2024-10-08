import { useEffect, useRef, useState } from "react";
import FileDisplay from "./components/FileDisplay";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Information from "./components/Information";
import Transcribing from "./components/Transcribing";
import { CgLogIn } from "react-icons/cg";

function App() {
	const [file, setFile] = useState(null);
	const [audioStream, setAudioStream] = useState(null);
	const [output, setOutput] = useState(null);
	const [loading, setLoading] = useState(false);
	const [finished, setFinished] = useState(false);
	const [downloading, setDownloading] = useState(false);

	const isAudioAvailalbe = file || audioStream;

	const worker = useRef(null);

	const resetAudio = () => {
		setAudioStream(null);
		setFile(null);
	};

	useEffect(() => {
		if (!worker.current) {
			worker.current = new Worker(
				new URL("./utils/whisper.worker.js", import.meta.url),
				{ type: "module" }
			);
		}

		const onMessageReceive = async (e) => {
			switch (e.data.type) {
				case "DOWNLOADING":
					setDownloading(true);
					console.log("DOWNLOADING");
					break;
				case "LOADING":
					setLoading(true);
					console.log("LOADING");
					break;
				case "RESULT":
					setOutput(e.data.results);
				case "INFERENCE_DONE":
					setFinished(true);
					console.log("DONE");
					break;
			}
		};

		worker.current.addEventListener("message", onMessageReceive);
		return () =>
			worker.current.removeEventListener("message", onMessageReceive);
	}, []);

	const readAudioFrom = async (file) => {
		const samplingRate = 16000;
		const audioCTX = new AudioContext({ sampleRate: samplingRate });
		const response = await file.arrayBuffer();
		const decoded = audioCTX.decodeAudioData(response);
		const audio = decoded.getChannelData(0);
		return audio;
	};

	const handleFormSubmission = async () => {
		if (!file && !audioStream) {
			return;
		}
		let audio = await readAudioFrom(file ? file : audioStream);
		const modelName = "openai/whisper-tiny.en";
		worker.current.post;
	};

	return (
		<div className="flex flex-col max-w-[1000px] w-full mx-auto">
			<section className="min-h-screen flex flex-col">
				<Header />
				{output ? (
					<Information />
				) : loading ? (
					<Transcribing />
				) : isAudioAvailalbe ? (
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

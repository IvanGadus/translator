import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";

export default function HomePage(props) {
	const { setFile, setAudioStream } = props;
	return (
		<main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5 font-medium text-xl pb-20">
			<h1 className="text-blue-400 font-semibold text-5xl sm:text-6xl md:text-7xl">
				Translator
			</h1>
			<h3 className="font-medium md:text-lg">
				Nahraj <span className="text-blue-400"> &rarr;</span> Prepíš{" "}
				<span className="text-blue-400"> &rarr;</span> Prelož
			</h3>
			<button className="specialButton font-normal px-4 py-2 rounded-xl flex items-center justify-between gap-4 mx-auto max-w-full w-72 my-4 text-xl">
				<p className="text-blue-400">Nahraj</p>
				<CiMicrophoneOn />
			</button>
			<p className="text-base">
				Alebo{" "}
				<label className=" cursor-pointer text-blue-400 hover:text-blue-600 duration-200">
					vlož mp3 súbor
					<input
						onChange={(e) => {
							const tempFile = e.target.files[0];
							setFile(tempFile);
						}}
						className="hidden"
						type="file"
						accept=".mp3,.wave"
					></input>
				</label>
			</p>
			<p className="text-base italic text-slate-500">Celkom zadarmenko!</p>
		</main>
	);
}

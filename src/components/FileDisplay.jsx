import React from "react";
import { BsPencil } from "react-icons/bs";

export default function FileDisplay(props) {
	const { file, resetAudio, audioStream } = props;
	return (
		<main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5 font-medium text-xl pb-20 w-72 sm:w-96 mx-auto max-w-full">
			<h1 className="text-blue-400 font-semibold text-4xl sm:text-5xl md:text-6xl">
				Tvoj súbor
			</h1>
			<div className="flex flex-col text-left  my-4">
				<h3 className="font-semibold">Meno</h3>
				<p>{file ? file.name : "Vlastné audio"}</p>
			</div>
			<div className="flex items-center justify-between gap-4">
				<button
					onClick={resetAudio}
					className="text-slate-400 hover:text-blue-600 duration-200"
				>
					Resetovať
				</button>
				<button className="specialButton p-2 px-4 rounded-lg text-blue-400 flex gap-2 items-center font-medium">
					<p>Prepíš</p>
					<BsPencil />
				</button>
			</div>
		</main>
	);
}

import React from "react";

export default function FileDisplay(props) {
	const { file, resetAudio, audioStream } = props;
	return (
		<main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5 font-medium text-xl pb-20">
			<h1 className="text-blue-400 font-semibold text-4xl sm:text-5xl md:text-6xl">
				Tvoj súbor
			</h1>
		</main>
	);
}

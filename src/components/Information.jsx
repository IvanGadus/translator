import React, { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Information() {
	const [tab, setTab] = useState("transcription");
	return (
		<main className="flex-1 p-4 flex flex-col text-center justify-center gap-3 sm:gap-4 md:gap-5 font-medium text-xl pb-20 mx-auto max-w-prose">
			<h1 className="text-blue-400 font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
				Prepis nahrávky
			</h1>

			<div className="flex items-center  mx-auto bg-white  shadow rounded-full overflow-hidden">
				<button
					onClick={() => setTab("transcription")}
					className={
						"px-4 py-1 font-medium duration-200 w-36 " +
						(tab === "transcription"
							? "bg-blue-300 text-white"
							: "text-blue-400 hover:text-blue-600")
					}
				>
					Prepis
				</button>
				<button
					onClick={() => setTab("translation")}
					className={
						"px-4 py-1 font-medium duration-200 w-36 " +
						(tab === "translation"
							? "bg-blue-300 text-white"
							: "text-blue-400 hover:text-blue-600")
					}
				>
					Preklad
				</button>
			</div>
			{tab === "transcription" ? <Transcription /> : <Translation />}
		</main>
	);
}

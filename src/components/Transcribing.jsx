import React from "react";

export default function Transcribing(props) {
	const { downloading } = props;
	return (
		<div className="flex flex-1 items-center flex-col justify-center gap-10 md:gap-14 pb-24  p-4 text-center">
			<div className="flex flex-col gap-2 sm:gap-4">
				<h1 className="text-blue-400 font-semibold text-4xl sm:text-5xl md:text-6xl">
					Prepis audia
				</h1>
				<p>{!downloading ? "Mašina pracuje ..." : "core cylinders engaged"}</p>
			</div>
			<div className="flex flex-col gap-2 sm:gap-4 max-w-[500px] mx-auto w-full">
				{[0, 1, 2].map((item) => {
					return (
						<div
							key={item}
							className={
								"rounded-full h-2 sm:h-3 bg-slate-400 loading " +
								`loading${item}`
							}
						></div>
					);
				})}
			</div>
		</div>
	);
}

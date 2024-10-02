import React from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function Header() {
	return (
		<header className="flex items-center justify-between gap-4 p-4">
			<h1 className="font-medium text-xl">Translator</h1>
			<button className=" specialButton flex items-center gap-2  text-xl px-4 rounded-lg text-blue-400 py-2">
				<p>Nový</p>
				<CiCirclePlus className="text-2xl" />
			</button>
		</header>
	);
}

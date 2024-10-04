import React from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function Header() {
	return (
		<header className="flex items-center justify-between gap-4 p-4">
			<a href="/">
				<h1 className="font-medium text-xl">Translator</h1>
			</a>
			<a
				href="/"
				className=" specialButton flex items-center gap-2 px-4 rounded-lg text-blue-400 py-2 text-sm"
			>
				<p>Nový</p>
				<CiCirclePlus className="text-2xl" />
			</a>
		</header>
	);
}

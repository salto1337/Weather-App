import { useState } from "react";
import search from "../assets/search.png";

export function Form({
	onFormSubmit,
}: {
	onFormSubmit: (city: string) => void;
}) {
	const [inputValue, setInputValue] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (inputValue) {
					onFormSubmit(inputValue);
				}
			}}
			className="flex gap-2">
			<input
				className="rounded-[40px] pl-4 py-2 w-full"
				type="text"
				placeholder="Search"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button className="bg-white rounded-full w-[50px] flex justify-center items-center">
				<img src={search} alt="search" />
			</button>
		</form>
	);
}

import drizzle from "../assets/drizzle.png";

interface MainProps {
	name: string;
	temperature: number;
}

export function Main({ name, temperature }: MainProps) {
	return (
		<main className="flex flex-col items-center my-10">
			<img src={drizzle} alt="wheather" />
			<div className="flex flex-col">
				<h1 className="text-center text-5xl text-white">{temperature} ℃</h1>
				<h2 className="text-white text-3xl">{name}</h2>
			</div>
		</main>
	);
}

import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

const apiKey = import.meta.env.REACT_APP_API_KEY;

interface DataProps {
	humidity: string;
	windSpeed: string;
	temperature: number;
	location: string;
}

export function App() {
	const [data, setData] = useState<DataProps>({
		humidity: "",
		windSpeed: "",
		temperature: 0,
		location: "",
	});
	const [city, setCity] = useState("london");

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
		)
			.then((res) => res.json())
			.then((res) => {
				setData({
					humidity: res.main.humidity?.toString() || "",
					windSpeed: res.wind.speed?.toString() || "",
					temperature: Math.floor(res.main.temp) || 0,
					location: res.name || "",
				});
			});
	}, [city]);

	console.log(data);

	return (
		<div className="bg-purple-400 rounded-md p-8 w-[290px] sm:w-[380px]">
			<Form onFormSubmit={setCity} />
			<Main name={data.location} temperature={data.temperature} />
			<Footer humidity={data.humidity} wind={data.windSpeed} />
		</div>
	);
}

export default App;

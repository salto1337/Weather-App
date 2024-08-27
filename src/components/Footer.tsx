import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

interface FooterProps {
	humidity: string;
	wind: string;
}

export function Footer({ humidity, wind }: FooterProps) {
	return (
		<footer className="flex justify-between text-white">
			<div className="flex items-center gap-3">
				<img className="w-[30px] h-[30px]" src={humidity_icon} alt="humidity" />
				<div className="flex flex-col">
					<p className="text-xl font-medium">{humidity}%</p>
					<p>Humidity</p>
				</div>
			</div>
			<div>
				<div className="flex items-center gap-3">
					<img className="w-[30px] h-[30px]" src={wind_icon} alt="wind" />
					<div className="flex flex-col">
						<p className="font-medium text-xl">{wind}</p>
						<p>Wind speed</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

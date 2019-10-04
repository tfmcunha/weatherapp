import React, { useEffect, useState } from "react";
import Icon from "./icon";
import Temp from "./temp";
import UnitBtn from "./unitbtn";
import CityList from "./citylist";
import SunTimes from "./suntimes";

export default function Main() {
	const [loaded, setLoaded] = useState(false);
	const [weatherData, setWeatherData] = useState({
		temp: "",
		condition: "",
		icon: "",
		sunrise: null,
		sunset: null
	});
	const [unit, setUnit] = useState("metric");
	const [city, setCity] = useState("lisbon");

	useEffect(() => {
		async function fetchData() {
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWAPI}`
				);
			if (res.status === 200) {
				const data = await res.json();
				setWeatherData(previousData => ({
					...previousData,
					temp: data.main.temp,
					condition: data.weather[0].main,
					icon: data.weather[0].icon,
					sunrise: data.sys.sunrise + data.timezone - 3600,
					sunset: data.sys.sunset + data.timezone - 3600
				}));
				setLoaded(true);
			} else {
				console.log(res.status);
			}
		}
		fetchData();
	}, [city]);


	const {icon, temp, condition, sunrise, sunset} = weatherData

	if (loaded) {
		return (
			<div className="main">
				<h1 className="title">WEATHER APP</h1>
				<CityList setCityFn={setCity} />
				<Icon code={icon} />
				<Temp
					value={temp}
					unit={unit}
					condition={condition}
				/>
				<UnitBtn setUnitFn={setUnit} />
				<SunTimes sun={{sunrise, sunset }}/>
			</div>
			);
	} else {
		return <div>Loading...</div>;
	}
}

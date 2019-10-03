import React, {useEffect, useState} from 'react';
import Temp from './temp';
import UnitBtn from './unitbtn';
import CityList from './citylist';

export default function Main(){

	const [weatherData, setWeatherData] = useState({})
	const [unit, setUnit] = useState("metric")
	const [city, setCity] = useState("madrid")

	async function fetchData(){
		const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=2fb43fd8e7a36490a27e057d73996b05`)
		const data = await res.json()
		setWeatherData(data)
	}

	useEffect(() => {
		fetchData(city)
	}, [unit, city])

	if (weatherData.weather) {
		return(
			<div>
				<div>{weatherData.name}</div>
				<Temp value={weatherData.main.temp}/>
				<UnitBtn setUnitFn={setUnit}/>
				<CityList setCityFn={setCity}/>
			</div>
		)
	} else {
		return(<div>Loading</div>)
	}
}
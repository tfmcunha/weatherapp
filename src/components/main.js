import React, {useEffect, useState} from 'react';
import Icon from './icon';
import Temp from './temp';
import UnitBtn from './unitbtn';
import CityList from './citylist';
import SunTimes from './suntimes';

export default function Main(){

	const [weatherData, setWeatherData] = useState({})
	const [unit, setUnit] = useState("metric")
	const [city, setCity] = useState("lisbon")
	const [sunData, setSunData] = useState({})

	useEffect(() => {
		async function fetchData(){
			const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=2fb43fd8e7a36490a27e057d73996b05`)
			const data = await res.json()
			setWeatherData(data)
			setSunData({sunrise: data.sys.sunrise+data.timezone-3600, sunset: data.sys.sunset+data.timezone-3600})
			console.log(data)
		}
		fetchData()
	}, [unit, city])

	if (weatherData.weather) {
		return(
			<div className="main">
				<h1 className="title">WEATHER APP</h1>				
				<Icon code={weatherData.weather[0].icon}/>
				<Temp value={weatherData.main.temp} unit={unit} condition={weatherData.weather[0].main}/>
				<UnitBtn setUnitFn={setUnit}/>
				<SunTimes sun={sunData}/>
				<CityList setCityFn={setCity}/>

			</div>
		)
	} else {
		return(<div>Loading</div>)
	}
}
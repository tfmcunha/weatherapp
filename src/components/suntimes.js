import React from 'react';
import '../css/sun.css';

export default function SunTimes({sun}){

	const sunrise = new Date(sun.sunrise*1000)
	const sunriseH = sunrise.getHours()
	const sunriseM = sunrise.getMinutes()

	const sunset = new Date(sun.sunset*1000)
	const sunsetH = sunset.getHours()
	const sunsetM = sunset.getMinutes()

	return(
		<div className="sun">
			<div><b>Sunrise</b>: {`${sunriseH}:${sunriseM}`}</div>
			<div><b>Sunset</b>: {`${sunsetH}:${sunsetM}`}</div>
		</div>
	);
}
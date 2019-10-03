import React from 'react';

export default function SunTimes({sun}){

	const sunrise = new Date(sun.sunrise*1000)
	const sunriseH = sunrise.getHours()
	const sunriseM = sunrise.getMinutes()

	const sunset = new Date(sun.sunset*1000)
	const sunsetH = sunset.getHours()
	const sunsetM = sunset.getMinutes()

	return(
		<div>
			<div>Sunrise: {`${sunriseH}:${sunriseM}`} GMT</div>
			<div>Sunset: {`${sunsetH}:${sunsetM}`} GMT</div>
		</div>
	);
}
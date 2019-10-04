import React from 'react';

export default function Temp({value, unit, condition}){
	let symbol
	if (unit === "metric") {
		symbol = "ºC"
	} else if (unit === "imperial") {
		symbol = "ºF"
	}

	return(
		<div>
			<h1>{Math.floor(value) + symbol}</h1>
			<h2 style={{marginTop: 0}}>{condition}</h2>
		</div>

	);
}
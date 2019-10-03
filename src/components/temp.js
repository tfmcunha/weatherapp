import React from 'react';

export default function Temp({value, unit}){
	let symbol
	if (unit === "metric") {
		symbol = "ºC"
	} else if (unit === "imperial") {
		symbol = "ºF"
	}

	return(
		<div>{Math.floor(value) + symbol}</div>
	);
}
import React from "react";

export default function Temp({ value, unit, condition }) {

	function convertUnit(){
		if(unit ==="metric") {
			return Math.floor(value - 273.15).toString() + "ºC"        
		} else if (unit === "imperial") {        
			return Math.floor(value * (9/5) - 459.69).toString() + "ºF"        
		}
	}

	return (
		<div>
			<h2>{condition}</h2>
			<h1 style={{ marginTop: 0 }}>{convertUnit()}</h1>
		</div>
	);
}
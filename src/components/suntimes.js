import React from "react";
import sunsetImg from "../images/sunset.png";
import sunriseImg from "../images/sunrise.png";
import "../css/sun.css";

export default function SunTimes({ sun }) {
	const sunrise = new Date(sun.sunrise * 1000);
	const sunriseH = sunrise.getHours();
	const sunriseM = sunrise.getMinutes();

	const sunset = new Date(sun.sunset * 1000);
	const sunsetH = sunset.getHours();
	const sunsetM = sunset.getMinutes();

	return (
		<div className="sun">
			<div>
				<img src={sunriseImg} width="40px" alt="sunrise" />
				<div>{`${sunriseH}:${sunriseM}`}</div>
			</div>
			<div>
				<img src={sunsetImg} width="40px" alt="sunset" />
				<div>{`${sunsetH}:${sunsetM}`}</div>
			</div>
		</div>
	);
}

import React from 'react';
import '../css/icon.css';

export default function Icon({code, condition}){
	return(
		<div className="condition">
			<img src={`http://openweathermap.org/img/wn/${code}@2x.png`} alt={condition} />
		</div>
	);
}
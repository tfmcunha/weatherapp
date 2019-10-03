import React from 'react'

export default function Icon({code}){
	return(
		<img src={`http://openweathermap.org/img/wn/${code}@2x.png`} />
	);
}
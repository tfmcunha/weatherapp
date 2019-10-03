import React from 'react';

export default function CityList({setCityFn}){
	const list = ["Lisbon", "Paris", "Tokyo"]

	function changeCity(e){
		setCityFn(e.target.value)
	}

	return(
		<div>
		  	<select onChange={changeCity}>
		  	{
		  		list.map((city, index) => (
		  			<option key={index} value={city}>{city}</option>		    
		  		))
		  	}
		    
		  	</select>
		</div>
	);
}
import React from 'react';

export default function CityList({setCityFn}){
	const list = ["Lisbon", "London", "New York", "Tokyo"]

	function changeCity(e){
		setCityFn(e.target.value)
	}
	
	return(
		<div>
		  	<select onChange={changeCity}>
		  	{
		  		list.map(city => (
		  			<option value={city}>{city}</option>		    
		  		))
		  	}
		    
		  	</select>
		</div>
	);
}
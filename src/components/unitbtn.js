import React from 'react';

export default function UnitBtn({setUnitFn}){

	function changeUnit(e){
		e.target.checked 
		? setUnitFn("imperial") 
		: setUnitFn("metric")
	}

	return(
		<div>
			<div>ºC</div>
			<label className="switch">
				<input type="checkbox" onChange={changeUnit}/>
			  	<span className="slider round"></span>
			</label>
			<div>ºF</div>
		</div>
	);
}
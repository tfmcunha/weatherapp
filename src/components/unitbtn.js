import React from 'react';
import '../css/unitbtn.css';

export default function UnitBtn({setUnitFn}){

	function changeUnit(e){
		e.target.checked 
		? setUnitFn("imperial") 
		: setUnitFn("metric")
	}

	return(
		<div className="unit-toggle">
			<div className="label">ºC</div>
			<label className="switch">
				<input type="checkbox" onChange={changeUnit}/>
			  	<span className="slider round"></span>
			</label>
			<div className="label">ºF</div>
		</div>
	);
}
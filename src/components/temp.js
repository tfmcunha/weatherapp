import React from 'react';

export default function Temp({value}){
	return(
		<div>{Math.floor(value)}</div>
	);
}
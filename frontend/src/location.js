import React, { useState } from 'react';
import "./location.css";
import Home from './home';

function Location({onChange}) {
	const [latitude,setlatitude]=useState();
	const [longitude,setlongitude]=useState();
	const [useraddress, setuseraddress]=useState();
	const geo= navigator.geolocation
	geo.getCurrentPosition(usercoords)
	function usercoords(position){
		let userlatitude=position.coords.latitude;
		let userlongitude=position.coords.longitude;
		
		setlatitude(userlatitude)
		setlongitude(userlongitude)
	}

	const getuseraddress=async()=>{
		let url=`https://api.opencagedata.com/geocode/v1/json?key=86cd7c21470a4113819aaa5bca590943&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
		const loc=await fetch(url)
		const data=await loc.json()
		onChange((prev)=>({...prev, ['address']: data.results[0].formatted }))
		setuseraddress(data.results[0].formatted)
	}
	const handlegetUseraddress=async()=>{
		await getuseraddress()
	}
	return (
	<>
		<button onClick={handlegetUseraddress} className='btn btn-success '>Get User Address</button>
		{/*<b><p>{useraddress}</p></b> */}
	</>	
	);
}
export default Location;
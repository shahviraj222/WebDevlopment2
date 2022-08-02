// weather api using this api : https://rapidapi.com/community/api/open-weather-map/

//variables
const url='https://community-open-weather-map.p.rapidapi.com/weather?q=';
// let city='mumbai'


// credentials to get weather from api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c657b07626msh67137484b83c25ep15e0dajsn5225742f7c9d',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

// api call
     
	// .then(response => response.json())
    // .then(data => console.log(data.name))
    // .then(data=> console.log(data))

// convert formula ferenhit to celcious
// (f-32)/1.8
const convert=(temp)=>{

	const result=(temp-32)/1.8;
	return result.toFixed(2);
}


const showWeather =async(data)=>{
	console.log(data.name);
	
	let printcity=document.getElementById('cityname');
	let printcalcu=document.getElementById('calculate');
	let printtemp=document.getElementById('Fell Like');
	let printtempmax=document.getElementById('maxtemp');
	let printtempmin=document.getElementById('mintemp'); 
	printcity.innerText=`${data.name}`
	printcalcu.innerText=`ForeCast:${data.weather[0].main}`
	printtemp.innerText=`ForeCast:${convert(data.main .feels_like)}`;
	printtempmax.innerText=`MaxTemp:${convert(data.main.temp_max)}`;
	printtempmin.innerText=`MinTemp:${convert(data.main.temp_min)}`;

}

const getWeather= async (city)=>{
	
	const baseurl=url+city+'&units=imperial';
	const response = await fetch(baseurl, options)
    const data=await response.json();
    console.log(data.name);
	// console.log(data.main .feels_like)
	// console.log(data.main.temp_min);
	// console.log(data.main.temp_min);
	showWeather(data);
}

const getcity=()=>{

    const city=document.getElementById('city').value;
	getWeather(city);
    console.log(city);
}    

const dayornight=()=>
{
	const time=new Date();
	// console.log(time.getHours())
	if(parseInt(time.getHours()) > 18)
	{
		
		let backgroundimg=document.getElementById('container')
		backgroundimg.style='background-image: url("n.jpg");'
	}
	else if(parseInt(time.getHours())>7)
	{
		
		let backgroundimg=document.getElementById('container')
		backgroundimg.style='background-image: url("d.jpg");'
	}
	else
	{
		
		let backgroundimg=document.getElementById('container')
		backgroundimg.style='background-image: url("n.jpg");'
	}
}
dayornight()
// we print 
// city name
// temp
// felllik


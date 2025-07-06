const button=document.getElementById("get-weather-btn");
const selectCity=document.getElementById("select-city");
const weatherContainer=document.getElementById("weather-container");

async function getWeather(city){

    //return json data from the weather API
    const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
   
}

function showWeather(city){
weatherContainer.innerHTML=`

<p>City : ${city.name!==undefined?`${city.name}`:`Name: N/A`}</p>
    <img 
    src="${city.weather[0].icon?city.weather[0].icon:``}" 
    id="weather-icon"
    alt='city-image'
    />
    <div class="weather-data">
    <p id="weather-main">${city.weather[0].main!==undefined?`Main weather type: ${city.weather[0].main}`:`Main weather type: N/A`} </p>
    <p>Description: ${city.weather[0].description!==undefined?`${city.weather[0].description}`:`Description: N/A`}</p> 
     <p id="main-temperature">
     ${city.main.temp!==undefined?`Main temperature: ${city.main.temp} °C`:`Main temperature: N/A`}</p>
    <p id="feels-like">
    Feels like: ${city.main.feels_like!==undefined?`${city.main.feels_like} °C`:` How temperature feels: N/A`}</p>
    <p>Maximum temperatures: ${city.main.temp_max!==undefined?`${city.main.temp_max} °C`:`N/A`} </p>
    <p>Minimum temperatures: ${city.main.temp_min!==undefined?`${city.main.temp_min} °C`:`N/A`} </p>
    <p>Pressure: ${city.main.pressure!==undefined?`${city.main.pressure} hPa`:`N/A`} </p>
    <p id="humidity">${city.main.humidity!==undefined?`Humidity: ${city.main.humidity} %`:`Humidity: N/A`}</p>
    <p>Visibility: ${city.visibility!==undefined?`${city.visibility} m`:`N/A`}</p>
    <p id="wind">${city.wind.speed!==undefined?`Wind speed: ${city.wind.speed} m/s`:`Wind speed: N/A`}</p>
    <p id="wind-gust">
    ${city.wind.gust!==undefined?`Wind gust: ${city.wind.gust} m/s`:`Wind gust: N/A`} </p>
    <p id="location">
         <span>
         Current location: 
         <br>
          ${city.coord.lat!==undefined?`Latitudes: ${city.coord.lat}°`:`Latitudes: N/A`}</span>
         <br>
          <span>Longitudes: ${city.coord.lon!==undefined?`\n${city.coord.lon}°`:`Longitudes: N/A`}</span> </p>
</div>
    `
}

   button.addEventListener("click",()=>{
    let city=selectCity.value;
    if(!city){
          alert("Please select a city.");
        return;
    }
    getWeather(city)
    .then((data)=>{

        showWeather(data);
       
        
    })
    .catch((error)=>{
        weatherContainer.innerHTML=`<p>Failed to load weather data: </p>`
    })
   

 
});




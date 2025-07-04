const button=document.getElementById("get-weather-btn");
const selectCity=document.getElementById("select-city");
//function to get weather
function getWeather(city){
    //return json data from the weather API
    fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.error(error));
}
getWeather(selectCity.value);
// //function to show weather data
// function showWeather(getWeather){
//     let data=getWeather;
//     console.log(data);
//     //display data in the page
//     const card=document.createElement("div");
//     card.innerHTML=`
//     <img src="" id="weather-icon"/>
//     <p id="main-temperature">Main temperatur:</p>
//     <p id="feels-like">How temperature feels: </p>
//         <p id="humidity"> Humidity: </p>
//     <p id="wind">Wind speed: </p>
//         <p id="wind-gust">Wind gust: </p>
//     <p id="weather-main">Main weather type: </p>
//         <p id="location">Current location: </p>
   
    
    
    
//     `


// }
// showWeather(getWeather("Tokyo"));
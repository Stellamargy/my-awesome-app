//Getting the value of the city input.
let city={};
function cityTemperature(){
    let cityInput=document.querySelector(".search-input").value;
   //Formatting the city input
    cityInput= cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();
    //storing the value of the city searched in the city object
    city.name=cityInput;
    //inserting the city input value in html
    let apiKey= "bfcoa2306cb6b50a21d693ee1219t034";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city.name}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(temp);
    let h1=document.querySelector(".current-city");
    h1.innerHTML=`${cityInput}`;
}

// call back function to get real data(temperature) from the api
function temp(response){
    let currentTemp= Math.floor(response.data.temperature.current);
    let currentTemperatureValue=document.querySelector(".current-temperature-value");
    currentTemperatureValue.innerHTML=`${currentTemp}`;
 }

// Getting real time
let currentTime=new Date();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function realTime(date){
let day=days[date.getDay()];
let hours=date.getHours();
let minutes=date.getMinutes();
// inserting real time in html
let span=document.querySelector("#current-time");
    if (minutes<10 ){
        span.innerHTML=`${day} ${hours}:${0}${minutes}`;
    }else if(hours<10){
        span.innerHTML=`${day} ${0}${hours}:${minutes}`;
    }else{
    span.innerHTML=`${day} ${hours}:${minutes}`;
    }
}

function cityTimeTemperature(event){
    //stop the default behaviour of a form when  submitted(refreshing)
    event.preventDefault();
    // Getting real time
    realTime(currentTime);
    //inserting searched city in html
    cityTemperature();
    
    
} 

//Selecting the form element  and adding a submit event listener.
let form=document.querySelector("#search-form");
form.addEventListener("submit",cityTimeTemperature)
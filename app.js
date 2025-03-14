const apiKey = "05f1ddcbf9c8490fc3200d616c8173f5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";


let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".first p");
let wind = document.querySelector(".second p");
let logo = document.querySelector(".weather i");
let weatherType = document.querySelector(".wetaherType");



//To change the weather icons
const rain = "fa-solid fa-cloud-rain";
const sunny = "fa-solid fa-sun";
const cloud = "fa-solid fa-cloud";
const thunder = "fa-solid fa-bolt-lightning";
const snowflake = "fa-solid fa-snowflake"; 



async function weatherData(cityName) {
    const response = await fetch(apiUrl+`q=${cityName}`+`&appid=${apiKey}`);
    let data = await response.json();
    city.innerHTML = data.name;
    console.log(data);
    temp.innerHTML = Math.round(data.main.temp)+ "°C";
    humidity.innerText = (data.main.humidity) + "%";
    wind.innerText = (data.wind.speed) + " km/h";
    
   if((data.weather[0].main) == 'Clouds'){
    logo.className = cloud;
    weatherType.innerText = data.weather[0].main;
   } else if((data.weather[0].main) == 'Clear'){
    logo.className = sunny;
    weatherType.innerText = data.weather[0].main;
   }else if((data.weather[0].main) == 'Rain'){
    logo.className = rain;
    weatherType.innerText = data.weather[0].main;
   }else if((data.weather[0].main) == 'Snow'){
    logo.className = snowflake;
    weatherType.innerText = data.weather[0].main;
   }


 
};




let searchBtn = document.querySelector(".searchBar button");


searchBtn.addEventListener("click", ()=>{
    let searchName = document.querySelector(".searchBar input").value;
    weatherData(searchName.toLowerCase());

})

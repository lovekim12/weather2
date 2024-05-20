const api_key = config.apikey;

let temp = document.querySelector("#temp");
let place = document.querySelector("#place");
let wind = document.querySelector("#wind");
let des = document.querySelector("#des");
let iconImg = document.querySelector("#icon");
let cityname = 'sydney';

// App();
// function App(){
//     navigator.geolocation.getCurrentPosition((position) => {
//         lat = position.coords.latitude;
//         lon =  position.coords.longitude;
//         // console.log(lat, lon);
//         getWeather(lat, lon);
//     })

// }


//  const getWeather = async(lat, lon) => {
//    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=kr`);
// //    console.log(response);
//     let data = await response.json();
//     console.log(data);

//     temp.textContent = data.main.temp;
//     place.textContent = data.name;
//     wind.textContent = data.wind.speed;
//     des.textContent = data.weather[0].description;
//     icon = data.weather[0].icon;
//     // console.log(icon)
//     iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
//     // console.log(iconUrl)
//     iconImg.setAttribute('src',iconUrl);
// }



const getWeather = async(cityname) => {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${api_key}&units=metric&lang=kr`);
//    console.log(response);
   let data = await response.json();
   console.log(data);

   temp.textContent = data.main.temp;
   place.textContent = data.name;
   wind.textContent = data.wind.speed;
   des.textContent = data.weather[0].description;
   icon = data.weather[0].icon;
   // console.log(icon)
   iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
   // console.log(iconUrl)
   iconImg.setAttribute('src',iconUrl);
}

getWeather(cityname);
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('.icon');
const captionDesc = document.querySelector('#icon-name');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=-22.5202&lon=-44.1170&units=metric&appid=6b6d5850f9d5c520a8547938ca00b782";
const placeName = document.querySelector('#city-name');
const speed = document.getElementById("speed");
const windC = document.getElementById("windchill");

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

function displayResults(weatherData) {
    let temperature = weatherData.main.temp; //celsius
    let velocity = weatherData.wind.speed * 3.6; //kmh

    currentTemp.textContent = temperature.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  placeName.textContent = weatherData.name;
  speed.textContent = velocity.toFixed(0);
//windChill
let fahr = tempConvert(temperature);
let mph = velConvert(velocity);

if (fahr >= 50 ){
    if (velocity <= 3) {
        windC.textContent = Math.round(windChill(fahr, mph), -1) 
    }
    else{
        windC.textContent = "N/A"
    }
}
else{
    windC.textContent = "N/A"
}
}


function velConvert(kmh){ //mph
   const velMph = kmh * 0.62137119248733;
   return velMph;
}

function tempConvert(celsius){//fahr
    const fahr = celsius * 1.8 + 32;
    return fahr;
}

function windChill(temperature, velocity){
const wind_c = 35.74 + (0.6215 * temperature) - 35.75 * (velocity ** 0.16) + 0.4275 * temperature * (velocity ** 0.16);
return wind_c;
}

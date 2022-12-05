// WEATHER
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('.icon');
const captionDesc = document.querySelector('#icon-name');
const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=32.4207&lon=-104.2288&units=imperial&cnt=3&appid=f4342634d1d9263d2c7801dc80233d6c";
const placeName = document.querySelector('#city-name');

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
    let temperature = weatherData.main.temp; //farh
    currentTemp.textContent = temperature.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  placeName.textContent = weatherData.name;
}

// DATE
let d = new Date();

let year = document.querySelector(".currentyear").textContent = d.getFullYear();

let last_update = document.querySelector("#jscript").textContent = document.lastModified;
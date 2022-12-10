// WEATHER
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('.icon');
const captionDesc = document.querySelector('#icon-name');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=32.4207&lon=-104.2288&units=imperial&appid=f4342634d1d9263d2c7801dc80233d6c";
const placeName = document.querySelector('#city-name');
const request = document.querySelector("#num-request");

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
    let temperature = weatherData.list[0].main.temp; //farh
    currentTemp.textContent = temperature.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  placeName.textContent = weatherData.city.name;
}
let numRequest = Number(window.localStorage.getItem("request-ls"));
      numRequest++;
      localStorage.setItem("request-ls", numRequest);
      request.textContent = numRequest;
// PICTURES
let foodImage = document.querySelectorAll("#food-img[data-src]");
let foodImage1 = document.querySelectorAll("#food-img1[data-src]");
let localImage = document.querySelectorAll("#area1[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    foodImage.forEach((img) => {
      observer.observe(img);
    });
    foodImage1.forEach((img) => {
      observer.observe(img);
    });
    localImage.forEach((img) => {
      observer.observe(img);
    });
}else{
  foodImage.forEach((img) => {
    observer.observe(img);
  });
  foodImage1.forEach((img) => {
    observer.observe(img);
  });
  localImage.forEach((img) => {
    observer.observe(img);
  });
}

// DATE
let d = new Date();

let year = document.querySelector(".currentyear").textContent = d.getFullYear();

let last_update = document.querySelector("#jscript").textContent = document.lastModified;
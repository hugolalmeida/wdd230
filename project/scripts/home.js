// WEATHER
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('.icon');
const captionDesc = document.querySelector('#icon-name');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=32.4207&lon=-104.2288&units=imperial&appid=f4342634d1d9263d2c7801dc80233d6c";
const placeName = document.querySelector('#city-name');
const request = document.querySelector("#num-request");
const humidity = document.querySelector("#humidity");
const weatherIcon1 = document.querySelector('.icon1');
const weatherIcon2 = document.querySelector('.icon2');
const weatherIcon3 = document.querySelector('.icon3');
const day1 = document.querySelector(".icon-name1");
const day2 = document.querySelector(".icon-name2");
const day3 = document.querySelector(".icon-name3");
const d1 =document.querySelector("#data1");
const d2 =document.querySelector("#data2");
const d3 =document.querySelector("#data3");
const c_date = document.querySelector("#city-date");


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
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
      dateStyle: "full"
    }).format(d);
    c_date.textContent = fulldateUK;
    currentTemp.textContent = temperature.toFixed(0);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
    
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[4].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[11].weather[0].icon}.png`;
    const iconsrc3= `https://openweathermap.org/img/w/${weatherData.list[21].weather[0].icon}.png`;
    const desc = weatherData.list[0].weather[0].description;
    
    const desc1 = weatherData.list[4].main.temp;
    const desc2 = weatherData.list[11].main.temp;
    const desc3 = weatherData.list[21].main.temp;

d1.textContent = weatherData.list[4].dt_txt;
d2.textContent = weatherData.list[11].dt_txt;
d3.textContent = weatherData.list[21].dt_txt;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherIcon1.setAttribute('src', iconsrc1);
  weatherIcon1.setAttribute('alt', desc1);
  weatherIcon2.setAttribute('src', iconsrc2);
  weatherIcon2.setAttribute('alt', desc2);
  weatherIcon3.setAttribute('src', iconsrc3);
  weatherIcon3.setAttribute('alt', desc3);
  captionDesc.textContent = desc;
  day1.textContent = desc1;
  day2.textContent = desc2;
  day3.textContent = desc3;
  placeName.textContent = weatherData.city.name;
  humidity.textContent = weatherData.list[0].main.humidity
}
let numRequest = Number(window.localStorage.getItem("request-ls"));
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
// MENU
function toggleMenu () {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
// DATE
let d = new Date();

// let year = document.querySelector(".currentyear").textContent = d.getFullYear();

let last_update = document.querySelector("#jscript").textContent = document.lastModified;
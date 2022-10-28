function toggleMenu () {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
let d = new Date();

let year = document.querySelector(".currentyear").textContent = d.getFullYear();

let last_update = document.querySelector("#jscript").textContent = document.lastModified;

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(d);

let current_date = document.getElementById("current-day").textContent = fulldateUK;

        
    
let wday = d.getDay();
if (wday === 1){
    document.getElementById("banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
else if(wday ===2){
    document.getElementById("banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

let imagesToLoad = document.querySelectorAll(".holder-img[data-src]");
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
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
}else{
imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
const daysDisplay = document.querySelector(".days")
const visitsDisplay = document.querySelector(".visits");
const dayStr = document.querySelector(".day");
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

const dayNow = Date.now();
// let numDay = 1;
if (d.setDate(d.getDate() + 1)){
    window.localStorage.clear();
}  

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits + 1;
} else{
    visitsDisplay.textContent = numVisits + 1;
    // numDay++;
}
// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// daysDisplay.textContent = numDay;
daysDisplay.textContent = Math.round(dayNow / 86400000);

if (dayNow === 1){
dayStr.textContent ="day" 
}else{
dayStr.textContent ="days"  
}

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
const daysDisplay = document.querySelector(".visits");
const start = new Date("11/04/2022");
// get the stored value in localStorage
let numDays = Number(window.localStorage.getItem("day-ls"));
numDays = d.getTime() - start.getTime();
  //display the millsescond in days
daysDisplay.textContent = Math.ceil(numDays / (1000 * 3600 * 24));

// store the new number of visits value
localStorage.setItem("day-ls", current_date);


let visit = Number(window.localStorage.getItem("visit-ls"));
visit++;
localStorage.setItem("visit-ls", visit);

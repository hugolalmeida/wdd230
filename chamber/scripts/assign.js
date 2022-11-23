// DISPLAY CARDS

const requestURL = 'https://run.mocky.io/v3/902db453-c87a-416f-937a-d0695c71f40d';
const cards = document.querySelector('.card-grid');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companie = jsonObject['companies'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let random = companie[(Math.random() * companie.length) | 0];
    let random1 = companie[(Math.random() * companie.length) | 0];
    displayCompanies(random);
    displayCompanies1(random1);
  });

const display = document.querySelector(".flex1");
const display1 = document.querySelector(".flex2")

// COMPLETE
function displayCompanies(companie){
    // Create elements to add to the document
  let h4 = document.createElement('h4');
  let p = document.createElement("p");
  let portrait = document.createElement('img');   
  // Add the value to the elements 
  h4.setAttribute('class', "subtittle");
  h4.textContent = `${companie.name}`;
  p.textContent = `Membership Level: ${companie.membership}`
  
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', companie.imageurl);
  portrait.setAttribute('alt', `Icon of ${companie.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  display.appendChild(h4);
  display.appendChild(portrait);
  display.appendChild(p);
  
}
function displayCompanies1(companie){
  // Create elements to add to the document
let h4 = document.createElement('h4');
let p = document.createElement("p");
let portrait = document.createElement('img');   
// Add the value to the elements 
h4.setAttribute('class', "subtittle");
h4.textContent = `${companie.name}`;
p.textContent = `Membership Level: ${companie.membership}`

// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
portrait.setAttribute('src', companie.imageurl);
portrait.setAttribute('alt', `Icon of ${companie.name}`);
portrait.setAttribute('loading', 'lazy');

// Add/append the section(card) with the h2 element
display1.appendChild(h4);
display1.appendChild(portrait);
display1.appendChild(p);

}


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

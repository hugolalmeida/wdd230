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

document.getElementById("date").value = fulldateUK;


// Grid Button and List Button
const gridbutton = document.querySelector("#but-grid");
const listbutton = document.querySelector("#but-list");
const display = document.querySelector("div");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("card-grid");
	display.classList.remove("card-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("card-list");
	display.classList.remove("card-grid");
}

// DISPLAY CARDS

const requestURL = 'https://github.com/hugolalmeida/wdd230/blob/main/chamber/json/data.json';
const cards = document.querySelector('.card-grid');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companie = jsonObject['companies'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    companie.forEach(displayCompanies);
  });



// INCOMPLETE
function displayCompanies(companie){
    // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let p = document.createElement("p");
  let portrait = document.createElement('img');
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");   
  // Add the value to the elements 
  h2.textContent = `${companie.name}`;
  p.textContent = `Membership Level: ${companie.membership}`
  p1.textContent = `${companie.adress}`
  p2.textContent = `${companie.phone}`
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', companie.imageurl);
  portrait.setAttribute('alt', `Icon of ${companie.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(portrait);
  card.appendChild(p1);
  card.appendChild(p2);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

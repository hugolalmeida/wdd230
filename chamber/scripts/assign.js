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
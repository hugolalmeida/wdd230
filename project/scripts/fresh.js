const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const options = document.querySelector('.card-grid');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companie = jsonObject['genus'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    companie.forEach(displayCompanies);
  });

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
  document.querySelector('.card-grid').appendChild(card);
}

// PICTURE
let drinkImage = document.querySelectorAll("#drink[data-src]");
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
    drinkImage.forEach((img) => {
      observer.observe(img);
    });
}else{
  drinkImage.forEach((img) => {
    observer.observe(img);
  });
}

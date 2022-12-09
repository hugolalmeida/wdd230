const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const options = document.querySelector('#fruit-options');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companie = jsonObject;
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    companie.forEach(displayFruit);
  });

  function displayFruit(fruit){
    // Create elements to add to the document
  let section = document.createElement("section");
  let label = document.createElement("label");
  let card = document.createElement("input");
  card.setAttribute("type", "checkbox");
  card.setAttribute("name", "fruit_options");
  card.setAttribute("onclick", "return validateBox()");

  let fruitName = `${fruit.name}`;
  // Add the value to the elements 
  label.textContent = fruitName;
  // Add/append the section(card) with the h2 element
 section.appendChild(label);
  section.appendChild(card);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('#fruit-options').appendChild(section);
}
// VALIDATE THREE CHECKBOXES
const checkboxes = document.getElementsByName("fruit_options");
function validateBox(){
    
    let numberOfCheckedItems = 0;  
    for(let i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 3)  
    {  
        alert("You can't select more than three fruits!");  
        return false;  
    }  
}
// ITEMS BOX NEED TO COMPLETE THIS AND MAKE TH CSS
function itemBox(){
let field = createElement("fieldset");
field.setAttribute("id", "item-field");
let legend = createElement("legend");
let userName= document.getElementsByName("name");
let userEmail= document.getElementsByName("email");
let userPhone= document.getElementsByName("phone");

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

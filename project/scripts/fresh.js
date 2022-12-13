
const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const options = document.querySelector('#fruit-options');
const userName= document.querySelector(".name");
const userEmail= document.querySelector(".email");
const userPhone= document.querySelector(".phone");
const checkboxes = document.getElementsByName("fruit_options");
const getButton = document.querySelector(".submitBtn");
const d = new Date();

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const fruitList = jsonObject;
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    fruitList.forEach(displayFruit);
    
    getButton.addEventListener('click', function(){
      let selectedCheckBoxes = selectedBoxes(this.form);
      let res = [];
      let carbohydratesList = [];
      let proteinList = [];
      let fatList = [];
      let sugarList = [];
      let caloriesList = [];
      fruitList.forEach(function(r,k){
            if(selectedCheckBoxes.includes(r.name)) {
            res.push(r.name);
              
              carbohydratesList.push(r.nutritions.carbohydrates);
              proteinList.push(r.nutritions.protein);
              fatList.push(r.nutritions.fat);
              sugarList.push(r.nutritions.sugar);
              caloriesList.push(r.nutritions.calories);
            
          }else{
            return false;
          }   
      })

      let myName = userName.value;
      userName.value = "";
      
      let myEmail = userEmail.value;
      userEmail.value = "";
      
      let myPhone = userPhone.value;
      userPhone.value = "";
      if (myName === ""){
        return false;
      } else if (myEmail === ""){
        return false;
      } else if (myPhone === ""){
        return false;
      } else if (selectedBoxes(this.form).length === 0){
        return false;
      }else{

      let field = document.getElementById("item-field");
      let sections = document.createElement("section");
      let legend = document.createElement("h4");
      let pName = document.createElement("p");
      let pEmail = document.createElement("p");
      let pPhone = document.createElement("p");
      let pTittle = document.createElement("p")
      let pFruits = document.createElement("p");
      let c_day = document.createElement("p");
      c_day.setAttribute("id", "date");
      let carbohydrates = document.createElement("p");
      carbohydrates.setAttribute("class", "fruit-attribute");
      let protein = document.createElement("p");
      protein.setAttribute("class", "fruit-attribute");
      let fat = document.createElement("p");
      fat.setAttribute("class", "fruit-attribute");
      let sugar = document.createElement("p");
      sugar.setAttribute("class", "fruit-attribute");
      let calories = document.createElement("p");
      calories.setAttribute("class", "fruit-attribute");
      let line = document.createElement("hr");
      let instruction = document.createElement("h4");
      instruction.setAttribute("id", "instruction");  
      const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
      }).format(d);
      let hour = d.getHours();
      let min = d.getMinutes();
      let sec = d.getSeconds();
  
      legend.textContent = "Request's Information";
      pName.textContent = `Name: ${myName}`;
      pEmail.textContent = `Email: ${myEmail}`;
      pPhone.textContent = `Phone: ${myPhone}`;
      pTittle.textContent = `Fruits: ${res.join(", ")} `;//
      c_day.textContent = `${fulldateUK} ${hour}:${min}:${sec} `;
      instruction.textContent = `Your drink was created and requested! Please wait for your drink.`
      carbohydrates.textContent = `Carbohydrates: ${sumAttributes(carbohydratesList)}`;
      protein.textContent = `Protein: ${sumAttributes(proteinList)}`;
      fat.textContent = `Fat: ${sumAttributes(fatList)}`;
      sugar.textContent = `Sugar: ${sumAttributes(sugarList)}`;
      calories.textContent = `Calories: ${sumAttributes(caloriesList)}`;
  
      field.appendChild(sections);
      sections.appendChild(legend);
      sections.appendChild(pName);
      sections.appendChild(pEmail);
      sections.appendChild(pPhone);
      sections.appendChild(pTittle);
      sections.appendChild(pFruits);
      sections.appendChild(line);
      sections.appendChild(carbohydrates);
      sections.appendChild(protein);
      sections.appendChild(fat);
      sections.appendChild(sugar);
      sections.appendChild(calories);
      sections.appendChild(c_day);
      sections.appendChild(instruction);
      // LOCALSTORAGE
      drinkStorage();
    } 
      })
  });
  
  function selectedBoxes(form) {
    let selectedBoxesArr = [];
    let inputFields = form.getElementsByTagName('input');
    let inputFieldsNumber = inputFields.length;
  
    for(let i=0; i<inputFieldsNumber; i++) {
      if(
        inputFields[i].type == 'checkbox' &&
        inputFields[i].checked == true
      ) selectedBoxesArr.push(inputFields[i].value);
    }
    return selectedBoxesArr;
  }

  function displayFruit(fruit){
    // Create elements to add to the document
  let section = document.createElement("section");
  let label = document.createElement("label");
  let card = document.createElement("input");
  card.setAttribute("type", "checkbox");
  card.setAttribute("name", "fruit_options");
  card.setAttribute("onclick", "return validateBox()");
  card.setAttribute("value", fruit.name);
  let fruitName = `${fruit.name}`;
  // Add the value to the elements 
  label.textContent = fruitName;
  // Add/append the section(card) with the h2 element
 label.appendChild(card);
  section.appendChild(label);
  // Add/append the existing HTML div with the cards class with the section(card)
 options.appendChild(section);
  
}


// VALIDATE THREE CHECKBOXES
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
  // ITEMS BOX complete but does not show the checked fruit names

  
// IMPOTANTS FUNCTIONS
    function drinkStorage(){
      let numRequest = Number(window.localStorage.getItem("request-ls"));
      numRequest++;
      localStorage.setItem("request-ls", numRequest);
    }

    function sumAttributes(attributeList){
      let total = 0;
      for(let i=0; i<attributeList.length;i++){
        
        total += attributeList[i];
      }
      
      
      return total;
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

// DATE


// let year = document.querySelector(".currentyear").textContent = d.getFullYear();

let last_update = document.querySelector("#jscript").textContent = document.lastModified;
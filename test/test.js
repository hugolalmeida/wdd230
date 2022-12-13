var recipes = [
	{
		name:"recipe1",
		ingredients:
			[
				{ingredient:"Cheese"},
				{ingredient:"Tomato"},
				{ingredient:"Garlic"}
			]
	},
	{
		name:"recipe2",
		ingredients:
			[
				{ingredient:"Cheese"},
				{ingredient:"Bacon"},
				{ingredient:"Paprika"},
				{ingredient:"Onion"}
			]
	},
	{
		name:"recipe3",
		ingredients:
			[
				{ingredient:"Cheese"},
				{ingredient:"Potato"},
				{ingredient:"Mayo"},
				{ingredient:"Beef"},
				{ingredient:"Garlic"},
				{ingredient:"Butter"}
			]
	}
];
//Test to retrieve single, specific entries:
//      console.log(recipes[1].ingredients[0].ingredient);


//Test to get/return the checked values of the checkboxes:
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

var getRecipesButton = document.getElementById('getRecipesButton');
getRecipesButton.addEventListener("click", function(){
    let selectedCheckBoxes = selectedBoxes(this.form);
    document.getElementById("output").innerHTML = "";
  var res = [];
  recipes.forEach(function(r,k){
    r['ingredients'].forEach(function(i,idx){
        if(selectedCheckBoxes.includes(i.ingredient)) {
        res.push(r);
      }
    });
  });
// remove duplicate then display the recipe with the ingredient
    res.filter(function(item, index){
      return res.indexOf(item) >= index;
    }).forEach(function(r){
      var ingredient = r.ingredients.map(function(r) { return r.ingredient}).join(", ");
      var name = r.name + " : "+ingredient ;
      var ul = document.getElementById("output");
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(name));
      ul.appendChild(li);
    });
});

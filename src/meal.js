function nameMenuItem() {

}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


//Function 1

function nameMenuItem(food) {
  return ("Delicious " + food)
}

nameMenuItem("pizza");

//Function 2

function createMenuItem(name, price, type) {
  obj = {
    name: name,
    price: price,
    type: type
  }
  return obj;
}


//Function 3

array1 = [];

function addIngredients(item, arr) {
  if (arr.indexOf(item) === -1) {
    return arr.push(item);
  }
}

//Function 4

function formatPrice(price) {
  return `$${price}`;
}

formatPrice("$10.99");

//Function 5

function decreasePrice(price) {
  return price * 0.90

}

//Function 6

function createRecipe(title, ingredients, type) {
  recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;

}
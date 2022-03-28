module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

//Function 1

function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;

}

//Function 2

function menuHasItem(menu, menuItem) {
  for (var i = 0; i < menu.length; i++) {
    if (menu[i] === menuItem) {
      return true;
    } else {
      return false;
    }
  }
}

//Function 3

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type == "breakfast" && !menuHasItem(restaurant.menus.breakfast, menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type == "lunch" && !menuHasItem(restaurant.menus.lunch, menuItem)) {
    restaurant.menus.lunch.push(menuItem)
  } else if (menuItem.type == "dinner" && !menuHasItem(restaurant.menus.dinner, menuItem)) {
    restaurant.menus.dinner.push(menuItem)
  }
}

//Function 4

function removeMenuItem(restaurant, menuItemName, menuType) {
  var menu = []
  if (menuType === "breakfast") {
    menu = restaurant.menus.breakfast;
  } else if (menuType === "lunch") {
    menu = restaurant.menus.lunch;
  } else if (menuType === "dinner") {
    menu = restaurant.menus.dinner;
  }
  var index = indexOfMenuItem(menu, menuItemName);
  if (index >= 0) {
    menu.splice(index, 1)
    return `No one is eating our ${menuItemName} - it has been removed from the ${menuType} menu!`
  } else {
    return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
  }
}

//Function 5

function indexOfMenuItem(menu, itemName) {
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === itemName) {
      return i;
    } else {
      return -1;
    }
  }
}
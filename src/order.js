module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
// Function 1

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

//Function 2

//HOF = Higher Order Function
//findIndex()
// returns the index of the first element in the array
// that passes the test; otherwise, it returns -1
//splice - remove items from an array
//parameters include an index and number of elements to remove from that index
//anonymous arrow function



function refundOrder(orderNumber, deliveryOrders) {
  var orderIndex = deliveryOrders.findIndex((orderItem) => orderItem.orderNumber === orderNumber)
  deliveryOrders.splice(orderIndex, 1)
}

//Function 3

function listItems(orders) {

  var itemlist = orders[0].item
  for (var i = 1; i < orders.length; i++) {
    itemlist += ', ' + orders[i].item
  }
  return itemlist;
}


//Function 4

//HOF
// .some()
//check if any array element or order is on the menu/list
//return true if array elements pass the test
//anonymous arrow function


function searchOrder(deliveryOrders, itemName) {
  return deliveryOrders.some(element => element.item === itemName);
}
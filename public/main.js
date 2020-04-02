var budgetController = (function() {
  var x = 23

  var add = function(a) {
    return x + a
  }

  return {
    publicTest: function(b) {
      console.log(add(b))
    }
  }
})()

var UIController = (function() {
  // code here
})()

//Seperation of Concerns - each part of the application should be interested in doing one thing independently

var controller = (function(budgetCtrl, UICtrl) {
  //code
})(budgetController)

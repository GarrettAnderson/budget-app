// Budget Controller
var budgetController = (function() {
  // code here
})()

// UI Controller
var UIController = (function() {
  // code here
})()

//Seperation of Concerns - each part of the application should be interested in doing one thing independently

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
  // document.querySelector('.add__btn').addEventListener('click', function() {
  //   console.log('Button was clicked')
  // })
})(budgetController, UIController)

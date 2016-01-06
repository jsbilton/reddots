angular.module('checkout')

.controller('CheckoutCtrl', function($scope, $stateParams, StoresService) {

  $scope.getOneStore = function() {
    var id = $stateParams.storeId;
    StoresService.getStore(id).then(function(data) {
      //  console.log('is this what you want?', data);
       $scope.stores = data;
     });
  };

  var card = new Card({
    // a selector or DOM element for the form where users will
    // be entering their information
    form: 'form', // *required*
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    formSelectors: {
        numberInput: 'input#number', // optional — default input[name="number"]
        expiryInput: 'input#expiry', // optional — default input[name="expiry"]
        cvcInput: 'input#cvc', // optional — default input[name="cvc"]
        nameInput: 'input#name' // optional - defaults input[name="name"]
    },

    width: 200, // optional — default 350px
    formatting: true, // optional - default true

    // Strings for translation - optional
    messages: {
        validDate: 'valid\ndate', // optional - default 'valid\nthru'
        monthYear: 'mm/yyyy', // optional - default 'month/year'
    },

    // Default placeholders for rendered fields - optional
    placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'Full Name',
        expiry: '••/••',
        cvc: '•••'
    },

    // if true, will log helpful messages for setting up Card
    debug: false // optional - default false
});
  console.log('HELLO', document.querySelectorAll('#container-id'));
  // new Card({ form: 'form', container: '.card'});

});

app.controller('DashboardController',['$scope','$routeParams','ProductFactory','OrderFactory','CustomerFactory',function($scope,$routeParams,ProductFactory,OrderFactory,CustomerFactory){

  // default product show limit
  $scope.limit = 5;
  // change product limit on click
  $scope.changelimit = function(){
    $scope.limit+= 5;
  }
  // functions to get data
  function getProducts(){
    ProductFactory.get_products(function(data){
      $scope.products = data;
    })
  }
  function getOrders(){
    OrderFactory.getOrders(function(data){
      $scope.orders = data;
    })
  }
  function getCustomers(){
    CustomerFactory.getusers(function(data){
      $scope.customers = data;
    })
  }

  // provoke functions
  getProducts();
  getOrders();
  getCustomers();


  // CREATEDAT minus CURRENT DATE

  // takes in an argument of createdAt
  $scope.dateDiff = function(firstDate){
    //var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    // makes firstDate (createdAt) to a date object
    var dateone = new Date(firstDate);
    // gets the current date
    var datetwo = new Date()
    // dateone - datetwo = miliseconds
    var diffDays = Math.round(Math.abs((dateone - datetwo)));
    // miliseconds in hours
    var hours = Math.round((diffDays/(1000*60*60))%24);
    // if hours is greater than 24 convert hours to days;
    // change if statements, depends on what is needed to be on the html page
    if(hours >= 24){
      return Math.floor(hours / 24) + ' days';
    }
    return hours + ' hours';
  }

}])

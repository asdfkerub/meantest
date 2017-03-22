app.controller("OrderController",['$scope','$routeParams','OrderFactory','ProductFactory','CustomerFactory',function($scope,$routeParams,OrderFactory,ProductFactory,CustomerFactory){

  // get all customers
  function get_customers(){
    CustomerFactory.getusers(function(data){
      $scope.customers = data;
    })
  }
  // get all products
  function get_products(){
    ProductFactory.get_products(function(data){
      $scope.products = data;
    })
  }
  // get all orders
  function get_orders(){
    OrderFactory.getOrders(function(data){
      $scope.orders = data;
    })
  }
  // provoke functions
  get_customers();
  get_products();
  get_orders();

  // function to add an orders
  // data is from the form on the html, get_orders is a function
  $scope.addOrder = function(data){
    OrderFactory.addOrder(data,get_orders);
  }

}]);

app.controller("CustomerController",['$scope',"$routeParams",'CustomerFactory',function($scope,$routeParams,CustomerFactory){

  // add customer
  $scope.addCustomer = function(customer){
    CustomerFactory.addCustomer(customer);
    getCustomers();
  }
  // get all customer
  function getCustomers(){
    CustomerFactory.getusers(function(data){
      $scope.customers = data;
    })
  }
  getCustomers();
  // remove a customer
  $scope.rmCustomer = function(id){
    CustomerFactory.rmUser(id,getCustomers);
  }

}]);

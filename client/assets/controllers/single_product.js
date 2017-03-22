app.controller('SingleProduct',['$scope','$routeParams','ProductFactory',function($scope,$routeParams,ProductFactory){

  function get_single(id){
    ProductFactory.get_single(id,function(data){
      $scope.products = data;
    })
  }
  get_single($routeParams.id);

}]);

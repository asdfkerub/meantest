app.controller("ProductController",['$scope','$routeParams','ProductFactory',function($scope,$routeParams,ProductFactory){

  $scope.add_product = function(product){
    ProductFactory.new_product(product,getProducts);
    $scope.newProduct = {};
  }
  function getProducts(){
    ProductFactory.get_products(function(data){
      $scope.products = data;
    })
  }
  getProducts();

}]);

app.controller("SettingController",['$scope','$routeParams','ProductFactory',function($scope,$routeParams,ProductFactory){

  function getProducts(){
    ProductFactory.get_products(function(data){
      $scope.products = data;
    })
  }
  getProducts();
  $scope.editProduct = function(product,id){
    ProductFactory.editProduct(product,id,getProducts);
  }
  $scope.deleteProduct = function(id){
    ProductFactory.deleteProduct(id,getProducts);
  }

}]);

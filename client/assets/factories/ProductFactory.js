app.factory('ProductFactory',['$location','$http',function($location,$http){

  var factory = {};

  // Function to make a new product
  factory.new_product = function(product,callback){
    $http({
      url:'/products',
      method:'POST',
      data:product
    }).then(function(res){
      $location.url('/products');
      callback();
    },function(res){
      console.log(res);
    })
  }
  // Function to get all products
  factory.get_products = function(callback){
    $http({
      url:'/products',
      method:'GET',
    }).then(function(res){
      callback(res.data);
    })
  }
  // Function to get ONE product
  factory.get_single = function(id,callback){
    $http({
      url: '/products/' + id,
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    },function(res){
      cosole.log(res);
    })
  }
  // Function to edit a product
  factory.editProduct = function(product,id,callback){
    $http({
      url: '/products/' + id,
      method : 'PUT',
      data: product
    }).then(function(res){
      $location.url('/setting');
      callback()
    },function(res){
      console.log(res);
    })
  }
  // Function to delete a product
  factory.deleteProduct = function(id,callback){
    $http({
      url: '/products/' + id,
      method : 'DELETE'
    }).then(function(res){
      callback();
    })
  }

  return factory;

}]);

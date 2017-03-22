app.factory("OrderFactory",['$location','$http',function($location,$http){

  var factory = {};

  factory.getOrders = function(callback){
    $http({
      url: '/orders',
      method: 'GET',
    }).then(function(res){
      callback(res.data);
    })
  }

  factory.addOrder = function(data,callback){
    $http({
      url : '/orders',
      method : 'POST',
      data: data
    }).then(function(res){
      $location.url('/orders');
      callback();
    },function(res){
      console.log(res);
    })
  }

  return factory;

}]);

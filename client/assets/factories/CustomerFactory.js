app.factory("CustomerFactory",['$location','$http',function($location,$http){

  var factory = {};

  factory.getusers = function(callback){
    $http({
      url:'/customers',
      method: 'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.addCustomer = function(customer){
    $http({
      url:'/customers',
      method:'POST',
      data:customer
    }).then(function(res){
      $location.url('/customers')
    },function(res){
      console.log(res);
    })
  }
  factory.rmUser = function(id,callback){
    $http({
      url: '/customers/' + id,
      method: 'DELETE'
    }).then(function(res){
      callback();
    })
  }

  return factory;

}]);

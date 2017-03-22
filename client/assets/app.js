var app = angular.module('app',["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl : "partials/dashboard.html",
      controller : "DashboardController"
    })
    .when("/customers",{
      templateUrl : "partials/customers.html",
      controller : "CustomerController"
    })
    .when("/products",{
      templateUrl : "partials/products.html",
      controller : "ProductController"
    })
    .when('/products/:id',{
      templateUrl : "partials/single_product.html",
      controller : "SingleProduct"
    })
    .when('/setting',{
      templateUrl : "partials/setting.html",
      controller : "SettingController"
    })
    .when('/orders',{
      templateUrl : "partials/orders.html",
      controller : "OrderController"
    })
})

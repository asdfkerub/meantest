var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// Customer BluePrint
var CustomerSchema = mongoose.Schema({
  name: {type:String}
},{timestamps:true});

// Product Blueprint
var ProductSchema = mongoose.Schema({
  name: {type:String, required:true},
  image: {type:String},
  description: {type:String},
  quantity : {type:String}
},{timestamps:true});

// Order Blueprint, takes in customer ID and product ID
var OrderSchema = mongoose.Schema({
  customer: {type:Schema.Types.ObjectId, ref: 'Customer'},
  product: {type:Schema.Types.ObjectId, ref: 'Product'},
  quantity : {type:Number}
},{timestamps:true});

mongoose.model('Customer',CustomerSchema);
mongoose.model('Product',ProductSchema);
mongoose.model('Order',OrderSchema);

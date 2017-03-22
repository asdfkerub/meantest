var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
var Order = mongoose.model('Order');

module.exports = {
  // Route for getting all customers
  getcustomers : function(req,res){
    Customer.find({},function(err,data){
      if(err){
        res.status(400).send("Something went wrong.");
      }
      res.json(data);
    })
  },
  // Route for creating a new customer/user
  createuser: function(req,res){
    var customer = new Customer(req.body);
    customer.save(function(err,data){
      if(err){
        res.status(400).send("Error while creating a new customer.");
      }
      res.sendStatus(200);
    })
  },
  // Route for deleting a user/customer
  deleteuser: function(req,res){
    Customer.findOne({_id:req.params.id},function(err,data){
      if(data == null){
        res.status(400).send("No friend Found");
      }
      data.remove();
      res.status(200).send('Successfully removed a user.');
    })
  },
  // Route for getting all products
  get_products: function(req,res){
    Product.find({},function(err,data){
      if(err){
        res.status(400).send("Theres an error while attempting to get all the products");
      }
      res.json(data);
    })
  },
  // Route for a new product
  new_product: function(req,res){
    var product = new Product(req.body);
    product.save(function(err,data){
      if(err){
        res.status(400).send("Error while trying to create a new product");
      }
      res.sendStatus(200);
    })
  },
  // Route for getting a single product
  single_product: function(req,res){
    Product.findOne({_id:req.params.id},function(err,data){
      if(err){
        res.status(400).send("No Product Found");
      }
      res.json(data);
    })
  },
  // Route for editting a single product
  edit_product: function(req,res){
    Product.update({_id:req.params.id},req.body,function(err,data){
      if(err){
        res.status(400).send("Problem updating a product");
      }
      res.sendStatus(200);
    })
  },
  // Route for deleting a single product
  delete_products: function(req,res){
    Product.findOne({_id:req.params.id},function(err,data){
      if(data == null){
        res.status(400).send("No friend found");
      }
      data.remove();
      res.status(200).send("Successfully removed a product");
    })
  },
  // Route for getting all orders
  get_orders : function(req,res){
    Order.find().populate('customer').populate('product').exec(function(err,data){
      if(err){
        res.status(400).send("Error while trying to retrieve orders");
      }
      res.json(data);
    })
  },
  // Route for adding an order
  add_order : function(req,res){
    // new order that takes in customer ID and product ID
    var order = new Order({customer:req.body.customer,product:req.body.product,quantity:req.body.quantity});
    // save the new order
    order.save(function(err,data){
      if(err){
        res.status(400).send("Error while creating an order")
      }

      // Chaning the total amount of quantity saved in db
      // initialize an empty variable (quantity in DB)
      var total;
      // Find the product that the total of quantity need to change
      Product.findOne({_id:req.body.product}).exec(function(err,data){
        if(err){
          res.status(400).send("Error saving total quantity");
        }
        // changing total to original quantity minus how much quantity is in the order(form)
        total = data.quantity - req.body.quantity;
        // to prevent negative quantity
        if(total <=0){
          total = "Out of stock";
        }
        // Updating the DB of a product quantity to the new total quantity
        Product.update({_id:req.body.product},{$set:{quantity: total}}).exec(function(err,data){
          if(err){
            res.status(400).send("ERROR SUBTRACTING");
          }
        })
      })
      res.sendStatus(200);
    })
  }


}

var store = require("../controllers/store.js");

// store.XXXXXXX are from server/controllers/xxx.js
module.exports = function(app){
  app.get('/customers',store.getcustomers);
  app.post('/customers',store.createuser);
  app.delete('/customers/:id',store.deleteuser);
  app.get('/products',store.get_products);
  app.post('/products',store.new_product);
  app.get('/products/:id',store.single_product);
  app.get('/setting',store.get_products);
  app.put('/products/:id',store.edit_product);
  app.delete('/products/:id',store.delete_products);
  app.get('/orders',store.get_orders);
  app.post('/orders',store.add_order);

}

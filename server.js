var express = require('express'),
    path = require('path'),
    bp = require('body-parser'),
    root = __dirname,
    port = 8000,
    app = express();

app.use(express.static(path.join(root,"client")));
app.use(express.static(path.join(root,"bower_components")));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(port,function(){
  console.log('PORT:',port);
})

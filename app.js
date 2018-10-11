var express = require("express");
var todoController = require("./controllers/todoController");
//var ejs     = require("ejs");

var app = express();
app.set('view engine','ejs');
app.use(express.static('./public'));


todoController(app);


app.listen(3000,()=>{
    console.log("serever running on port 3000");
});


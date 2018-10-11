var express = require("express");
var bodyParser = require('body-parser');
var todoController = require("./controllers/todoController");
const digiRoute = require('./routes/route');
//var ejs     = require("ejs");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine','ejs');
app.use(express.static('./public'));
app.use('/', digiRoute);

//todoController(app);


app.listen(3000,()=>{
    console.log("serever running on port 3000");
});


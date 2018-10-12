//const Product = require('../models/product.model');
var nodemailer = require('nodemailer');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.index = function (req, res) {
    res.render('todo');
};

exports.queryFormSubmit = function (req, res) {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'digidutech@gmail.com',
               pass: 'digidu@9876'
           }
       });

    
    const mailOptions = {
        from: 'digidutech@gmail.com', // sender address
        to: req.body.email, // list of receivers
        subject: 'Digidu Enquiry', // Subject line
        html: '<p> Regards from digidu </p>'// plain text body
      };
    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });


};


exports.product_create = function(req,res){
    let product = new Product({
        name:req.body.name,
        price:req.body.price
    });

    product.save(function(err){
        if(err){
            return next(err);
        }
        res.send("product created successfully");
    });
}

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        console.log("req.params.id");
        if (err) return next(err);
        res.send(product);
    });
};

exports.product_update = function (req, res) {
    console.log(req.body);
    Product.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findOneAndRemove({_id:req.params.id}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
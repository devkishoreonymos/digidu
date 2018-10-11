var nodemailer = require('nodemailer');





module.exports = (app)=>{

    app.get('/',(req,res)=>{
        
        res.render('todo');
        console.log(req.route.path);
    });


    app.post('/form',(req,res)=>{
        console.log(req.body);
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'youremail@address.com',
                   pass: 'yourpassword'
               }
           });

        
           const mailOptions = {
            from: 'sender@email.com', // sender address
            to: 'to@email.com', // list of receivers
            subject: 'Subject of your email', // Subject line
            html: '<p>Your html here</p>'// plain text body
          };

    });

    app.put('/',(req,res)=>{

    });

    app.delete('/',(req,res)=>{

    });
}
module.exports = (app)=>{

    app.get('/',(req,res)=>{
        
        res.render('todo');
        console.log(req.route.path);
    });


    app.post('/',(req,res)=>{

    });

    app.put('/',(req,res)=>{

    });

    app.delete('/',(req,res)=>{

    });
}
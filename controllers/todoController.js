module.exports = (app)=>{

    app.get('/',(req,res)=>{
        
        res.render('todo');
        console.log(req.route.path);
    });


    app.post('/form',(req,res)=>{
        console.log(req.route.path);

    });

    app.put('/',(req,res)=>{

    });

    app.delete('/',(req,res)=>{

    });
}
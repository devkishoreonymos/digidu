module.exports = (app)=>{

    app.get('/todo',(req,res)=>{
        
        res.render('todo');
        console.log(req.route.path);
    });


    app.post('/todo',(req,res)=>{

    });

    app.put('/todo',(req,res)=>{

    });

    app.delete('/todo',(req,res)=>{

    });
}
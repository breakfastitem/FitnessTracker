module.exports= function(app,db){
    app.put("/api/workouts",(req,res)=>{
        console.log(req);
        res.sendStatus(200);
        
    });

    app.get("/api/workouts",(req,res)=>{
        db.Workout.find({}, function(err,data) {
            if(err) throw err;

            res.json(data);
        })
    });
    app.get("/api/workouts/range",(req,res)=>{
        db.Workout.find({}, function(err,data) {
            if(err) throw err;

            res.json(data);
        })
    });
}
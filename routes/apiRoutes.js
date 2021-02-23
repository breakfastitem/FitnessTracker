const mongoose = require("mongoose");

module.exports = function (app, db) {
    //Put Routes
    app.put("/api/workouts/:workoutId", (req, res) => {

        db.Workout.findOneAndUpdate({ _id: req.params.workoutId }, { $push: { exercises: req.body } }, (err, data) => {
            if (err) throw err;
            
            res.json(data);
        });
    });

    //Post routes
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body,(err,workout)=>{
            if(err) throw err;

            res.json(workout);
        });

       
    });

    //Get routes
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, function (err, data) {
            if (err) throw err;

            res.json(data);
        })
    });


    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, function (err, data) {
            if (err) throw err;

            res.json(data);
        })
    });
}
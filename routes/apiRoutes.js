const mongoose = require("mongoose");

module.exports = function (app, db) {
    app.put("/api/workouts/:workoutId", (req, res) => {

        db.Workout.findOneAndUpdate({ _id: req.params.workoutId }, { $push: { exercises: req.body } }, (err, data) => {
            if (err) throw err;
            console.log(data);
            res.json(data);
        });
    });


    app.post("/api/workouts", ({ body }, res) => {
        console.log(body);
        db.Workout.create(body);

        res.json(200);
    });

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
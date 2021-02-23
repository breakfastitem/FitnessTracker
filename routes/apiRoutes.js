
module.exports = function (app, db) {
    //Put Routes
    app.put("/api/workouts/:workoutId", (req, res) => {

        db.Workout.find({ _id: req.params.workoutId }, (err, data) => {
            if (err) throw err;

            data[0].exercises.push(req.body);
            data[0].totalDuration = data[0].totalDuration+req.body.duration;

            db.Workout.findOneAndUpdate({ _id: req.params.workoutId }, { exercises: data[0].exercises, totalDuration: data[0].totalDuration }, (errTwo, workout) => {
                if (errTwo) throw errTwo;

                res.json(workout);
            });


        });
    });

    //Post routes
    app.post("/api/workouts", ({ body }, res) => {
        let workoutOb = new db.Workout(body);

        db.Workout.create(workoutOb, (err, workout) => {
            if (err) throw err;

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
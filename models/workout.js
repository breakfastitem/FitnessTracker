const mongoose= require("mongoose");
const excerciseSchema = require("./excercise").Schema;
const Schema = mongoose.Schema;

const workoutSchema= new Schema({
    day:{
        type:Date,
        default: Date.now()
    },
    excercises: [{
       type:excerciseSchema
    }]

});

const WorkoutModel = mongoose.model("Workout",workoutSchema);

module.exports = WorkoutModel;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: false
        },
        reps: {
            type: Number,
            required: false
        },
        sets: {
            type: Number,
            required: false
        },
        distance: {
            type: Number,
            required: false
        }
    }],
    totalDuration: {
        type: Number,
        required:true,
        default: 0
    }

});

// workoutSchema.methods.totalDurationCalculator = function() {
//     let totalDuration=0;
//     this.exercises.forEach(exercise => {
//         totalDuration = exercise.duration+totalDuration;
//     });
  
//     return totalDuration;
//   };

const WorkoutModel = mongoose.model("Workout", workoutSchema);

module.exports = WorkoutModel;
const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    type:{
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true,
        unique:true
    },
    duration:{
        type: Number,
        required:true
    },
    weight: {
        type: Number,
        required:false
    },
    reps: {
        type: Number,
        required:false
    },
    sets: {
        type: Number,
        required:false
    },
    distance: {
        type:Number,
        required:false
    }

});

const ExcerciseModel = mongoose.model("Excercise",excerciseSchema);

module.exports = {Model: ExcerciseModel , Schema: excerciseSchema};
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hikeSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['easy', 'moderate', 'challenging', 'advanced'] },
    length: { type: Number, required: true },
    description: { type: String },
    categories: { type: String },
    // eventually add:
    // review: reviewSchema
    // user data of the person that created the hike? 
    // images!!! 
}, {
    timestamps: true
})


module.exports = mongoose.model('Hike', hikeSchema)
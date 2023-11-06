const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

const hikeSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ['Easy', 'Moderate', 'Challenging', 'Advanced'], default: 'Moderate' },
    routeType: { type: String, enum: ['Loop', 'Out and Back', 'Point to Point'], default: 'Out and Back' },
    length: { type: Number, required: true, min: 0.1, max: 999.9 },
    description: { type: String },
    categories: [{ type: String }],
    reviews: [reviewSchema],
    rating: [],
}, {
    timestamps: true
})


module.exports = mongoose.model('Hike', hikeSchema)
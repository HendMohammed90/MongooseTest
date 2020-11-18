const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a description"],
    },
    price: {
      type: Number,
      required: [true, "Please add a Price cost"],
    },
    category: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    numberInStock: {
      type: Number,
      min: 0,
      max: 255,
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    }
  }
);

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products ;
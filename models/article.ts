const mongoose = require("mongoose");

export interface Iarticle {
  name: string;
  description: string;
  imageUrl: string;
  userId: string;
  price: string;
}

const articleSchema : Iarticle = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Article", articleSchema);

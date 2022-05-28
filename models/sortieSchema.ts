const mongoose = require("mongoose");

export interface ISortie {
  name: string;
  description: string;
  imageUrl: string;
  userId: string;
  userPseudo: string;
  price: number;
  date: Date;
  lieu: string;
  lieu2: string;
  categorie: string;
  signalee: Boolean;
}

const sortieSchema : ISortie = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  userPseudo: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, required: true },
  lieu: { type: String, required: true },
  lieu2: { type: String, required: true },
  categorie: { type: String, required: false },
  signalee: { type: Boolean, required: true },
});

module.exports = mongoose.model("Sortie", sortieSchema);

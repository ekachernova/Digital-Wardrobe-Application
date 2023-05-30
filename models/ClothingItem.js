import mongoose from "mongoose";

const { Schema } = mongoose;

const clothingItemSchema = new Schema({
  title: { type: String },
  category: { type: String },
  colour: { type: String },
  season: { type: String },
  url: { type: String },
});

const ClothingItem =
  mongoose.models.ClothingItem ||
  mongoose.model("ClothingItem", clothingItemSchema);

export default ClothingItem;

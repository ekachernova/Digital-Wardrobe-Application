import mongoose from "mongoose";

const { Schema } = mongoose;

const clothingItemSchema = new Schema({
  clothingItem: {
    title: String,
    type: String,
    url: String,
  },
});

const ClothingItem =
  mongoose.models.ClothingItem ||
  mongoose.model("ClothingItem", clothingItemSchema);

export default ClothingItem;

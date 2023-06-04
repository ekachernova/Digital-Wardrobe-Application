import mongoose from "mongoose";

const { Schema } = mongoose;

const outfitSchema = new Schema({
  itemIds: [String],
});

const Outfit = mongoose.models.Outfit || mongoose.model("Outfit", outfitSchema);

export default Outfit;

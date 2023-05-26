import dbConnect from "../../../../lib/connect";
import ClothingItem from "@/models/ClothingItem";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(`### Recieved handler request with id: ${id}`);
  if (!mongoose.Types.ObjectId.isValid(id))
    return response.status(409).json({ msg: `Wrong id format: [${id}]` });

  if (request.method === "GET") {
    const item = await ClothingItem.findById(id);
    return response.status(200).json(item);
  }
  if (request.method === "PUT") {
    const itemToUpdate = await ClothingItem.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response.status(200).json(itemToUpdate);
  }
  if (request.method === "DELETE") {
    const itemToDelete = await ClothingItem.findByIdAndDelete(id);
    return response.status(200).json();
  }
}

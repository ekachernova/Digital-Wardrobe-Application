import dbConnect from "../../../../lib/connect";
import ClothingItem from "@/models/ClothingItem";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const item = await ClothingItem.findById(id);
    return response.status(200).json(item);
  }
  if (request.method === "PUT") {
    const itemToUpdate = await ClothingItem.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json(itemToUpdate);
  }
  if (request.method === "DELETE") {
    const itemToDelete = await ClothingItem.findByIdAndDelete(id);
    response.status(200).json(placeToDelete);
  }
}

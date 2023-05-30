import dbConnect from "@/lib/connect";
import ClothingItem from "@/models/ClothingItem";
import { inspect } from "util";

export default async function handler(req, res) {
  console.log(inspect(req.query));

  if (!(req.method == "POST" || req.method == "GET")) {
    console.log(`#### failed on method validation`);
    return res.status(400).json({ success: false });
  }

  await dbConnect();

  if (req.method === "POST") {
    const body = req.body;
    console.log("#### body: ", body);

    if (
      !body.title ||
      !body.category ||
      !body.colour ||
      !body.season ||
      !body.url
    ) {
      console.log("#### failed body validation: ", body);
      return res.status(400).json({ data: "data not found" });
    }

    try {
      const created = await ClothingItem.create(body);
      return res.status(201).json({ success: true, data: created });
    } catch (error) {
      console.log("#### error for req body: ", body);
      return res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    const filter = req.query.filter;

    try {
      const items = await ClothingItem.find().skip(0).limit(50);
      return res.status(201).json({ success: true, data: items });
    } catch (error) {
      console.log("#### error finding items", error);
      return res.status(400).json({ error: error.message });
    }
  }
}

import dbConnect from "@/lib/connect";
import ClothingItem from "@/models/ClothingItem";

export default async function handler(req, res) {
  console.log(`#### enter items handler with req: ${req.body.title}`);

  if (!(req.method == "POST" || req.method == "GET")) {
    console.log(`#### failed on method validation`);
    return res.status(400).json({ success: false });
  }

  await dbConnect();

  if (req.method === "POST") {
    const body = req.body;
    console.log("#### body: ", body);

    if (!body.title || !body.category || !body.url) {
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
    try {
      // TODO: implement pagination https://www.codementor.io/@arpitbhayani/fast-and-efficient-pagination-in-mongodb-9095flbqr
      const items = await ClothingItem.find().skip(0).limit(50);
      return res.status(201).json({ success: true, data: items });
    } catch (error) {
      console.log("#### error finding items", error);
      return res.status(400).json({ error: error.message });
    }
  }

  // Found the name.
  // Sends a HTTP success code
  // res.status(200).json({ data: `${body.title} ${body.category} ${body.url}` });
}

// export default async function handler(request, response) {
//   await dbConnect();

//   if (request.method === "GET") {
//     const places = await Place.find();
//     return response.status(200).json(places);
//   }
//   if (request.method === "POST") {
//     try {
//       const placeData = request.body;
//       const place = new Place(placeData);
//       await place.save();
//       return response.status(201).json({ status: "Place created." });
//     } catch (error) {
//       console.error(error);
//       return response.status(400).json({ error: error.message });
//     }
//   }
// }

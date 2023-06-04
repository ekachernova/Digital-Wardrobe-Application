import dbConnect from "@/lib/connect";
import Outfit from "@/models/Outfit";

export default async function handler(req, res) {
  if (!(req.method == "POST" || req.method == "GET")) {
    console.log(`#### failed on method validation`);
    return res.status(400).json({ success: false });
  }

  await dbConnect();

  if (req.method === "POST") {
    const body = req.body;
    const document = {
      itemIds: body,
    };
    console.log("#### body: ", body);

    try {
      const created = await Outfit.create(document);
      return res.status(201).json({ success: true, data: created });
    } catch (error) {
      console.log("#### error for req body: ", document);
      return res.status(400).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    const filter = req.query.filter;
    const view = req.query.view;

    try {
      const outfits = await Outfit.find().skip(0).limit(50);
      if (view === "full") {
        // outfits.map((outfit) => {
        //   const itemIds = outfit.itemIds;
        //   const items = ClosingItem.find({
        //     _id: { $in: itemIds },
        //   }).then((outfit.items = items));
        // });

        return res.status(200).json({ success: true, data: outfits });
      }

      return res.status(200).json({ success: true, data: outfits });
    } catch (error) {
      console.log("#### error finding items", error);
      return res.status(400).json({ error: error.message });
    }
  }
}

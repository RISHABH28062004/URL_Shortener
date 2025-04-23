import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const client = await clientPromise;
    const db = client.db("bytelinks");
    const collection = db.collection("messages");

    await collection.insertOne({ name, email, message, createdAt: new Date() });

    res.status(200).json({ message: "Message saved successfully!" });
  } catch (err) {
    console.error("MongoDB error:", err);
    res.status(500).json({ message: "Error saving to DB" });
  }
}

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    //store it in the database
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.wrsppj1.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(
        // "mongodb+srv://anshida:seiScLmPZcl9RDLB@cluster0.wrsppj1.mongodb.net/my-site?retryWrites=true&w=majority"
        connectionString
      );
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }
    const db = client.db("my-site");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.statsu(500).json({ message: "Stroing message failed!" });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;

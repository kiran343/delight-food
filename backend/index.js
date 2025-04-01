const express = require("express");
const app = express();
const port = process.env.PORT || 5002;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://kirankumar64397:kiran123@cluster0.wecz199.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const foodcollection = client.db("demo").collection("ship");
    app.post("/upload", async (req, res) => {
      const data = req.body;
      const result = await foodcollection.insertOne(data);
      res.send(result);
    });
    app.get("/foods", async (req, res) => {
      const foods = foodcollection.find();
      const result = await foods.toArray();
      res.send(result);
    });
    app.get("/fooding/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { id: new ObjectId(id) };
      const result = await foodcollection.findone(filter);
      res.send(result);
    });
    app.patch("/allproducts/:id", async (req, res) => {
      const id = req.params.id;
      const updatefooddata = req.body;
      const filter = { id: new ObjectId(id) };
      const updatedoc = {
        $set: {
          ...updatefooddata,
        },
      };
      const options = { upsert: true };
      const result = await foodcollections.updateone(filter, update, options);
      res.send(result);
    });
    app.delete("/food/id", async (req, res) => {
      const id = req.params.id;
      const filter = { id: new ObjectId(id) };
      const result = await foodcollections.deleteone(filter);
      res
        .status(200)
        .json({ success: true, message: "data delete successfully" });
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`connected to ${port}`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 5002;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://kirankumar64397:kiran123@cluster0.vyyhhtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
     const connect = client.db("demo").collection("pinny");
    app.post("/upload", async (req, res) => {
      const data = req.body;
      const result = await connect.insertOne(data);
      res.send(result);
    });
    app.get("/get", async (req, res) => {
      const products =await connect.find();
      const result = await products.toArray();
      res.send(result);
    });
    app.get("/fooding/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await connect.findOne(filter);
      res.send(result);
    });
    app.patch("/allproducts/:id", async (req, res) => {
      const id = req.params.id;
      const updatefooddata = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedoc = {
        $set: {
          ...updatefooddata,
        },
      };
      const options = { upsert: true };
      const result = await connect.updateOne(filter, updatedoc, options);
      res.send(result);
    })
    app.delete("/food/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await connect.deleteOne(filter);
      res
        .status(200)
        .json({ success: true, message: "data delete successfully" });
    })

     await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`connected to ${port}`);
});


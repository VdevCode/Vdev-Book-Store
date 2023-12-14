const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello bro");
});

//mongodb

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://mern-book:REzLr5mWyDm71f0y@cluster0.w8cwf8m.mongodb.net/?retryWrites=true&w=majority";

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const bookCollection = client.db("BookInventory").collection("books");

    //post
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });

    //get
    app.get("/all-books", async (req, res) => {
      const books = await bookCollection.find();
      const result = await books.toArray();
      res.send(result);
    });

    //patch - update
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id
      const updateBookData = req.body;
      const filter = {
        _id: new ObjectId(id),
      };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };

      const option = {
        upsert: true,
      };

      const result = await bookCollection.updateOne(filter, updateDoc, option);
      res.send(result);
    });


    //delete book
    app.delete(("/book/:id", async(req,res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await bookCollection.deleteOne(filter)
      res.send(result)

    }))


    // find by category
    app.get("/all-books", async(req,res) => {
      let query = {}
      if(req.query.category){
        query = {
          category: req.query.category
        }
      }

      const result = await bookCollection.find(query).toArray()
      res.send(result)
    })

    // single book
    app.get("/book/:id", async(req,res) => {
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await bookCollection.findOne(filter)
      res.send(result)
    })






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("listening on port: ", port);
});

require("./config");
const mongoose = require("mongoose");
const Products = require("./product");
const mongodb = require("mongodb");

const express = require("express");
const app = express();
app.use(express.json());
app.post("/create", async (req, res) => {
  console.log(req.body);
  let data = new Products(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.get("/list", async (req, res) => {
  let data = await Products.find();
  console.log(data);
  res.send(data);
});

app.put("/list", async (req, res) => {
  console.log(req.body);
  let data = await Products.updateOne(
    { name: "samsung" },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      },
    }
  );
  console.log(data);
  res.send(data);
});

app.delete("/list/:id", async (req, res) => {
  console.log(req.params);
  const data = await Products.deleteMany({
    _id: new mongodb.ObjectId(req.params.id),
  });
  // console.log(data);
  res.send(data);
});

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Products.find({
    $or: [
      { name: { $regex: req.params.key } },
      { email: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

app.listen(4100);

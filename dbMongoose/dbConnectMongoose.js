const {MongoClient} = require('mongodb')
const mongoose= require("mongoose");

// Connection URL
const url= 'mongodb://localhost:27017';
const client= new MongoClient(url);

// Database Name
const dbName = "e-comm";
const collectionName = 'products';


async function dbConnect()
{
  // Use connect method to connect to the server
    await client.connect();
    const db= client.db(dbName);
    const collection = db.collection(collectionName);
    console.log(collection);
    return collection;
  
}
module.exports= dbConnect;

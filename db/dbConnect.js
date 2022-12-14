const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'youtube';
const collectionName = 'playlist';


async function dbConnect() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return  collection;
 
}

module.exports=dbConnect;




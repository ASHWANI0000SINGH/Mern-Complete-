const mongoose=require("mongoose");

const dbName = "e-comm";
const collectionName = 'products';

const productSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,

});

 module.exports = mongoose.model('products', productSchema);

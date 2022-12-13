const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const findIndb = async () => {
    const Product = mongoose.model('products', productSchema);
    const data= await Product.find({name:'samsung'})
    console.log(data);
    
}
findIndb();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const deleteDb = async () => {
    const Product = mongoose.model('products', productSchema);
    const data= await Product.deleteMany({name:"max 100"});
    console.log(data);
    
}
deleteDb();

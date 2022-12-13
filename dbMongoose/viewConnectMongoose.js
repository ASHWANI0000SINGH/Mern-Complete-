const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}
saveInDB();

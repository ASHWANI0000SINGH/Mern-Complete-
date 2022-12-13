const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const updateDb = async () => {
    const Product = mongoose.model('products', productSchema);
    let data= await Product.updateOne(
        {name:"max 100"},
        {
          $set:  {name:"samsung"}
        }
    )
    console.log(data);
}
updateDb();

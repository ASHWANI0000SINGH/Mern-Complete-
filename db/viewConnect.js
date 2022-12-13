const dbConnect=require("./dbConnect")

const viewProducts=async()=>{
    const collection= await dbConnect();
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  }
  viewProducts();
  
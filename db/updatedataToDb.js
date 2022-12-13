const dbConnect= require("./dbConnect");

const updateData=async()=>{
    const collection=await dbConnect();
    const updateResult = await collection.updateOne(
        { name: "ajay" }, 
        { $set: { name: "aks" } });
    console.log('Updated documents =>', updateResult);
    
}
updateData();
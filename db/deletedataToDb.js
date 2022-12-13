const dbConnect= require("./dbConnect");

const deleteData=async()=>{
    const collection=await dbConnect();
        const deleteResult = await collection.deleteMany({name:"aks"});

        console.log('Deleted documents =>', deleteResult);
    
}
deleteData();
const dbConnect= require("./dbConnect");

const insertData=async()=>{
    const collection=await dbConnect();
    const result=await collection.insertMany(
        [
        {name:"anjali", age:"20",email:"anjali@gmail.com"},
        {name:"shashi", age:"30",email:"shashi@gmail.com"},
        ]
        
        )
    console.log(result);
}
insertData();
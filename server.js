import express from "express"

const app = express();

app.get("/",(req,res)=>{
    res.send("Api is running....");
})


app.listen(8000,()=>{
    console.log("Server is Running on port 8000");
})
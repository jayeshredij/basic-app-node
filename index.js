const express = require("express");
const app= express();

app.get("/",(req,res)=>{
    res.json([
        {
            id:1,
            name:"jayesh123",
            age:24
        },
        {
            id:2,
            name:"jayesh223",
            age:25
        },
        {
            id:3,
            name:"jayesh3",
            age:26
        },
        {
            id:4,
            name:"jayesh4",
            age:27
        },

    ])
});
app.listen(5500,()=>{
    console.log("app is running on 5500 port")
})
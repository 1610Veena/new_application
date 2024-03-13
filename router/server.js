const express = require("express");
const router = require("./router");
const bodyparser= require("body-parser");
const cors = require('cors');
const server = express();

server.use(router);
server.use(cors());
// const db = 
server.use(bodyparser.json()); // Parse JSON request bodies

//  server.get("/getData",(req,res)=>{
//     res.send("Heelo");
// })
// server.listen(8080,(err)=>{
//     if(err) console.log(err);
//     else console.log(`http://localhost:8080`);
// });
server.get("/getuser", (req, res) => {
    res.send("Hello");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
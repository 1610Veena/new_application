const {Mysequelize}= require("./Database");
const{INTEGER,STRING}=require("sequelize");

const table = Mysequelize.define(
    "users",
    {
        Id:{
           type:INTEGER,
           primaryKey:true,
           autoincrement:true,
        },
       fname:{
        type:STRING,
       },
       lname:{
        type:STRING,
       },
       email:{
        type:STRING,
       },
       password:{
        type:STRING,
       },
    },
    {timestamps:false,freezeTableName:true}
);
module.exports={table};
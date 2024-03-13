const sequelize = require("sequelize");

const PORT= 3306;
const HOST="127.0.0.1";
const USERNAME="root";
const PASS="Veena$755";
const DBNAME="application";

const Mysequelize =new sequelize(DBNAME,USERNAME,PASS,{
    port : PORT,
    host : HOST,
    dialect : "mysql"
});

module.exports={Mysequelize};
const express = require("express");
const app = express();
const Port = process.env.PORT || 3000;
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const path = require("path");

dotenv.config(path,'config.env');
const connectDB = require("./server/db/connection")
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.resolve(__dirname,"public/js")))

app.use(require("./server/routes/router"))



app.listen(Port,()=> console.log(`Server is Listening at Port ${Port}`));
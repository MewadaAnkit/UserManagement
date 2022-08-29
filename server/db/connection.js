const mongoose = require('mongoose');
const DB ='mongodb+srv://ankit:admin@cluster0.8omavvi.mongodb.net/users?retryWrites=true&w=majority'
mongoose.connect(DB,{
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
}).then(()=>{
   console.log("Connected  Successfull to The DB")
}).catch((err)=> console.log(err));

module.exports = require;

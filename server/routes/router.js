const express = require('express');
 const route = express.Router();
 const axios = require('axios')
const controller = require('../controller/controller')
route.get("/",(req,res)=>{
    //make a get request to the api users
    axios.get('https://userapi-1x2o.onrender.com/api/users')
      .then(function(response){
        //console.log(response)
        res.render("index",{users:response.data})
      })
   
})
route.get("/add_user",(req,res)=>{
    res.render("add_user")
})

route.get("/update_user",(req,res)=>{
    axios.get('https://userapi-1x2o.onrender.com/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    }).catch(err =>{
        res.send("some error is occured")
    })
    //res.render("update_user")
})



//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

//update

module.exports = route;

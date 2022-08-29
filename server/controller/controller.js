const userdb = require('../model/model');
//create and save new userr

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send(message,"Content Cannot be Empty")
        return;
      }
      const user = new userdb({
        name: req.body.name,
         email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
      })
      user.save(user)
      .then(data=>{
        //res.send(data)
        res.redirect("/");
      }).catch(err => console.log(err));
}

//retrieve and return all user
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id

        userdb.findById(id)
        .then(data =>{
            if(!data){
              res.status(404).send("No User Found")
            }else{
                res.send(data);
            }
        }).catch(err =>console.log("Data not found"))
    }else{
      userdb.find().then(user =>{
      res.send(user)
      }).catch(err => console.log(err));
    }
}

//update and identify user
exports.update = (req,res)=>{
     if(!req.body){
         return res.status(400).send(message,"Data to update cannot be empty")
     }
     const id = req.params.id;
     userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
     .then(data =>{
        if(!data){
            res.status(404).send("user not Found")
        }else{
            res.send(data)
        }

     }).catch(err => console.log(err))
}

//delete userr
exports.delete = (req,res)=>{

    


    const id = req.params.id;
    userdb.findByIdAndDelete(id)
    .then(data =>{
       if(!data){
           res.status(404).send("user not Found")
       }else{
           res.send("User Deleted Successfully ")
       }

    }).catch(err => console.log("Could Not Delete the user"))
}

//module.exports = require;
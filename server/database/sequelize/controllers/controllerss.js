const {  getAll,create,modify,remove,buycar}=require('../models/modelss.js')

module.exports={
    get:function(req,res){
        getAll((err,result)=>{
            err ? console.error(err) : res.send(result)
        })
    },
    add:function (req,res) {
      create(req.body, (err,result) => {
            err ? res.json(err) : res.send(result)
        })
    },
update:function(req,res){
    console.log(req.body)
    modify(req.params.id,req.body,(err,result)=> {
        err ? console.error(err) : res.send(result)
    })
},
fasekh:function(req,res){
    remove(req.params.id,(err,result)=>{
        err ? console.error(err) : res.send(result);
    })
},
create:function(req,res){
    buycar(req.body.name,req.body.email,req.body.adress,req.body.nameofcar,(err,result)=>{
        err ? console.error(err) : res.send(result)
    })
}
}
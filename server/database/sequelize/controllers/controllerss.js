const {  getAll,create,modify,remove}=require('../models/modelss.js')

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
    update: function(req, res) {
        modify(req.params.id, req.body, (err, result) => {  // Updated function name to `modify` for updating
            err ? console.error(err) : res.send(result);
        });
},
fasekh:function(req,res){
    remove(req.params.id,(err,result)=>{
        err ? console.error(err) : res.send(result);
    })
},

}
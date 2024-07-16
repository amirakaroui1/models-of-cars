const {getalluser,getuserbyid}=require('../models/modeluser')




module.exports={
    get:function(req,res){
        getalluser((err,result)=>{
            err ? console.error(err) : res.send(result)
        })
    },
    getone:function(req,res){
        getuserbyid(req.params.id,(err,result)=>{
            err ? console.error(err) : res.send(result)
        })
    }
}
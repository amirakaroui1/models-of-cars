const {connection}=require('../index.js')




module.exports={
    getalluser:function(callback){
        const sql ="SELECT * FROM users"
        connection.query(sql,(err,result)=>{
callback(err,result)
        })
    },
    getuserbyid:function(id,callback){
        const sql = `SELECT * FROM users WHERE iduser=${id}`
        connection.query(sql,id,(err,result)=>{
            callback(err,result)
        })
    }
}
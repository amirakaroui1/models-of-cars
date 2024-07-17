const {connection}=require('../index.js')



module.exports={
    getAll : function (callback){
        const sql = "SELECT * FROM cars"
        connection.query(sql,(err,result)=>{
            callback(err,result)
        })
    },
    create:function (body, callback){
const sql = `INSERT INTO cars set ?`
connection.query(sql,body,(err,result)=>{
        callback(err,result)
})
},
modify:function(body,id,callback){
    const sql ='UPDATE cars SET ? WHERE id=?'
    connection.query(sql,[body,id],(err,result)=>{
        callback(err,result)
    })
},
remove: function(id, callback) {
    const sql = `DELETE FROM cars WHERE id=?`;
    connection.query(sql, [id], (err, result) => {
        callback(err, result);
    });
},

}
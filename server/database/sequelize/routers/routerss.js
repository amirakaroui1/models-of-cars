const express=require('express')
const route = express.Router()
const {get,add,update,fasekh,create}=require('../controllers/controllerss.js')






route.get("/getAll",get)
route.post("/add",add)
route.put("/up/:id",update)
route.delete("/delete/:id",fasekh)
route.post("/ad/buy", create)







module.exports={route}
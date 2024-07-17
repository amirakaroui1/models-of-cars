const express=require('express')
const route = express.Router()
const {get,add,update,fasekh}=require('../controllers/controllerss.js')






route.get("/getAll",get)
route.post("/add",add)
route.put("/update/:id", update)
route.delete("/delete/:id",fasekh)








module.exports={route}
const { get, getone}=require('../controllers/controleruser.js')
const express = require('express')
const router = express.Router()


router.get('/users',get)
router.get('/getone/:id',getone)



module.exports={router}
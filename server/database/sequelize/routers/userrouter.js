const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/usercontroller.js');

router.post('/signup', signup);

module.exports = router;
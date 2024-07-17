const { createUser, getUserByEmail } = require('../models/usermodel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {
    signup: function (req, res) {
      const { name, email, password } = req.body;
      getUserByEmail(email, (err, result) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (result.length > 0) {
          return res.status(400).send('User already exists');
        }
        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
          if (err) {
            return res.status(500).send(err);
          }
          const newUser = {
            name,
            email,
            password: hashedPassword
          };
          createUser(newUser, (err, result) => {
            if (err) {
              return res.status(500).send(err);
            }
            res.status(201).send('Signup successful');
          });
        });
      });
    }
  };
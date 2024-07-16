// const config = require("./config.js");
const mysql = require('mysql2')

// create a database connection in your application using a Sequelize instance and the config file
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Root',
  database:"modelsofcars"
})

//verify your connection here !
connection.connect((err)=>{
 try {
    console.log('connected');
  } catch {
    console.log('err');
  }
})


// export your Model Phrase below
module.exports = {connection}
const express = require("express");
const cors = require("cors");
const connection = require('../server/database/sequelize/index.js')
const {route} = require('./database/sequelize/routers/routerss.js')
const router =require('./database/sequelize/routers/userrouter.js')
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/car',route)
app.use('/user',router)






app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const db = require("./models");
const cors = require('cors')

app.use(express.json()); 
app.use(cors());
// Routers
const postrouter = require('./routes/Posts');
app.use("/", postrouter); 


const port = 3000;
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on Port: - ${port}`);
  });
});

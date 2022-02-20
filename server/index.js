const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv')


dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE;
const PORT = process.env.PORT;


app.use(express.json());
const User = require("./model/userSchema")

mongoose
  .connect(DB, {
    // useNewUrlParse: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected successfully");
  }).catch((err) => console.log(err))


  app.use(require(`./router/auth`))



app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});

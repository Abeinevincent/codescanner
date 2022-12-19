const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const database = require("./models");

const ticketRoute = require("./routes/tickets");

app.use(express.json());
app.use(cors());
app.use("/api/tickets", ticketRoute);

// Configure sequelize to sync all models and create corresponding tables accordingly
database.sequelize.sync().then(() => {
  console.log("Db connection successful");
  app.listen(process.env.PORT || 8800, () => {
    console.log(`Backend server is listening at port 8800`);
  });
});

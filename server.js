require("dotenv").config();

const express = require("express");
const bookRoutes = require("./routes/bookRoutes.js");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/books", bookRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })

  .catch((err) => {
    console.log(err);
  });

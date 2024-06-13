require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Routes
const bookRoute = require("./routes/bookRoute.js");
const profileRoute = require("./routes/profileRoute.js");
const reviewRoute = require("./routes/reviewRoute.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookRoute);
app.use("/api", profileRoute);
app.use("/api", reviewRoute);

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

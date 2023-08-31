const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const dbConnect = require("./configuration/dbConfig");
const Router = require("./routes/route");
const PORT = process.env.PORT || 4000;
app.use(express.json());
dbConnect();

app.use("/api/v1", Router);
// app.post("/post", (req, res) => {
//   res.send("recieved post request");
// });
app.listen(PORT, () => {
  console.log("server listened");
});

//...........................................................................................
// const demo = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
// });

// const Demo = mongoose.model("Demot", demo);

// app.post("/post", async (req, res) => {
//   const name = req.body.name;
//   //   const newDemo = new Demo({ name });
//   //   const savedDemo = await newDemo.save();
//   const savedDemo = await Demo.create({ name });
//   res.send({
//     success: true,
//     message: savedDemo,
//   });
// });

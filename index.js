const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/libraryService")
  .then(() => {
    console.log("Database Connected successfully!");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

module.exports = mongoose;

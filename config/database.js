const mongoose = require("mongoose");

const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose.connect(db, () => {
  console.log("Database Connected...");
});
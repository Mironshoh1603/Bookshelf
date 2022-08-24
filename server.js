const env = require("dotenv").config({ path: "./config.env" });
require("./config/database");

const app = require("./middlewares/app");

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is listened on ${port} port!`);
});

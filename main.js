const express = require("express");
const app = express();
const PORT = 3001;
const routes = require("./routes/index");
app.set("view engine", "pug");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

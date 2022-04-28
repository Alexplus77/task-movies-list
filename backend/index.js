const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

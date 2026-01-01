
const express = require("express");
const routes = require("./src/routes/blogRoutes.js")
const dotenv = require("dotenv")

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/v1/blogs", routes);

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Blogs API is running 🚀");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

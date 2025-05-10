const express = require("express");
const app = express();
const articlesRouter = require("./routes/articles");

app.use(express.json()); 
app.use("/articles", articlesRouter); 

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

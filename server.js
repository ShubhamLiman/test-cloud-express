import express from "express";

const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("Hello, you are a baddie!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

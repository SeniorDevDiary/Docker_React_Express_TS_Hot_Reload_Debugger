import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("server  is running");

  let devVariable = 0;
  debugger;
  console.log("server: before 2", devVariable);
  debugger;
  devVariable = 1;
  debugger;
  console.log("server: after", devVariable);

  res.send("Hello from server :D :D");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

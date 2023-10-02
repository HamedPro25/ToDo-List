var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});

var Name = "";
task = [];
async function test() {
  task = [];
  await con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM tasks", function (err, result, fields) {
      if (err) throw err;

      //task.push(result[0].Name, result[0].Level, result[0].Progress);
      task = result;
      console.log(task);
    });
  });
  return task;
}

test();
console.log(task);

const express = require("express");
const cors = require("cors");

const app = express(); //create an Express application

app.use(cors());
app.use(express.json());
//const Name = task[0];
var Prg = task[2];
const lev = task[1];
var color = "";
if (lev == "Urgent") color = "#FC720A";
if (lev == "No Priority") color = "#00B959";
if (lev == "Medium Priority") color = "#00B2EA";
if (lev == "Low Priority") color = "#FFAF00";
if (lev == "Completed") {
  color = "#aaa";
  Prg = 100;
}

app.get("/message", (req, res) => {
  res.json({ Name: Name, Progress: Prg, Level: lev, Color: color });
}); // 3 . Create a GET route

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

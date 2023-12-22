const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


// The server must be connected first before you start the react code by using "npm start".
// To connect to the server, move to ../Project_Major/server and then type "node index.js"
// If you can see "Yeah, it is running", good to start the react code.

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ajh123456",
    database: "questionSystem",
});


app.post("/create", (req, res) => {
    
    const text = req.body.text;

    db.query(
    "INSERT INTO questions (text) VALUES (?)",
    [text], 
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
        }   
    );
});

app.get("/questions", (req, res) => {
    db.query("SELECT * FROM questions", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const text = req.body.text;
    db.query(
      "UPDATE questions SET text = ? WHERE id = ?",
      [text, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM questions WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen (3002, ()=> {
    console.log("Yeah, it is running");
});


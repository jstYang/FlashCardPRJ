const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hotdog123",
  database: "flashcard"

});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connection done");
});

app.post('/cards', (req, res) => {
  const cardNumber = req.body.cardNumber;
  const front = req.body.front;
  const back = req.body.back;


  const sql = 'INSERT INTO cards (id,front, back) VALUES (?, ?, ?)';
  db.query(sql, [cardFront, cardBack], (err, result) => {
    if (err) {
      console.error('Error inserting into database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Card saved successfully');
      res.status(200).send('Card saved successfully');
    }
  });
});


app.listen("8081", () => {
  console.log("Server is successfully running on port 8081");
});
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
  const cardFront = req.body.front;
  const cardBack = req.body.back;


  const sql = 'INSERT INTO cards (id,question, answer) VALUES (?, ?, ?)';
  db.query(sql, [cardNumber,cardFront, cardBack], (err, result) => {
    if (err) {
      console.error('Error inserting into database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Card saved successfully');
      res.status(200).send('Card saved successfully');
    }
  });
});

app.delete("/cards", (req, res) => {
  const deleteQuery = "DELETE FROM cards"; // Adjust the query based on your table structure
  const altertable = "ALTER TABLE cards AUTO_INCREMENT = 1";
  db.query(deleteQuery,altertable, (err, result) => {
    if (err) {
      console.error("Error deleting cards:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Deleted cards successfully");
      res.status(200).send("Cards deleted successfully");
    }
  });
});

app.listen("8081", () => {
  console.log("Server is successfully running on port 8081");
});
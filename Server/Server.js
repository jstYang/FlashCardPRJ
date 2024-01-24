const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "flashcard"
})


  //saving flashcard on database
  app.post('/flashcard', (req, res) => {
    const { cardFront, cardBack } = req.body;
  
    const sql = 'INSERT INTO cards (front, back) VALUES (?, ?)';
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
  
  app.listen(8081, () => {
    console.log(`Server is running on port`);
  });
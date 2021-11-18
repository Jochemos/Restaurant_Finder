require('dotenv').config();
const express = require("express");
const cors = require("cors");
/*const morgan = require('morgan'); */
const db = require('./db');
const app = express();

app.use(cors())
app.use(express.json());
/*
app.use(morgan("tiny"));

app.use((req, res, next) =>{
  console.log('yo how slow');
  next();
});
*/

//Otrzymanie wszystkich restauracji
app.get("/api/v1/restaurants", async (req, res) => {
  try{
  const results = await db.query("select * from restaurants");
  console.log(results);
  res.status(200).json({
    status: "success",
    results: results.rows.length,
    data:{
      restaurants: results.rows
    }
  })
} catch (err){
  console.log(`error...`);
}
});

//Otrzymanie restauracji
app.get("/api/v1/restaurants/:id", async (req, res) =>{
  console.log(req.params.id);

  try{
    const results = await db.query(`select * from restaurants where id = ${req.params.id}`);

    res.status(200).json({
      status: "success",
      data: {
        restaurants: results.rows[0],
      }
  });
  console.log(results.rows);
  } catch(err){
    console.log(err);
  }

  });


//Tworzenie restauracji
app.post("/api/v1/restaurants", async (req, res) =>{
  console.log(req.body);

  try{
    const results = await db.query(`INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3)`, [req.body.name, req.body.location, req.body.price_range]);

    console.log(results);

    res.status(201).json({
      status: "success",
      data: {
        restaurants: results.rows[0]
      }
    });

  } catch(err) {
    console.log(`error...`);
  }
});


//Aktualizacja restauracji
app.put("/api/v1/restaurants/:id", async (req, res)=>{

  try{
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    console.log(results);
    res.status(200).json({
      status: "success",
      data:{
        restaurants: results.rows[0]
      }
    });
  }catch(err){
    console.log(`error`);
  }

});


//Usuwanie restauracji
app.delete("/api/v1/restaurants/:id", async (req, res) =>{
  try{
    const results = await db.query("DELETE FROM restaurants where id = $1", [req.params.id]);

    console.log(results);

    res.status(204).json({
      status: "succes",
    })

  } catch(err) {
    console.log(`...error`);
  }

});


const port = process.env.PORT || 3002;

app.listen(port, () =>{
  console.log(`port is ${port}`);
});

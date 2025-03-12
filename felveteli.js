const express = require('express');
const cors = require('cors')
const app = express()
const bodyparser = require("body-parser")
const mysql = require("mysql")


app.use(cors());
app.use(bodyparser.json());

const db  = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        port:3006,
        password:"",
        database:"felveteli"
    }
);

app.get("/", (req, res) =>{
    res.send("Mukodik a szerver.")
});

app.get("/v", (req, res) => {
    const sql = "SELECT * FROM felveteli";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen(3000, () =>{
console.log("A teliolimpia szervere 3000 porton fut")
})


 
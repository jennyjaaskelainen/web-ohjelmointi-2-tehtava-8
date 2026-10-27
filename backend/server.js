require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/urheilijat", require("./routes/urheilijaRoutes"));

app.get("/", (req, res) => {
    res.send("Urheilijat API toimii!");
});

app.listen(3001, () => {
    console.log("Palvelin käynnissä portissa 3001");
});

const db = require("./db");

db.connect((err) => {
    if (err) {
        console.log("Tietokantayhteys päonnistui:", err.code);
    } else {
        console.log("Tietokantayhteys toimii!");
    }
});
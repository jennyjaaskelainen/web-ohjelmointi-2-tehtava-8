const urheilijaModel = require("../models/urheilijaModel");

const haeUrheilijat = (req, res) => {
    urheilijaModel.haeUrheilijat((err, results) => {
        if (err) {
            return res.status(500).json({ error: "Tietojen haku epäonnistui" });
        }

        res.json(results);
    });
};

const lisaaUrheilija = (req, res) => {
    urheilijaModel.lisaaUrheilija(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Urheilijan lisääminen epäonnistui" });
        }

        res.status(201).json({
            message: "Urheilija lisätty onnistuneesti",
            id: result.insertId
        });
    });
};

const poistaUrheilija = (req, res) => {
    urheilijaModel.poistaUrheilija(req.params.id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Urheilijan poistaminen epäonnistui "});
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Urheilijaa ei löytynyt" });
        }

        res.json({ message: "Urheilija poistettu onnistuneesti" });
    });
};

const muokkaaUrheilija = (req, res) => {
    urheilijaModel.muokkaaUrheilija(req.params.id, req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Urheilijan muokkaaminen epäonnistui" });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Urheilijaa ei löytynyt "});
        }

        res.json({ message: "Urheilijan tiedot päivitetty onnistuneesti" });
    });
};

module.exports = { haeUrheilijat, lisaaUrheilija, poistaUrheilija, muokkaaUrheilija };
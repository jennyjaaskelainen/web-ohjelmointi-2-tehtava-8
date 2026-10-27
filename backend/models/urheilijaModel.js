const db = require("../db");

const haeUrheilijat = (callback) => {
    db.query("SELECT * FROM urheilijat", callback);
};

const lisaaUrheilija = (urheilija, callback) => {
    const sql = `INSERT INTO urheilijat 
    (etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const arvot = [
        urheilija.etunimi,
        urheilija.sukunimi, 
        urheilija.kutsumanimi, 
        urheilija.syntymavuosi,
        urheilija.paino,
        urheilija.kuva,
        urheilija.laji,
        urheilija.saavutukset
    ];

    db.query(sql, arvot, callback);
};

const poistaUrheilija = (id, callback) => {
    db.query("DELETE FROM urheilijat WHERE id = ?", [id], callback);
};

const muokkaaUrheilija = (id, urheilija, callback) => {
    const sql = `UPDATE urheilijat SET 
    etunimi = ?, sukunimi = ?, kutsumanimi = ?,
    syntymavuosi = ?, paino = ?, kuva = ?, laji = ?, saavutukset = ?
    WHERE id = ?`;

    const arvot = [
        urheilija.etunimi,
        urheilija.sukunimi,
        urheilija.kutsumanimi,
        urheilija.syntymavuosi,
        urheilija.paino,
        urheilija.kuva,
        urheilija.laji,
        urheilija.saavutukset,
        id
    ];

    db.query(sql, arvot, callback);
};

module.exports = { haeUrheilijat, lisaaUrheilija, poistaUrheilija, muokkaaUrheilija };
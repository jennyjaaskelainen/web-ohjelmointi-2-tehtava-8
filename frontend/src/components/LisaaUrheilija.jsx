import { useState, useContext } from "react";
import { UrheilijaContext } from "../context/UrheilijaContext";

function LisaaUrheilija() {
    const { setUrheilijat } = useContext(UrheilijaContext);

    const [tiedot, setTiedot] = useState({
        etunimi: "",
        sukunimi: "",
        kutsumanimi: "",
        syntymavuosi: "",
        paino: "",
        kuva: "", 
        laji: "",
        saavutukset: ""
    });

    const muutaTietoja = (e) => {
        setTiedot({
            ...tiedot,
            [e.target.name]: e.target.value
        });
    };

    const lisaaUrheilija = async (e) => {
        e.preventDefault();

        const vastaus = await fetch("http://localhost:3001/urheilijat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tiedot)
        });

        if (vastaus.ok) {
            const haku = await fetch("http://localhost:3001/urheilijat");
            const data = await haku.json();
            setUrheilijat(data);
            alert("Urheilija lisätty!");
        } else {
            alert("Urheilijan lisääminen epäonnistui");
        }
    };

    return (
        <form className="card p-4 mb-4" onSubmit={lisaaUrheilija}>
            <h2>Lisää urheilija</h2>

            {Object.keys(tiedot).map((kentta) => (
                <div key={kentta}>
                    <label>{kentta}: </label>
                    <input
                    className="form-control"
                    type={kentta === "syntymavuosi" ? "date" : kentta === "paino" ? "number" : "text"}
                    name={kentta}
                    value={tiedot[kentta]}
                    onChange={muutaTietoja}
                    required
                    />
                </div>
            ))}

            <button type="submit" className="btn btn-success mt-3">
                Lisää urheilija
                </button>
        </form>
    );
    }

    export default LisaaUrheilija;

import { useState, useContext } from "react";
import { UrheilijaContext } from "../context/UrheilijaContext";

function MuokkaaUrheilija({ urheilija, sulje }) {
    const { setUrheilijat } = useContext(UrheilijaContext);
    const [tiedot, setTiedot] = useState({
        etunimi: urheilija.etunimi, 
        sukunimi: urheilija.sukunimi,
        kutsumanimi: urheilija.kutsumanimi,
        syntymavuosi: urheilija.syntymavuosi,
        paino: urheilija.paino,
        kuva: urheilija.kuva,
        laji: urheilija.laji,
        saavutukset: urheilija.saavutukset
    });

    const muutaTietoja = (e) => {
        setTiedot({
            ...tiedot,
            [e.target.name]: e.target.value
        });
    };

    const tallennaMuutokset = async (e) => {
        e.preventDefault();

        const vastaus = await fetch(
          `http://localhost:3001/urheilijat/${urheilija.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tiedot)
          }  
        );

        if (vastaus.ok) {
            const haku = await fetch("http://localhost:3001/urheilijat");
            const data = await haku.json();
            setUrheilijat(data);
            sulje();
            alert("Urheilijan tiedot päivitetty!");
        } else {
            alert("Tietojen päivittäminen epäonnistui");
        }
    };

    return (
        <form className="card p-3 mt-3" onSubmit={tallennaMuutokset}>
            <h3>Muokkaa urheilijaa</h3>

            {Object.keys(tiedot).map((kentta) => (
                <div key={kentta}>
                    <label>{kentta}: </label>
                    <input
                    className="form-control"
                     type={kentta === "syntymavuosi" ? "date" : kentta === "paino" ? "number" : "text"}
                     name={kentta}
                     value={tiedot[kentta] ?? ""}
                     onChange={muutaTietoja}
                     required
                     />              
                </div>
            ))}

            <button type="submit" className="btn btn-success mt-3">
                Tallenna muutokset
                </button>
            <button type="button" className="btn btn-secondary mt-2" onClick={sulje}>Peruuta</button>
        </form>
    );
}

export default MuokkaaUrheilija;
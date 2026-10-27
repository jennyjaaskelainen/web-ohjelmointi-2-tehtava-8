import { useContext } from "react";
import { UrheilijaContext } from "./context/UrheilijaContext";
import LisaaUrheilija from "./components/LisaaUrheilija";
import { useState } from "react";
import MuokkaaUrheilija from "./components/MuokkaaUrheilija";

function App() {
  const { urheilijat, setUrheilijat } = useContext(UrheilijaContext);
  const [muokattava, setMuokattava] = useState(null);

  const poistaUrheilija = async (id) => {
    const vastaus = await fetch(`http://localhost:3001/urheilijat/${id}`, {
      method: "DELETE"
    });

    if (vastaus.ok) {
      setUrheilijat(urheilijat.filter((urheilija) => urheilija.id !== id));
    } else {
      alert("Urheilijan poistaminen epäonnistui")
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      <h1 className="text-center mb-4">Urheilijat</h1>
      <p className="text-center mb-4">Urheilijoiden tietojen hallinta</p>
      <LisaaUrheilija />
      <h2 className="mt-4 mb-3">Lisätyt urheilijat</h2>
      {urheilijat.map((urheilija) => (
        <div key={urheilija.id} className="card p-4 mb-3">
          <h2 className="card-title mb3">
            {urheilija.etunimi} {urheilija.sukunimi}
            </h2>
            {urheilija.kuva && (
              <img
              src={urheilija.kuva}
              alt={`${urheilija.etunimi} ${urheilija.sukunimi}`}
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "250px" }}
              />
            )}
          <p className="card-text mb-2">
            <strong>Laji:</strong> {urheilija.laji}
            </p>
          <p className="card-text mb-3">
            <strong>Saavutukset:</strong> {urheilija.saavutukset}
            </p>
          <button className="btn btn-danger mb-2" onClick={() => poistaUrheilija(urheilija.id)}>
            Poista urheilija
          </button>
          <button className="btn btn-primary" onClick={() => setMuokattava(urheilija.id)}>
            Muokkaa urheilijaa
          </button>
          {muokattava === urheilija.id && (
            <MuokkaaUrheilija 
            urheilija={urheilija}
            sulje={() => setMuokattava(null)}
            />
          )}
          </div>
      ))}
    </div>
  );
}

export default App;
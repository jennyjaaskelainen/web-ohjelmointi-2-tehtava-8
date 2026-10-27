# Tehtävä 8 - Urheilijat 

Web-ohjelmointi 2 -kurssin harjoitustehtävä.

Sovelluksella voi hakea, lisätä, muokata ja poistaa urheilijoiden tietoja. 

## Käytetyt tekniikat

- Node.js ja Express
- MariaDB
- React ja ContextAPI
- Bootstrap 

## Tietokanna käyttöönotto 

1. Luo tietokanta suorittamalla projektin `urheilijat.sql`-tiedosto MariaDB:ssä esimerkiksi HeidiSQL:n avulla.

2. Luo projektin pääkansioon `.env`-tiedosto.

3. Lisää tiedostoon oman MariaDB-tietokantasi salasana:

```env
DB_PASSWORD=oma_salasana
```

Tietokantayhteys käyttää käyttäjätunnusta `root` ja tietokantaa `urheilijat`.

## Backendin käynnistäminen

Avaa terminaali projektin pääkansiosta ja suorita: 

```bash
npm install
node backend/server.js
```

Backend toimii osoitteessa http://localhost:3001.

## React-käyttöliittymän käynnistäminen

Avaa toinen terminaali ja suorita: 

```bash
cd frontend
npm install
npm run dev
```

Avaa selaimessa http://localhost:5173/.

## REST-rajapinta

- GET `/urheilijat` – Hae urheilijat
- POST `/urheilijat` – Lisää urheilija
- PUT `/urheilijat/:id` – Muokkaa urheilijaa
- DELETE `/urheilijat/:id` – Poista urheilija
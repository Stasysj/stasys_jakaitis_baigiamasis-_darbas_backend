# Baigiamasis darbas.'Internetinis forumas' BACKENDAS 👨‍🎓

Tai programos backend dalis. Nuoroda i frontendą [Git](https://github.com/Stasysj/stasys_jakaitis_baigiamasis_darbas_frontend)

Frontend dalyje su šia programa jūs glite užregistruoti, prijungti ir atjungti vartotoją. Prisijungę vartotojai gali kurti klausimus, atsakyti į užduotus klausymus, balsuoti už patikusius kalusymu ir atsakymus, matyti statistiką.

### Duomenų bazės struktūra struktura 🛠️

- 'Users' lentelė - joje saugoma įrašoma ir saugoma visa vartotojo informacija.
- 'Questions' lentelė - joje įrašoma ir saugoma visi klausimai ir jų statistine informacija
- 'Answers' lentelė - joje įrašoma ir saugoma visi atsakymai ir jų statistine informacija
- 'Likes' lentelė - joje įrašoma ir saugoma visa laikų informacija

### Įpatybės **💡**

- Naudojama MySql duomenų bazė
- Visos gaunamos formos turi validacijas.
- Slaptažodžiai koduojami su 'bcrypt'.

### Paleidimas🚇

❗Faile .env įrašote savo informacija apie serverį kuriame suksis duomenų bazę, duomenų bazės parametrus ir 'jwt secret'.

Pagrindinėje direktorijoje rasite pavyzdinį veikianti duomenų bazės sql failą:

'atsiskaitymas.sql'.

Pridedu ir duomenų bazės lentelių struktūros failą :

'planas.drawio.png'

```
npm install
npm start
```

Jei naudosite paliktą .env failą, programa pasileudžia jūsų naršyklėje [https://localhost:3001/](https://localhost:3000/)

### Naudota 📜

- NodeJs

Papildomai instaliuoti paketai:

- [bcryptjs 2.4.3](https://www.npmjs.com)
- [cors 2.8.5](https://www.npmjs.com/)
- [dotenv 16.0.1](https://www.npmjs.com)
- [express 4.18.1](https://www.npmjs.com/)
- [joi 17.6.0](https://www.npmjs.com)
- [jsonwebtoken](https://www.npmjs.com/)
- [morgan 1.10.0](https://www.npmjs.com)
- [mysql12](https://www.npmjs.com/)

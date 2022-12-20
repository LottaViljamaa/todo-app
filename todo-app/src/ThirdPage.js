import React from "react";


function ThirdPage() { 
    return (
      <div className="ohjeet-tietoa">
      <h2>Ohjeet:</h2>
      <ul className="ohjeet">
        <h3>Tehtävän lisääminen:</h3>
        <li>
          "Tehtävät" -välilehdellä pystyt lisäämään uusia tehtäviä kirjoittamalla 
          tehtävän nimen tekstikenttään ja painamalla sen jälkeen "Lisää" -nappia. Jokaisen 
          tehtävän minimipituus on yksi kirjain. Et siis voi lisätä tehtävälistaan tyhjää tehtävää.
        </li>
        <h3>Tagin lisääminen tehtävälle:</h3>
        <li>
          Jokaiselle tehtävälle pystyy lisäämään tehtävän lisäämisen yhteydessä haluamansa tagin. Tehtävälle ei ole 
          pakko lisätä tagia. 
        </li>
        <h3>Tehtävän muokkaaminen:</h3>
        <li>
          Jokaista lisättyä tehtävää pystyy muokkaamaan "Muokkaa" -napin kautta. Aukeavaan tekstikenttään
          pystyy muokkaamaan tehtävän nimeä. Toisessa tekstikentässä pystyy muokkaamaan tagia. Tehtävä päivittyy tehtävälistaan "Päivitä" -napilla. 
        </li>
        <h3>Tehtävän poistaminen:</h3>
        <li>
          Pystyt poistamaan haluamasi tehtävän "Poista" -napilla. 
        </li>
        <h3>Tehtävän liikuttaminen:</h3>
        <li>
          Jokaista tehtävää pystyy liikuttamaan tehtävälistalla alaspäin joko yhden pykälän tai koko tehtävälistan loppuun. 
        </li>
        <li>
        Tehtäviä voi myös liikuttaa ylöspäin joko yhden pykälän kerrallaan tai suoraan koko tehtävälistan alkuun. 
        </li>
      <h1>Sivun tekijä: Lotta Viljamaa</h1>
      <p>Tämä sivu on toteutettu REACT -kurssin harjoitustyönä</p>
      <h2>20.12.2021, Tampereen ammattikorkeakoulu</h2>
      </ul>
    </div>
  )
}

export default ThirdPage;
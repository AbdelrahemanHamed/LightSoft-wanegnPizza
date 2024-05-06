
   import "./angcheakout.css"
   import image from "../../../images/Angebote image2/Angebot-20.png"
  import image2 from "../../../images/Angebote image2/item33.png"
  import image3 from "../../../images/Angebote image2/download.png"
  import image4 from "../../../images/Angebote image2/items.png"
  import Footer from "../../../components/Footer/Footer"
const Ang = () => {
  
  return (
    <div className="ang">
        <div className="inner">
            <img src={image} alt="" />
            <div className="data">
                <h1>Pizza & Kebap Angebote</h1>
                <h3>Angebot-Nr. 20</h3>
                <p>1x Kleine Pizza (28 cm) nach Wunsch </p>
                <p>1x Kebap</p>
                <p>1x Flasche Cola 1.0L</p>
                <p className="harte"><span>&#x2764; </span>  Allergene: (Die abgebildeten Bilder dienen ausschliesslich als Referenz. Das tatsächliche Produkt kann abweichen.)</p>
                  <h2 className="main-price">CHF 20.00</h2>
                  <div className="info-data">
                       <select name="" id="">
                            <option>Wunschpizza... </option>
                            <option>Artischocken </option>
                            <option>Atlantic </option>
                            <option>Capricciosa </option>
                            <option>Champignon-Artischocken </option>
                            <option>Champignon-Schinken </option>
                            <option>Erbsen </option>
                            <option>Fit for Fun </option>
                            <option>Funghi </option>
                            <option>Gorgonzola </option>
                            <option>Gorgonzola-Tomatenscheiben</option>
                            <option>Grüne Peperoni</option>
                            <option>Hackfleisch</option>
                            <option>Hawaii</option>
                            <option>Krabben</option>
                            <option>Mais</option>
                            <option>Mare</option>
                            <option>Margherita</option>
                            <option>Mozzarella-Tomatenscheiben</option>
                            <option>Paprikastreifen rot</option>
                            <option>Pizza 2005</option>
                            <option>Pizza Sole</option>
                            <option>Prosciutto</option>
                            <option>Quattro Formaggi</option>
                            <option>Salami</option>
                            <option>Salami-Champignon</option>
                            <option>Salami-Hackfleisch</option>
                            <option>Salami-Hackfleisch-Champignon</option>
                            <option>Salami-Schinken</option>
                            <option>Salami-Schinken-Champignon</option>
                            <option>Salami-Schinken-Hackfleisch</option>
                            <option>Salami-Schinken-Paprika</option>
                            <option>Sardellen</option>
                            <option>Schinken-Champignon</option>
                            <option>Schinken-Salami-Peperoni</option>
                            <option>Schinken-Tomatenscheiben</option>
                            <option>Speck</option>
                            <option>Spinat</option>
                            <option>Spinat-Tomaten</option>
                            <option>Thunfisch</option>
                            <option>Thunfisch-Artischocken</option>
                            <option>Thunfisch-Champignon</option>
                            <option>Tonno</option>
                            <option>Türkische Salami</option>
                            <option>Zwiebeln</option>
                       </select>
                       <div className="inputs"><input type="checkbox"/><label> 1x Flasche Getränk 1L</label></div>
                       <div className="inputs"><input type="checkbox"/><label> 1x Döner Kebab</label></div>
                       <p>Kebab mit Joghurtsosse?</p>
                       <div className="inputs"><input type="checkbox"/><label> Ja mit Sosse</label></div>
                       <select name="" id="">
                            <option>1L Wunsch Getränke...</option>
                            <option>Coca-Cola 1L</option>
                            <option>Fanta 1L</option>
                            <option>Mezzo Mix 1L</option>
                            <option>Sprite 1L</option>
                            <option>Mineralwasser 0.7L</option>
                       </select>

                       <h1 className='extra'>Extra Zutaten</h1>
                       <select name="" id="">
                            <option>für kleine Pizza...</option>
                            <option>Alopinos + CHF 1.-</option>
                            <option>Ananas + CHF 1.-</option>
                            <option>Artischoken + CHF 1.-</option>
                            <option>Basilikon + CHF 1.-</option>
                            <option>Broccoli + CHF 1.-</option>
                            <option>Champignons + CHF 1.-</option>
                            <option>Curry + CHF 1.-</option>
                            <option>Dönerfleisch + CHF 1.-</option>
                            <option>Ei + CHF 1.-</option>
                            <option>Erbsen + CHF 1.-</option>
                            <option>Gorgonzola + CHF 1.-</option>
                            <option>Hackfleisch + CHF 1.-</option>
                            <option>Hunfisch + CHF 1.-</option>
                            <option>Kapern + CHF 1.-</option>
                            <option>Käse Extra + CHF 1.-</option>
                            <option>Knoblauch + CHF 1.-</option>
                            <option>Krabben + CHF 1.-</option>
                            <option>Mais + CHF 1.-</option>
                            <option>Mozzarella + CHF 1.-</option>
                            <option>Muscheln + CHF 1.-</option>
                            <option>Oliven + CHF 1.-</option>
                            <option>Oregano + CHF 1.-</option>
                            <option>Paprika + CHF 1.-</option>
                            <option>Parmesan + CHF 1.-</option>
                            <option>Peperoni mild + CHF 1.-</option>
                            <option>Peperonischarf + CHF 1.-</option>
                            <option>Rucola + CHF 1.-</option>
                            <option>Salami + CHF 1.-</option>
                            <option>Sardellen + CHF 1.-</option>
                            <option>Schafkäse + CHF 1.-</option>
                            <option>Schinken + CHF 1.-</option>
                            <option>Spargel + CHF 1.-</option>
                            <option>Speck + CHF 1.-</option>
                            <option>Spinat + CHF 1.-</option>
                            <option>Tintenfisch + CHF 1.-</option>
                            <option>Tomaten + CHF 1.-</option>
                            <option>Zwiebeln + CHF 1.-</option>
                       </select>
                       <div className="icons">
                            <i class="fa-solid fa-trash"></i>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                        <h1 className='extra'>Extra Getränke</h1>
                       <select name="" id="">
                            <option>Bitte Wählen Sie eine Option!</option>
                            <option>Coca Cola 0.33L + CHF 2.50</option>
                            <option>Danta 0.33L + CHF 2.50</option>
                            <option>Mezzo Mix 0.33L + CHF 2.50</option>
                            <option>Sprite 0.33L + CHF 2.50</option>
                            <option>Ayran 0.25L + CHF 2.00</option>
                            <option>Red Bull 0.25L + CHF 3.50</option>
                            <option>Flasche Coca Cola 1L + CHF 3.50</option>
                            <option>Flasche Fanta 1L + CHF 3.50</option>
                            <option>Flasche Mezzo Mix 1L + CHF 3.50</option>
                            <option>Flasche Sprite 1L + CHF 3.50</option>
                            <option>Flasche Mineralwasser 0.7L 1L + CHF 2.50</option>
                            <option>Flasche Apfelsaft 1.5L + CHF 3.50</option>
                            <option>Flasche Organgensaft 1.5L + CHF 3.50</option>
                            <option>Alkohol. Kristalweizen 0.5L CHF 3.50</option>
                            <option>Alkohol. Hefeweizen hell 0.5L + CHF 3.50</option>
                            <option>Alkohol. Warsteiner 0.5L + CHF 3.50</option>
                            <option>Alkohol. Becks 0.5L + CHF 3.50</option>
                            <option>(Weine/Sekte) Lambrusco 0.75L + CHF 9.00</option>
                            <option>(Weine/Sekte) Frascati 0.75L + CHF 9.50</option>
                            <option>(Weine/Sekte) Chianti 0.75L + CHF 9.50</option>
                            <option>(Weine/Sekte) Sekt Rotkäppchen 0.75L + CHF 10.00</option>
                            <option>(Weine/Sekte) Vodka + CHF 30.00</option>
                       </select>
                       <div className="icons">
                            <i class="fa-solid fa-trash"></i>
                            <i className="fa-solid fa-plus"></i>
                       </div>
                       <div className="price">
                        <p>Extra:</p>
                        <h2>CHF 0.00</h2><br></br>
                        <p>Summe:</p>
                        <h2>CHF 20.00</h2>
                       </div>
                  </div>
            </div>
        </div>
        <div className="outer">
            <h1>Andere Angebote du wirst lieben</h1>
            <div className="outer-image">
                <div className="image1">
                    <img src={image2} alt="" />
                </div>
                <div className="image1">
                    <img src={image3} alt="" />
                </div>
                <div className="image1">
                    <img src={image4} alt="" />
                </div>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default Ang
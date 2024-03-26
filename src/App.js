import "./App.scss";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import { useState } from "react";

import Logo from "./assets/images/icona-cibando.png";

function App() {
  const [pippo, setPippo] = useState("ciao");
  const [interruttore, setInterruttore] = useState(false);


  function cambiaValore() {
    //setPippo("buongiorno");
    if (pippo ==='ciao') {
      setPippo('buongiorno') ;
    } else {
      setPippo ("ciao");
    }
 }
  

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-red navbar-dark">
          <div class="container-fluid">
            <img src={Logo} className="icona-cibando"></img>
            <a class="navbar-brand" href="#">
              Cibando
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <HomeIcon>Filled</HomeIcon> Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MenuBookIcon>Filled</MenuBookIcon> Ricette
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon>Contatti
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="container-titolo">
        <h2>App di esempio</h2>
        <p class="paragrafo">Ecco il testo iniziale</p>
        <h3>{pippo}</h3>
        <button onClick={cambiaValore}>Cambia</button>
        <div>
          {interruttore ? (
            <div>
              <h2>Luce Accesa</h2>
            </div>
          ) : (
            <div>
              <h2>Luce Spenta</h2>
            </div>
          )}
          <button
            className="btn btn-primary"
            onClick={() => setInterruttore(!interruttore)}
          >
            {" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

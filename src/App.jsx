import React from 'react';
import './App.css';
import { soldtvs } from "./helpers/soldtvs.jsx";
import { boughttvs } from "./helpers/boughttvs.jsx";
import { toSellTvNumber } from "./helpers/tosell.jsx";
import showProductName from "./helpers/showProductName.jsx";
import showProductPrice from "./helpers/showProductPrice.jsx";
import showProductScreensizes from "./helpers/showProductScreensizes.jsx";
import { bestSellingTv } from "./constants/inventory.js";
import { inventory } from "./constants/inventory.js";

function App() {
    const handleMostSoldClick = () => {
        console.log('Meest verkocht eerst geklikt');
        // Voeg hier extra logica toe als dat nodig is
    };

    const handleCheapestFirstClick = () => {
        console.log('Goedkoopste eerst geklikt');
        // Voeg hier extra logica toe als dat nodig is
    };

    const handleBestForSportsClick = () => {
        console.log('Meest geschikt voor sport eerst geklikt');
        // Voeg hier extra logica toe als dat nodig is
    };

    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>

            <div className="containersAside">
                <div className={"boxGreen"}>
                    <p>Aantal verkochte producten</p>
                    <p>{soldtvs()}</p>
                </div>

                <div className={"boxBlue"}>
                    <p>Aantal ingekochte producten</p>
                    <p>{boughttvs()}</p>
                </div>

                <div className={"boxRed"}>
                    <p>Aantal te verkopen producten</p>
                    <p>{toSellTvNumber()}</p>
                </div>
            </div>

            <h2>Best verkochte tv</h2>

            <div className={"greyBoxOuter"}>
                <div className={"greyBoxTvImg"}>
                    <img className={"tvImg"} src={bestSellingTv.sourceImg} alt=""/>
                </div>

                <div className={"greyBoxSpecs"}>
                    <p>{showProductName(bestSellingTv)}</p>
                    <p className={"prizeTextSize"}>{showProductPrice(bestSellingTv)}</p>
                    <p>{showProductScreensizes(bestSellingTv)}</p>
                    <p><img className="miniIcon" src="src/assets/check.png" alt=""/> wifi <img className="miniIcon" src="src/assets/minus.png" alt=""/> speach <img className="miniIcon" src="src/assets/check.png" alt=""/> hdr <img className="miniIcon" src="src/assets/check.png" alt=""/> bluetooth <img className="miniIcon" src="src/assets/minus.png" alt=""/> ambilight</p>
                </div>
            </div>

            <h2>Alle tvs</h2>

            <span className="sellButtons">
        <button onClick={handleMostSoldClick}>Meest verkocht eerst</button>
        <button onClick={handleCheapestFirstClick}>Goedkoopste eerst</button>
        <button onClick={handleBestForSportsClick}>Meest geschikt voor sport eerst</button>
      </span>
        </>
    );
}

export default App;
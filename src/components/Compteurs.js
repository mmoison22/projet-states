import React, { useState } from "react";
import "./Compteurs.css";

const Compteurs = () => {
  const [compteur1, setCompteur1] = useState(0);
  const [compteur2, setCompteur2] = useState(0);
  return (
    <div className="bgdCompteurs">
      <span>Exemple de compteur </span>
      {(compteur1 <= 9 && compteur1 + compteur2 < 15) ?
        <button onClick={() => {
          console.log("incrémentation");
          setCompteur1(compteur1 + 1);
        }}>+</button> : null}
      {(compteur1 >= 0) ?
        <button onClick={() => {
          console.log("incrémentation");
          setCompteur1(compteur1 - 1);
        }}>-</button> : null}

      <span>Compteur 1 : {compteur1}</span>


      {(compteur2 <= 9 && compteur1 + compteur2 < 15) ?
        <button onClick={() => {
          console.log("incrémentation");
          setCompteur2(compteur2 + 1);
        }}>+</button> : null}

      {(compteur2 >= 0) ?
        <button onClick={() => {
          console.log("décrémentation");
          setCompteur2(compteur2 - 1);
        }}>-</button> : null}

      <span>Compteur 2 : {compteur2}</span>


      <span>Total : {compteur1 + compteur2}</span>
    </div>
  );
};
//écrire compteur indépendant
//afficher total des 2 compteurs
//en dessous de 0 le bouton moins disparait 
//au dessus de 10 le bouton plus disparait

export default Compteurs;

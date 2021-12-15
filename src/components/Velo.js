import React, { useState } from "react";
import "./Velo.css";

const Velo = () => {
    const [model, setModel] = useState(0);
    const [selle, setSelle] = useState(0);

    return (
        <div className="container">
            <div className="cadreVert">
                Configure ton vélo
            </div>
            <div>
                <div className="cadreVert">
                    Choisis ton modèle
                </div>
                <div onClick={()=>{
                    setModel(500)
                }} className="item">
                    Vélo de ville (500 €)
                </div>
                <div onClick={()=>{
                    setModel(700)
                }} className="item">
                    Mountain Bike (700 €)
                </div>
            </div>
            <div>
                <div className="cadreVert">
                    Choisis ta selle
                </div>
                <div onClick={()=>{
                    setSelle(20)
                }} className="item">
                    Classique (20 €)
                </div>
                <div onClick={()=>{
                    setSelle(80)
                }} className="item">
                    Sur suspension (80 €)
                </div>
            </div>
            <div className="cadreVert">
                Prix total = {model + selle} €
            </div>
        </div>
    );
};

export default Velo;
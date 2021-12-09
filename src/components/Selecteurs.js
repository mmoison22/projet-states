import React, { useState } from "react";
import "./Selecteurs.css";

const Selecteurs = () => {
    const [classNom, setClassNom] = useState("square");
    const [selectedSquare, setSelectedSquare] = useState(0);
    //const [classCircle, setClassCircle] = useState("rond");
    const [selectedCircle, setSelectedCircle] = useState(0);
    return (
        <div>

            <div onMouseOver={() => {
                setClassNom("mouseOver");
            }} onMouseOut={() => {
                setClassNom("square");
            }} className={classNom}></div>

            {/* carré */}
            <div className="container" onClick={() => {
                if (selectedSquare === 1 || selectedSquare === 2 || selectedSquare === 3) {
                    setSelectedSquare(0);

                }
            }}>
                <div className={selectedSquare === 1 ? "mouseOver" : "square"} onClick={() => {
                    setSelectedSquare(1);
                }} >

                </div>
                <div className={selectedSquare === 2 ? "mouseOver" : "square"} onClick={() => {
                    setSelectedSquare(2);
                }} >
                </div>
                <div className={selectedSquare === 3 ? "mouseOver" : "square"} onClick={() => {
                    setSelectedSquare(3);
                }} >
                </div>
            </div>

            {/* rond avec image*/}
            <div className="container">

                <div className={selectedCircle === 1 ? "image" : "rond"} onClick={() => {
                    setSelectedCircle(1);
                }} onMouseOut={() => {
                    setSelectedCircle(0);
                }}>
                    {(selectedCircle === 1) ?
                        (<img alt="sac1" src="https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg"></img>) : null}

                    <div className={selectedCircle === 2 ? "image" : "rond"} onClick={() => {
                        setSelectedCircle(2);
                    }} onMouseOut={() => {
                        setSelectedCircle(0);
                    }}>
                    </div>
                    <div className={selectedCircle === 3 ? "image" : "rond"} onClick={() => {
                        setSelectedCircle(3);
                    }} onMouseOut={() => {
                        setSelectedCircle(0);
                    }}>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div onClick={() => {
                    setClassCircle("image");
                }} onMouseOut={() => {
                    setClassCircle("rond");
                }} className={classCircle}>

                </div>
                <div onClick={() => {
                    setClassCircle("image");
                }} onMouseOut={() => {
                    setClassCircle("rond");
                }} className={classCircle}>

                </div>
                <div onClick={() => {
                    setClassCircle("image");
                }} onMouseOut={() => {
                    setClassCircle("rond");
                }} className={classCircle}>

                </div>
            </div> */}


        </div >
    );
};

export default Selecteurs;
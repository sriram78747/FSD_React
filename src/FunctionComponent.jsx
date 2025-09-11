import React from "react";
import MyImage from "./assets/react.svg"; 
// import "./CardComponent.css";

const CardComponent = (Props) => {
    
    return (
        <>
            <div className="card">
                <div className="logo">
                    <img src={Props.Data.Image} alt="Logo" />
                </div>
                <div className="info">
                    <div className="price">Price: {Props.Data.Price}/-</div>
                    <div className="brand">Brand: {Props.Data.Brand}</div>
                </div>
            </div>
        </>
    );
};

export default CardComponent;
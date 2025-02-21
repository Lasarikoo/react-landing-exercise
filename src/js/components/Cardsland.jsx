import React from "react";
import Card from "./Card";

function Cardsland() {
    return (
        <div className="container p-0">
            <div className="row g-3 d-flex justify-content-between my-3">
                <div className="col-12 col-sm-6 col-md-3">
                    <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <Card />
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <Card />
                </div>
            </div>
        </div>
    );
    
};

export default Cardsland;
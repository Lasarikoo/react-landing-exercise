import React from "react";
import Banner from "./Banner";
import Cardsland from "./Cardsland";

function Container() {
    return(
        <div className="container-fluid">
            <Banner />
            <Cardsland />
        </div>
    );
};

export default Container;
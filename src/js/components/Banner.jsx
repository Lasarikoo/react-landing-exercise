import React from "react";

function Banner() {
    return(
        <div className="container bg-secondary-subtle rounded mt-2 py-5 px-3 px-sm-5">
            <h1 id="hero">A Warm Welcome!</h1>
            <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed varius turpis. Vestibulum mattis vel tellus ut egestas.</p>
            <button type="button" class="btn btn-primary">Call to action!</button>
        </div>
    );
};

export default Banner;
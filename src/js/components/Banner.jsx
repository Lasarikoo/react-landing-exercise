import React from "react";

function Banner() {
    return(
        <div className="container-fluid bg-light rounded">
            <h1 id="hero">A Warm Welcome!</h1>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed varius turpis. Vestibulum mattis vel tellus ut egestas.</p>
            <button type="button" class="btn btn-primary">Call to action!</button>
        </div>
    );
};

export default Banner;
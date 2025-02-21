import React from "react";

function Card() {
    return (
        <div class="card my-3p-0">
            <img src="https://placehold.co/500x325" class="card-img-top" alt="placeholder"></img>
            <div class="card-body">
                <h5 class="card-title text-center fs-3 fw-bolder">Card title</h5>
                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum sapien in ex aliquet, a porttitor diam blandit. Proin est libero, eleifend ut faucibus ac, congue eget tellus. Sed eget mi fringilla, maximus dui in, auctor elit.</p>
            </div>
            <div className="border-top text-center py-2">
                <button type="button" className="btn btn-primary">Find out more!</button>
            </div>
        </div>
    );
        
    
}

export default Card;
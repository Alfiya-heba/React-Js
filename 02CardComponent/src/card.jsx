import React from "react";

function Card({image,name,description}){
    return(
        <div className="card">
            <img className="card-img" src={image} alt="{name}" />
            <h2 className="heading">{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Card;
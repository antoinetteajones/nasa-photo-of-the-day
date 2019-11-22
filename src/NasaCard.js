import React from "react";


const NasaCard = (props) =>{

    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
            <div>{props.url}</div>
            <img src= {props.img} alt="NASA"/>
            <p>{props.explanation}</p>
        </div>

    )

}
export default NasaCard;
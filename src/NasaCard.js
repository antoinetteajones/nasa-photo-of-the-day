import React from "react";
import styled from "styled-components";

const Nasa = styled.div`
 h1 {
     color: magenta;
 }
 h2 {
     color: magenta;
 }
 img {
     border-radius: 70px;
     border: 13px solid magenta;
 }
 p {
     width: 1050px;
     margin: 0 auto;
     padding-top: 20px;
     color: magenta;
     font-size: 1.5rem;
 }
`


const NasaCard = (props) =>{

    return(
        <Nasa>
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <div>{props.url}</div>
            <img src= {props.img} alt="NASA"/>
            <p>{props.explanation}</p>
        </div>
        </Nasa>
    )

}
export default NasaCard;
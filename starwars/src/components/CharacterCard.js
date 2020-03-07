import React from "react";
import styled from 'styled-components'
// import Appearances from "./Appearances"




const CharacterCard = (props) => { 

    // console.log(props);

    const Card = styled.div `
    width: 50%;
    border: 2px solid black;
    margin: 2% auto;
    background: white;
    `



    return (

        <Card>
            <h1>{`Name: ${props.charInfo.name}`}</h1>
            {/* <h3>{`Created: ${props.charInfo.created}`}</h3> */}
            <h3>{`Birth Year: ${props.charInfo.birth_year}`}</h3>
            {/* <h3>{`Home World: ${props.charInfo.homeworld}`}</h3> */}
            <p>{`Mass: ${props.charInfo.mass}`}</p>
            <p>{`Height: ${props.charInfo.height}`}</p>
            <p>{`Skin Colour: ${props.charInfo.skin_color}`}</p>
            <p>{`Hair Color: ${props.charInfo.hair_color}`}</p>
            <p>{`Gender: ${props.charInfo.gender}`}</p>
            {/* <Appearances array1={props} array2={props} array3={props} array4={props}/> */}

        </Card>
    )

}



export default CharacterCard
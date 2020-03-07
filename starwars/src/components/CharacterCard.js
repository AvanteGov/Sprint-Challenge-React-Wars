import React from "react";
// import Appearances from "./Appearances"

const CharacterCard = (props) => { 

    // console.log(props);



    return (

        <div>
            {/* {props.forEach(element => {
                console.log(element);    
            })} */}

            <h1>{`Name:`}</h1>
            <h3>{`Created:`}</h3>
            <h3>{`Birth Year:`}</h3>
            <h3>{`Home World:`}</h3>
            <p>{`Mass:`}</p>
            <p>{`Height:`}</p>
            <p>{`Skin Colour:`}</p>
            <p>{`Hair Color:`}</p>
            <p>{`Gender:`}</p>
            {/* <Appearances array1={props} array2={props} array3={props} array4={props}/> */}

        </div>
    )

}



export default CharacterCard
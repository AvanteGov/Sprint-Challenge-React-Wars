import React, { useState , useEffect} from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard";


const ParentContainer = () =>  {

    const [swData , setSwData] = useState([])

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then((response) => {
            console.log(response);
            setSwData(response.data.results)
        })
        .catch((err) => { 
            console.log(err);
        })
      },[])
    
      return (
          <div>
              {console.log(swData)}
              {swData.forEach((item) => {
                  return(
                  <CharacterCard charInfo={item} />
                  )
              })}
          </div>
      )

}

export default ParentContainer
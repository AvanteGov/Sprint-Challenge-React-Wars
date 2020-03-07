import React, {useEffect} from "react";
import axios from "axios"


const ParentContainer = () =>  {

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then((response) => {
            console.log(response);
        })
        .catch((err) => { 
            console.log(err);
        })
      },[])
    
      return (
          <div>
              
          </div>
      )

}

export default ParentContainer
import React, { useState } from "react";
import { useEffect } from "react";

const Beers = () => {
    const [beers, setBeers] = useState([])

    //1. fetching beers from an API with FETCH API
    
    //2. API call in useEffect - function being called once when the component is mounted

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
    </>
}

export default Beers;
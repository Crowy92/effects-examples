import React, { useState } from "react";
import { useEffect } from "react";

const Beers = () => {

    const [beers, setBeers] = useState([]);

    //1. fetching beers from an API with FETCH API
    async function getBeers() {
        const fetchAPI = "https://api.punkapi.com/v2/beers";
        try {
            const response = await fetch(fetchAPI);
            const data = await response.json();
            const namesData = data.map(item => item.name)
            console.log(data);
            setBeers(namesData)
        } catch(err){
            console.log(err);
        }
    }

    //2. API call in useEffect - function being called once when the component is mounted
    useEffect(() => {
        getBeers();
    }, [])

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
           </>
}



export default Beers;
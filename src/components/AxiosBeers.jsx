import axios from "axios";
import React, { useState, useEffect } from "react";

const Beers = () => {

    const [beers, setBeers] = useState([]);

    //fetching beers from an API with Axios
    async function axiosGetBeers() {
        const fetchAPI = "https://api.punkapi.com/v2/beers";
        try {
            // axios({method: "GET", url: fetchAPI})
            const response = await axios.get(fetchAPI);
            // const data = await response.json();
            console.log(response);
            const namesData = response.data.map(item => item.name)

            setBeers(namesData)
        } catch(err){
            console.log(err);
        }
    }

    //API call in useEffect - function being called once when the component is mounted
    useEffect(() => {
        axiosGetBeers();
    }, [])

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
    </>
}



export default Beers;
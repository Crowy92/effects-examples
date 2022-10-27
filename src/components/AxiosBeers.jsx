

const Beers = () => {

    const [beers, setBeers] = useState([]);

    //fetching beers from an API with Axios
    async function axiosGetBeers() {

        try {

            setBeers(namesData)
        } catch(err){
            console.log(err);
        }
    }

    //API call in useEffect - function being called once when the component is mounted
    useEffect(() => {
    }, )

    return <>
            <h2>Beers</h2>
            { beers.map(b => <li>{b}</li>) }
    </>
}



export default Beers;
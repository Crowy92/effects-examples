import React, { useState, useEffect } from "react";

const Effects = () => {
    const [val, setVal] = useState(0);
    const [specialVal, setSpecialVal] = useState(0);

    //1. No dependency array - if left empty, the effecet will run on every re-render
    // useEffect(() => {
    //     console.log("I run on every update");
    // })
    //2. Empty dependency array -  function triggers only when the component is initially mounted
    // useEffect(() => {
    //     console.log("I run only on the page loading");
    // }, [])
    //3. With a dependency array - function triggers when specialVal changes
    // useEffect(() => {
    //     console.log("I will only run once special Val changes");
    // }, [specialVal])
    //4. With a dependency array - triggers when val changes
    // Cleaning up an effect - useful for intervals and API subscriptions - make sure to clean up to avoid memory leaks
    useEffect(() => {
        console.log("I will only run once Val changes");

        const timer = setInterval(() => {
            console.log("3 seconds passed");
        }, 3000)

        return () => {
            clearInterval(timer);
            console.log("cleared the timer");
        }
    }, [val])

    function handleClick () {
        setVal(prev => prev + 1);
        if (val % 10 === 0) {
            setSpecialVal(prev => prev + 1);
        }
    }

    return <div>
            <h2>Beers!</h2>
            <button onClick={handleClick}>{val}</button>
           </div>
}

export default Effects;
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count1, setCount1] = useState(5);
    const [count2, setCount2] = useState(15);

    // Correct state update functions
    let handleCount1 = () => {
        setCount1(prev => prev + 1);
    }

    let handleCount2 = () => {
        setCount2(prev => prev + 1);
    }

    // Runs on EVERY render
    useEffect(() => {
        console.log("useEffect WITHOUT dependency array");
    });

    // Runs ONLY once (on mount)
    useEffect(() => {
        console.log("useEffect with EMPTY dependency array");
    }, []);

    // Runs ONLY when count1 changes
    useEffect(() => {
        console.log("useEffect when count1 changes");
    }, [count1]);

    // Runs when count1 OR count2 changes
    useEffect(() => {
        console.log("useEffect when count1 or count2 changes");
    }, [count1, count2]);

    console.log("component rendered");

    return (
        <div>
            <h2>count1 : {count1}</h2>
            <h2>count2 : {count2}</h2>

            <button onClick={handleCount1}>Count1 Button</button>
            <button onClick={handleCount2}>Count2 Button</button>
        </div>
    )
}

export default UseEffectHook;
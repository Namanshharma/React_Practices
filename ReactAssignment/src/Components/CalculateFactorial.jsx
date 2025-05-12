import { useMemo, useState } from "react"

// Create a component that performs an expensive calculation that calculate the factorial and the input provide by user
// Also resolve this by using UseMemo Hook
export default function CalculateFactorial() {
    const [inputValue, setInputValue] = useState(0);

    useMemo(() => {
        let fact = 1;
        for (let i = 1; i <= inputValue; i++) {
            fact = fact * i;
        }
        setInputValue(fact);
    }, [inputValue]);

    return (
        <>
            <label>Enter any number to calculate the Factorial</label><br></br><br></br>
            <input placeholder="Enter a number here ....." type="number" onChange={(e) => setInputValue(e.target.value)}></input>
            <p>The factorial of your entered value is :- {inputValue > 0 ? inputValue : 0}</p>
        </>
    )
}
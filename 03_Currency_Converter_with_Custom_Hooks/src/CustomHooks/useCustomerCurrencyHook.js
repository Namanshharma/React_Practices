import { useState } from "react";
import { useEffect } from "react";

function useCustomCurrencyHook(currency) {
    const [jsonData, setjsonData] = useState({});
    useEffect(() => {
        const newLocal = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(newLocal)
            .then(res => res.json())
            .then(res => setjsonData(res[currency]))
        console.log(jsonData);
    }, [currency]);
    console.log(jsonData);
    return jsonData;
}

export default useCustomCurrencyHook;
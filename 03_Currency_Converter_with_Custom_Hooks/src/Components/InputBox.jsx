import React from 'react'
import { useId } from 'react'

function InputBox({ label, className = "", amount,
    onAmountChange,                                                         // <<---- Handle the changes in amount
    onCurrencyChange,                                                       // <<---- Handle the changes in currency
    currencyOptions = [],                                                   // <<---- in this our drop down will comes whose values comes from API
    selectedCurrency = "usd",
    amountDisable = false,                                                  // <<---- mainly use if we want to disable the amount div
    currencyDisable = false                                                 // <<---- similarly happens for the another array as well to make it more controllable
}) {
    const amountInputID = useId();                                          // <<---- useId is the hook provided by the react package.
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputID}>{label}</label>
                <input className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount" disabled={amountDisable} value={amount} id={amountInputID}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable} value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} >
                    {currencyOptions.map((curr) => {
                        <option value={curr} key={curr}>{curr}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default InputBox

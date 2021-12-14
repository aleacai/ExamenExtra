import React, { useState, useEffect, createContext } from 'react';

export const QuotesContext = createContext();

const QuotesProvider = (props) => {

    const [QToday, setQToday]=useState([])
    const [QRandom, setQRandom]=useState([])
    const [Qs, setQs]=useState([])

    useEffect(() => {
        async function getQToday() {
            const response = await fetch('https://zenquotes.io/api/today/');
            var data = await response.json();
            setQToday(data);
        }

        async function getQRandom() {
            const response = await fetch('https://zenquotes.io/api/random/');
            var data = await response.json();
            setQRandom(data);
        }

        async function getQs() {
            const response = await fetch('https://zenquotes.io/api/quotes/');
            var data = await response.json();
            setQs(data);
        }

        getQToday()
        getQRandom()
        getQs()
    },[])

    return(
        <QuotesContext.Provider
        value={{
            QToday,
            QRandom,
            Qs
        }}>
            {props.children}
        </QuotesContext.Provider>
    )
}
export default QuotesProvider;
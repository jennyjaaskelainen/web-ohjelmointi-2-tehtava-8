import { createContext, useState, useEffect } from "react";

export const UrheilijaContext = createContext();

export function UrheilijaProvider({ children }) {
    const [urheilijat, setUrheilijat] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/urheilijat")
        .then((response) => response.json())
        .then((data) => setUrheilijat(data))
        .catch((error) => console.error("Virhe:", error));
    }, []);

    return (
        <UrheilijaContext.Provider value={{ urheilijat, setUrheilijat }}>
            {children}
        </UrheilijaContext.Provider>
    );
}
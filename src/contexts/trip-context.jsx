/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { data } from "../data/trip-data";

export const TripContext = createContext();

export const TripProvider = ({children}) => {
    const [continents, setContinents] = useState(data.continents);
    const [countries, setCountries] = useState([]);
    const [place, setPlace] = useState({})

    return <TripContext.Provider value={{continents, setContinents, countries, setCountries, place, setPlace}}>{children}</TripContext.Provider>
}

export const useTrip = () => useContext(TripContext)
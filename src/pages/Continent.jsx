import { useParams } from "react-router-dom"
import { useTrip } from "../main";
import { CountryCard } from "../components/CountryCard";

export const Continent = () => {
    const {continentId} = useParams();
    const {continents} = useTrip();

    const selectedContinent = continents?.find(({id}) => id === Number(continentId));

    const {id, name, image, countries} = selectedContinent;

    return <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
        <div className="font-bold">Top Countries in {name} for your next holiday</div>
        <ul className="flex flex-wrap gap-5">
            {countries?.map(country => <CountryCard country={country} key={country.id}/>)}
        </ul>
    </div>
}
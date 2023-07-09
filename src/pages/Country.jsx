import { useParams } from "react-router-dom"
import { useTrip } from "../main";
import { DetailCard } from "../components/DetailCard";

export const Country = () => {
    const {countryId} = useParams();
    const {countries} = useTrip();

    return <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
    <div className="font-bold">Top Countries in {countries.name} for your next holiday</div>
    <ul className="flex flex-wrap gap-5">
        {countries?.destinations?.map(place => <DetailCard place={place} key={place.id}/>)}
    </ul>
</div>
}
import {useTrip} from "../main"
import {Card} from "../components/Card"

export const Home = () => {
    const {continents} = useTrip();

    return <div className="flex flex-col items-center justify-center gap-5 min-h-screen">
        <div className="font-bold text-2xl">Welcome to Trip Advisor</div>
        <div className="text-blue-700 font-bold">Top Continents for your next holiday</div>
        <ul className="flex flex-wrap gap-5">
            {continents?.map(continent => <Card continent={continent} key={continent.id}/>)}
        </ul>
    </div>
}
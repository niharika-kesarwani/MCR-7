import { useTrip } from "../main";

export const DetailPage = () => {
    const {place} = useTrip();

    const {id, name, description, image, ratings, reviews, location, openingHours, ticketPrice, website} = place;

    return <div className="flex flex-col">
        <div>{name}</div>
        <div className="flex">
        <div>
            <img src={image}/>
        </div>
        <div>
            </div>
        </div>
       </div>
}
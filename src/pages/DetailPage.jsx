import { NavLink } from "react-router-dom";
import { useTrip } from "../main";

export const DetailPage = () => {
    const {place} = useTrip();

    const {id, name, description, image, ratings, reviews, location, openingHours, ticketPrice, website} = place;

    return <div className="min-h-screen flex flex-col items-center justify-center gap-5">
        <div className="text-3xl font-bold">{name}</div>
        <div className="flex flex-col md:flex-row gap-5 mx-10">
        <div>
            <img src={image}/>
        </div>
        <div className="flex flex-col justify-between">
            <div><span className="text-blue-600">Description: </span>{description}</div>
            <div><span className="text-blue-600">Ratings: </span>{ratings}</div>
            <div><span className="text-blue-600">Reviews: </span>{reviews}</div>
            <div><span className="text-blue-600">Location: </span>{location}</div>
            <div><span className="text-blue-600">Opening Hours: </span>{openingHours}</div>
            <div><span className="text-blue-600">Ticket Price: </span>{ticketPrice}</div>
            <NavLink to={website} target="_blank" className="text-pink-600 hover:cursor-pointer">Website</NavLink>
        </div>
        </div>
       </div>
}
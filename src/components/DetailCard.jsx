/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTrip } from "../main";

export const DetailCard = ({place}) => {
    const navigate = useNavigate();
    const {setPlace} = useTrip();
    const {id, name, description, image, ratings, reviews, location, openingHours, ticketPrice, website} = place;

    return <div className="w-60 h-full rounded-lg overflow-hidden relative hover:cursor-pointer" onClick={() => {
        navigate(`/detail`);
        setPlace(place);
    }}>
        <img src={image} className="object-cover"/>
        <div className='absolute bottom-0 p-3 flex items-center'>
            <LocationOnIcon />
            <div className='text-sm'>{name}</div>
        </div>
    </div>
}
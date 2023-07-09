/* eslint-disable react/prop-types */
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";
import { useTrip } from '../main';

export const CountryCard = ({country}) => {
    const navigate = useNavigate();
    const {setCountries} = useTrip();
    const { id, name, image, destinations} = country;


    return <div className="w-60 h-full rounded-lg overflow-hidden relative hover:cursor-pointer" onClick={() => {
        navigate(`/country/${id}`);
        setCountries(country);
    }}>
        <img src={image} className="object-cover"/>
        <div className='absolute bottom-0 p-3 flex items-center'>
            <LocationOnIcon />
            <div className='text-sm'>{name}</div>
        </div>
    </div>
}
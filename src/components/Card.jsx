/* eslint-disable react/prop-types */
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

export const Card = ({continent}) => {
    const navigate = useNavigate();
    const { id, name, image, countries} = continent;

    return <div className="w-60 h-full rounded-lg overflow-hidden relative hover:cursor-pointer" onClick={() => navigate(`/continent/${id}`)}>
        <img src={image} className="object-cover"/>
        <div className='absolute bottom-0 p-3 flex items-center'>
            <LocationOnIcon />
            <div className='text-sm'>{name}</div>
        </div>
    </div>
}
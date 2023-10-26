import { useEffect, useState } from 'react';
import './Index.css';
import { Link } from 'react-router-dom';

export function Index() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);


    useEffect(() => {
        fetch('http://localhost:8080/api/restaurants',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((data) => {setRestaurants(data)})
            .catch(e => console.log(e))
    }, [])

    return (
        <div className='restaurants-index'>
        {restaurants.map(rest => {
            return (
                <Link to={'/restaurants/' + rest.id} key={rest.id}>
                <div className='restaurant-card'>
                    <img className='card-img' src={rest.imageUrl}/>
                    <div className='card-text-box'>
                        <div className='card-title'>{rest.name}</div>
                        <div className='card-desc'>{rest.address}</div>
                    </div>
                </div>
                </Link>
            )
        })}
        </div>
    )
}
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './RestaurantView.css';
import { Menu } from "./menu/Menu";

export function RestaurantView() {
    const params = useParams();
    const restaurantId = params.id;

    const [restaurant, setRestaurant] = useState<Restaurant>();

    useEffect(() => {
        fetch(`http://localhost:8080/api/restaurants/${restaurantId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {setRestaurant(data.restaurant)})
            .catch(e => console.log(e))
    }, [])

    return (
        <>
        {restaurant && 
            <div>
                <div className="restaurant-banner">
                    <img className='banner-img' src={restaurant.imageUrl}/>
                    <div className='banner-text'>
                        <div className='restaurant-name'>{restaurant.name}</div>
                        <div className='restaurant-desc'>{restaurant.description}</div>
                    </div>
                </div>

                <Menu restaurantId={restaurantId}/>    
            </div>
        }
        </>
    )
}
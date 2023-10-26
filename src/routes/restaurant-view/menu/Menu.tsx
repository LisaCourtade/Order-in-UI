import { useEffect, useState } from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


interface MenuProps {
    restaurantId?: string;
}

export function Menu({ restaurantId }: MenuProps) {

    const [menu, setMenu] = useState<Menu>({
        snacks: [],
        starters: [],
        mains: [],
        desserts: [],
        drinks: [],
    });

    useEffect(() => {
        fetch(`http://localhost:8080/api/meals/restaurant/${restaurantId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => res.json())
            .then((data) => {categoriseMeals(data.meals)})
            .catch(e => console.log(e))
    }, [])

    const categoriseMeals = (meals: Meal[]) => {
        const categories = [ "starter", "snack", "main", "dessert", "drink"];
        categories.map(category => {
            const categorised = meals.filter(meal => meal.category === category);
            setMenu(prev => {
                return {...prev, [`${category}s`]: [...categorised]}
            });
        })
    }



    return (
        <div>
            {menu && 
                Object.keys(menu).map(category => {
                    if (menu[category as keyof Menu].length === 0) {
                        return;
                    }
                    return (
                        <div className='menu-category' key={category}>
                            <h2>{category.toUpperCase()}</h2>
                            <div className='meals-collection'>
                            {   menu[category as keyof Menu].map(meal => {
                                    return (
                                        <div className='meal-card' key={meal.id}>
                                            <img src={meal.imageUrl} />
                                            <div className='card-text'>
                                                <div>
                                                    <div className='card-title'>{meal.name}</div>
                                                    <div className='card-desc'>{meal.ingredients}</div>
                                                    <div className='card-price'>{meal.price.toFixed(2)} €</div>
                                                </div>
                                                <FontAwesomeIcon className='plus-icon' icon={faPlus} size='lg' />
                                            </div>
                                        </div> 
                                    )
                                })
                            }
                            </div>
                        </div> 
                    )
                })
            }
        </div>
    )
}
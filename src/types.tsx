
interface Restaurant {
    id: number;
    name: string;
    address: string;
    imageUrl: string;
    description: string;
    phoneNumber: string;
    ownerId: number;
}

interface Meal {
    id: number;
    name: string;
    price: number;
    ingredients: string;
    imageUrl: string;
    category: string;
    restaurant: Restaurant;
}

interface Menu {
    snacks: Meal[];
    starters: Meal[]
    mains: Meal[];
    desserts: Meal[];
    drinks: Meal[];
}
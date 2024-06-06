import User from "./User";

export default interface Recipe {
    _id: string,
    title: string;
    author: User;
    category: string;
    description: string;
    ingridients: string[];
    instructions: string[];
    image: string;
    reviews: any[];
}

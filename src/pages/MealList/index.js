import { useEffect, useState } from "react";
import { FetchMealByFirstLetter} from "../../services/mealtService";
import "./index.css"

import SearchBar from "../../components/SearchBar";

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const [letter, setLetter] = useState('b');
    useEffect(() => {
        FetchMealByFirstLetter(letter).then((data) => {
            setMeals(data);
        });
    }, [letter]);
    return (
        <div>
            <SearchBar
                type="text"
                value={letter}
                onChange={(e) => setLetter(e.target.value)}
            />
            <ul className="meals">
                {meals.map((meal) => (
                   
                    <span key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt={meal.strMeal}></img></span>
                    
                ))}
            </ul>
        </div>
    );
    

}
export default MealList;
import { useEffect, useState } from "react";
import { FetchMealByFirstLetter} from "../../services/mealtService";
import "./index.css"

import SearchBar from "../../components/SearchBar";
import MealPanel from "../../components/MealPanel";

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
            <MealPanel meal={meals}/>
        </div>
    );
    

}
export default MealList;
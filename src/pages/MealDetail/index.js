import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState, link } from "react";
import { FetchMealById } from "../../services/mealtService";

const MealDetail = () => {
    
    const { idMeal } = useParams();
    const [meal, setMeal] = useState({});
    useEffect(() => {
        FetchMealById(idMeal).then((data) => {
            setMeal(data);
        });
    }, [idMeal]);
    return (
        <div>
            <h1>{meal.strMeal}</h1>
                <span key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt={meal.strMeal}></img>
                </span>
            <p>{meal.strInstructions}</p>
            <Link to={"/"}>Back</Link>
        </div>
    );

}
export default MealDetail;
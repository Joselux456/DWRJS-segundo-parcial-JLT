import React from "react";

import { useNavigate } from "react-router-dom";


const MealPanel = ({meal}) =>{
    const navigate = useNavigate();
    const handleClick = (idMeal) => {
        navigate(`/detail/${idMeal}`);
    }
    return (
        <div className="meals">
                {meal.map((meals) => (
                   
                    <span key={meals.idMeal} onClick={() => handleClick(meals.idMeal)}>
                    <img src={meals.strMealThumb} alt={meals.strMeal}></img></span>
                    
                ))}
            </div>
    )
}

export default MealPanel;
"use client";

import {useState, useEffect} from 'react';

async function fetchMealIdeas(Ingrediant) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingrediant}`);
    let data = await response.json();
    return data.meals || [];
}


export default function MealIdeas({Ingrediant}) {
    const [meal, setMeal] = useState([]);

    const loadMealIdeas = async(Ingrediant) => {
        const mealData = await fetchMealIdeas(Ingrediant);
        setMeal(mealData);
    };

    useEffect(() => {
        if (Ingrediant) { 
            loadMealIdeas(Ingrediant);
        }
    }, [Ingrediant]);

    return (
        <main>
            <h1 className="text-2xl text-electric-violet-950">Meal Ideas</h1>
            <div className="flex flex-wrap">
                {meal.length > 0 ? (
                    meal.map((m) => (
                    <div key={m.idMeal} className="m-4 p-4 bg-electric-violet-950 rounded-lg">
                        <h2 className="text-electric-violet-300">{m.strMeal}</h2>
                    </div>
                    ))) : Ingrediant ? (
                        <p className="text-electric-violet-950">No meal ideas found related to {Ingrediant}</p>
                    ) : (
                        <p className="text-electric-violet-950">Please select an ingredient to get meal ideas.</p>
                    )}
            </div>
        </main>
         );

}

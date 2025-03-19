"use client";

import ItemList from './item-list.js';
import Item from './item.js';
import NewItemAdder from './new-item.js';
import ItemData from './items.json';
import MealIdeas from './meal-ideas.js';
import { useState } from "react";


export default function Page() {

    const [items, setItems] = useState(ItemData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }
    const handleItemSelect = (item) => {const cleanedName = item.name
        .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "") .replace(/,\s*[^,]+$/g, "") .trim();  
        setSelectedItemName(cleanedName);
    };


    return (
        <main className='bg-gray-200'>
            <h1 className='text-3xl font-bold p-3.5  text-electric-violet-950'>Shopping List</h1>
            <div className='flex'>
                <div>
                    <div className='m-2  '>
                        <NewItemAdder onAddItem = {handleAddItem} />
                    </div>
                    
                    <ItemList items = {items}  onItemSelect ={handleItemSelect} />
                </div>
            
                <MealIdeas Ingrediant ={selectedItemName} />
            </div>
           
        </main>
    );
  } 
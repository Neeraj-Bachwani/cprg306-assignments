"use client";

import ItemList from './item-list.js';
import NewItemAdder from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { useState , useEffect } from "react";
import {getItems , addItem} from '../_services/shopping-list-services.js'
import { useUserAuth } from '../_util/auth-context.js';

export default function Page() {
    const {user} = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');

      const loadItems = async () => {
        if (!user?.uid) return;
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
    };

 
    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (!user?.uid) return;

        const newItemId = await addItem(user.uid, newItem);
        if (newItemId) {
            setItems([...items, { id: newItemId, ...newItem }]);
        }
    };

   
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
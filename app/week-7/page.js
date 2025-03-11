"use client";

import ItemList from './item-list.js';
import Item from './item.js';
import NewItemAdder from './new-item.js';
import ItemData from './items.json';
import { useState } from "react";


export default function Page() {

    const [items, setItems] = useState(ItemData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }


    return (
        <main className='bg-gray-200'>
            <div className='m-2'>
                <NewItemAdder onAddItem = {handleAddItem} />
            </div>
            <h1 className='text-3xl font-bold p-3.5  text-electric-violet-950'>Shopping List</h1>
            <ItemList items = {items} />
        </main>
    );
  } 
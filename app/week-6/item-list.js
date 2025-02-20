"use client";

import Item from './item.js';
import { useState} from 'react';
import itemData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  let items = [...itemData];
  items.sort ((a,b) => a[sortBy].localeCompare(b[sortBy]));
    
  return (
        <main>
          <button onClick={() => setSortBy('name')} className={`ml-4 text-electric-violet-950 bg-electric-violet-300 p-2 rounded-lg border-electric-violet-600 border-l-8 
            ${sortBy == "name" ?    "bg-electric-violet-400" : "bg-electric-violet-300"}`}> Name</button>
          <button onClick={() => setSortBy('category')} className={`ml-4 text-electric-violet-950 bg-electric-violet-300 p-2 rounded-lg border-electric-violet-600 border-l-8
            ${sortBy == "category" ? "bg-electric-violet-400": "bg-electric-violet-300"}`}> Category</button>
          {items.map((item) => (
            <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
            />
          ))};
            
        </main>

    );
}
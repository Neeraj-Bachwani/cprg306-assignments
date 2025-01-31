"use client";
import { useState } from "react";

export default function NewItem () {

   
    const [quantity, setQuantity] = useState(1);
    

    
    const increment = () => { setQuantity(quantity < 20 ? quantity + 1 : 20) }
    const decrement = () => { setQuantity(quantity > 1 ? quantity - 1 : 1) }

    return (
        <main className="flex justify-center w-full">
            <div className="p-2 m-4 bg-white text-white w-36">
                <div className="flex justify-between">
                    <span className=" text-black pr-8" >{quantity}</span>
                    <div className="flex">
                        <button onClick={decrement} disabled={quantity <= 1}  className="w-8 mr-1 bg-electric-violet-400 text-white font-semibold rounded-lg shadow-md hover:bg-electric-violet-700  disabled:bg-gray-400 ">-</button>
                        <button onClick={increment} disabled={quantity >= 20} className="w-8 ml-1 bg-electric-violet-400 text-white font-semibold rounded-lg shadow-md hover:bg-electric-violet-700  disabled:bg-gray-400 ">+</button>
                    </div>
            
                </div>
            </div>
        </main>
    )
}
"use client";
import { useState } from "react";


export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleChange = (event) => {
        event.preventDefault();
        let item = { quantity, name, category };
        console.log(item);
        alert(`Item: ${name} Quantity: ${quantity} Category: ${category}`);

        setQuantity(1);
        setName("");
        setCategory("Produce");
    };

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const categoryHandler = (event) => {
        setCategory(event.target.value);
    };

    const increment = () => {
        setQuantity(quantity < 20 ? quantity + 1 : 20);
    };
    const decrement = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    return (
        <main className="flex justify-center w-full">
            <form className="bg-electric-violet-950 w-full max-w-sm h-1/2 rounded">
                <div className="m-3">
                    <input type="text" placeholder="Item Name" className="text-gray-900 w-full p-2 rounded-md placeholder:text-gray-900" onChange={(event) => nameHandler(event)} required />
                </div>

                <div className="flex justify-between">
                    <div className="p-2 m-3 rounded-md bg-white text-white w-36">
                        <div className="flex justify-between">
                            <span className="text-black pr-8">{quantity}</span>
                            <div className="flex">
                                <button type="button" onClick={decrement} disabled={quantity <= 1} className="w-8 mr-1 bg-electric-violet-400 text-white font-semibold rounded-lg shadow-md hover:bg-electric-violet-700 disabled:bg-gray-400">-</button>
                                <button type="button" onClick={increment} disabled={quantity >= 20} className="w-8 ml-1 bg-electric-violet-400 text-white font-semibold rounded-lg shadow-md hover:bg-electric-violet-700 disabled:bg-gray-400">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="m-3">
                        <select className="p-2 rounded-md text-gray-900 " onChange={(event) => categoryHandler(event)}>
                            <option value="Category" disabled>Category</option>
                            <option value="Produce">Produce</option>
                            <option value="Dairy">Dairy</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Goods">Frozen Goods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="m-2  flex justify-center">
                    <button onClick={handleChange} className="bg-electric-violet-400 text-white font-semibold rounded-lg shadow-md hover:bg-electric-violet-700 h-9 w-full">+</button>
                </div>
            </form>
        </main>
    );
}
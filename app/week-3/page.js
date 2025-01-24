import ItemList from './item-list.js';
import Item from './item.js';

export default function Page() {
    return (
        <main className='bg-gray-200'>
            <h1 className='text-3xl font-bold p-3.5  text-electric-violet-950'>Shopping List</h1>
            <ItemList />
        </main>
    );
  } 
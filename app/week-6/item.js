export default function Item({name,quantity,category}) {
    return (
      
      <section className="font-mono text-lg"> 
        <ul >
            <li className="rounded p-2 m-4 max-w-sm bg-electric-violet-200  border-electric-violet-600 border-l-8" >
                <h2 className="text-xl font-bold text-electric-violet-950">{name}</h2>
            <div className="text-sm text-electric-violet-900">Buy {quantity} in {category}</div>
            </li>
        </ul>
      </section>
    );
  }
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const List = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetchItems();
    },[])

    const fetchItems = async () =>{
        const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const items = await data.json();
      //  console.log(items.data.items);
        setItems(items.data.items);

    }

    return (
        <>
        <h1>List information</h1>
        <h3> 
            <ul>
            {items.map((i)=>(
             <Link key={i.id} to={`/list/${i.id}`}>   <h3 key={`h${i.id}`}> ok {i.name} </h3> </Link>
            ))}
            </ul>
        </h3>
        </>
    )
}

export default List;
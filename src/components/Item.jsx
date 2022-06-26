import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const Item = () => {

    const [item, setItem] = useState({
        images:{}
    });
    const {id} = useParams();
    useEffect(()=>{
        fetchItem();
    },[])

    const fetchItem = async () =>{
        console.log("id",id);
        const data = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`);
        const item = await data.json();
        console.log(item.data);
        setItem(item.data);

    }

    return (
        <>
        <h1>Item information {item.name}</h1>
        <h3>           
          {item.description}
        </h3>
        <img src={item.images.icon}/>
        </>
    )
}

export default Item;
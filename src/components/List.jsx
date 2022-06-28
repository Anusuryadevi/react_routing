import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { Button, Badge } from 'react-bootstrap';
import { CountConsumer } from "../context/CountContext";

const List = () => {

    const [items, setItems] = useState([]);
    const initialState = 0
   

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
        const items = await data.json();
        //  console.log(items.data.items);
        setItems(items.data.items);

    }
    console.log("render from Listk")

    return (
        
        <CountConsumer>{
        (value) => {
            return (<>
                <Button className="margin" variant="outline-warning" onClick={() => value.dispatch("increment")} > + </Button>
                <Badge className="margin" pill bg="warning" text="dark">
                    {value.count}
                </Badge>
                <Button className="margin" variant="outline-warning" onClick={() => value.dispatch("decrement")}> - </Button>
                <Button className="margin" variant="outline-warning" onClick={() => value.dispatch("reset")}> Reset </Button>
              
                <h1>List information</h1>
            <h3>
                <ul>
                    {items.map((i) => (
                        <Link key={i.id} to={`/list/${i.id}`}>   <h3 key={`h${i.id}`}> ok {i.name} </h3> </Link>

                    ))}
                </ul>
            </h3>
            </>)
        }}</CountConsumer>
      
    )
}

export default List;
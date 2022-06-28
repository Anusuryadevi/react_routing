import { Button, Badge } from 'react-bootstrap';
import { CountConsumer } from "../context/CountContext";
const Contact = () => {
    return (
        <CountConsumer>{(value) => {return (<>
                    <Button className="margin" variant="outline-warning" onClick={() => value.dispatch("increment")} > + </Button>
                    <Badge className="margin" pill bg="warning" text="dark">
                        {value.count}
                    </Badge>
                    <Button className="margin" variant="outline-warning" onClick={() => value.dispatch("decrement")}> - </Button>
                    <Button className="margin" variant="outline-warning" onClick={() => value.dispatch("reset")}> Reset </Button>
                    <h1>Contact information</h1>
                </>)}}</CountConsumer>
    )
}

export default Contact;
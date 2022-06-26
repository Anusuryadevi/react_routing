
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { isValidEmail } from '../utils/validations';

const FeedBack = () => {
const [formData, setformData] = useState({
  email : "",
  name : "",
  text : ""
});

const [isValid, setIsValid] = useState({
  email : false,
  name : false,
  text : false
});

function validate(email){

  let isValid = isValidEmail(email) ? true : false;
  console.log(email,isValid);
    setIsValid((prev)=>{
     return {...prev, email:isValid}
    })
  }


  return <>
    <h1>Feedback form</h1>
    <Form>
      <Form.Control 
        className="mb-3" 
        type="email" 
        // value={formData.email}
        onChange = {(e)=>validate(e.target.value)}
        placeholder="name@example.com" />

      <Form.Control
        type="text"
        className="mb-3"
        // value={formData.name}
        placeholder= {isValid.email? "true" : "false" }
        aria-label="Disabled input example"
        disabled= {isValid.email? false : true }
      />

      <Form.Control 
        className="mb-3" 
        // value={formData.text}
        as="textarea" 
        rows={3} 
        placeholder="type your feedback here..." />

      <Button variant="secondary">Submit</Button>{' '}

    </Form>
  </>

}

export default FeedBack;
import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import{useNavigate , Link} from 'react-router-dom';
import array from './data';
import { v4 as uuid } from 'uuid';




function Crud(){
    const[id,setId] = useState('');
    const[name,setname] = useState('');
    const[quantity,setquantity]= useState('');
    const[price,setprice] = useState('');

    let history = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const ids = uuid();

        let uni = ids.slice(0,10)

        let a=quantity,b=name,c=price
        array.push({id:uni, Quantity:a,Name:b,Price:c})

        history('/')
    }


    return(
        <div>            
        <Form className='form' style={{margin:'10rem'}}>
            <Form.Group>
                <Form.Control
                    type = "text"       
                    placeholder = "Enter Id" required />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    onChange={e => setname(e.target.value)}
                    type = "text"       
                    placeholder = "Enter Name" required />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    onChange={e => setquantity(e.target.value)}
                    type = "text"       
                    placeholder = "Enter quantity" required />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    onChange={e => setprice(e.target.value)}
                    type = "text"       
                    placeholder = "Enter price" required={true} />
            </Form.Group>
            <Button onClick = {e => handleSubmit(e)} type="submit">
                Submit
            </Button>
            <Link to='/'>
            <Button>
                Home
            </Button>
            </Link>
        </Form>
        </div>
    )

}

export default Crud

import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './data';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

	const [name, setname] = useState('');
	const [price, setprice] = useState('');
	const[id,setid] = useState('');
    const[quantity,setquantity] = useState('');

	let history = useNavigate()
	
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	const handelSubmit = (e) =>{
		e.preventDefault(); 
		
		let a = array[index] 

		a.Name = name
		a.Price = price
        a.Quantity = quantity

		history('/')
	}


	useEffect(() => {
		setname(localStorage.getItem('Name'))
		setprice(localStorage.getItem('Price'))
		setid(localStorage.getItem('id'))
        setquantity(localStorage.getItem('Quantity'))
	}, [])
	
return (
	<div>
		<Form>

			<Form.Group>
				<Form.Control value={name}
							onChange={e => setname(e.target.value)}
							type="text" placeholder="Enter Name" />
			</Form.Group>

			<Form.Group>
				<Form.Control value={price}
							onChange={e => setprice(e.target.value)}
							type="text" placeholder="Price" />
			</Form.Group>
            <Form.Group>
				<Form.Control value={quantity}
							onChange={e => setquantity(e.target.value)}
							type="text" placeholder="Quantity" />
			</Form.Group>

			<Button
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

			<Link className="d-grid gap-2" to='/'>
			<Button variant="warning" size="lg">Home</Button>
			</Link>
		</Form>
	</div>
)
}

export default Edit

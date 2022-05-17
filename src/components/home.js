import React from "react";
import { Button ,Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useNavigate} from 'react-router-dom';
import array from "./data";


function Home(){

    let history = useNavigate()

    function setID(id,quantity,name,price){
        localStorage.setItem('id', id);
        localStorage.setItem('Quantity', quantity)
        localStorage.setItem('Name',name);
        localStorage.setItem('Price',price);
    }

    function deleted(id){
      
        var index = array.map(function(e) { return e.id; }).indexOf(id);
      
        array.splice(index,1)

        history('/')
      }

    return(
        <div style={{margin:'8rem'}}>
            <Table striped bordered size="sm">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item) => {
                        console.log(item)
                        return(
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td>{item.Quantity}</td>
        
                            <td><Link to={`/edit`}><Button onClick={(e) =>
                                setID(item.id,item.Name,item.Price,item.Quantity)} variant="info">
                                 Update</Button></Link></td>
  
                            <td><Button onClick={e => deleted(item.id)} 
                                variant="danger">Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Link className="button" to='/crud'>
                <Button>Create new entry</Button>
            </Link>
        </div>
    )
}

export default Home
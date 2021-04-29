import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {UserContext} from '../../App';

const Checkout = () => {
    const { name, price } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleOrder = () => {
        const newOrder ={...loggedInUser, productName: name, productPrice: price, orderDate: new Date()}
        console.log(newOrder)
        fetch('https://apple-pie-61871.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(response => response.json())
            .then(data => {
                console.log(data);
        })
    }
    return (
            <Container>
                <h1 className="mt-5">Checkout</h1>
                <div className="card rounded shadow p-5">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                    <hr />
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>1</td>
                            <td>{price} BDT</td>
                        </tr>
                        </tbody>
                        <hr/>
                        <tfoot>
                        <tr>
                            <th colSpan="2">Total</th>
                            <th>{ price}</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <Button variant="success" className="mt-5 float-right" onClick ={handleOrder}>Checkout</Button>
            </Container>
    );
};

export default Checkout;
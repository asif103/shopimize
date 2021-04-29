import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import {UserContext} from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://apple-pie-61871.herokuapp.com/orders?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application.json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`  
            }
        })
        .then(response => response.json())
        .then(data => setOrders(data))
    },[])
    return (
        <Container>
            <h1>Order List</h1>
        <div className="card shadow p-5 mt-5 rounded">
                <table>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer email</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(order =>
                        <tr>
                            <td>{ order.name}</td>
                            <td>{ order.email}</td>
                            <td>{ order.productName}</td>
                            <td>{ order.productPrice}</td>
                            <td>{ order.orderDate}</td>
                        </tr>)
                        }
                        </tbody>
                
            </table>
            </div>
            </Container>
    );
};

export default Orders;
import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Products = ({product}) => {
    const history = useHistory();
    const handleBuy = (name, price) => {
        history.push(`/checkout/${name}/${price}`);
    }
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ product.imageURL} />
                <Card.Body>
                    <Card.Title>{ product.name}</Card.Title>
                    <Card.Text>
                    <strong>PRICE: </strong> { product.price} BDT
                    </Card.Text>
                    <Button variant="success" onClick={() => handleBuy(product.name, product.price)}>Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Products;
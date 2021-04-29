import React, {useState, useEffect} from 'react';
import { Button, Container, Form, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://apple-pie-61871.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            
            <Container>
                <InputGroup className="mb-5 mt-5">
                    <FormControl
                    placeholder="Search your products here"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-success">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Row className="mt-5">
                    {
                        products.length===0 && <Spinner animation="grow" />
                    }
                    {
                        products.map(product => <Products product ={product} key={product._id}></Products>)
                    }
                    
                </Row>
            </Container>
        </div>
    );
};

export default Home;
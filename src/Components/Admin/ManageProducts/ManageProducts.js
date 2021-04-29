import { faList, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useState, useEffect} from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const deleteProduct = (id) => {
        fetch(`https://apple-pie-61871.herokuapp.com/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if (result) {
                fetch('https://apple-pie-61871.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data))
            //     event.target.parentNode.style.display = 'none';
            //    console.log(event.target.parentNode) 
            }
        })
    }
    useEffect(() => {
        fetch('https://apple-pie-61871.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Row>
                <div className="col-md-3 sidebar p-5">
                    <ul>
                        <li>
                            <Link to="manageProduct"><FontAwesomeIcon icon={faList} /> Manage Product</Link>
                        </li>
                        <li>
                            <Link to="addProduct"><FontAwesomeIcon icon={faPlus} /> Add Product</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <h1>Manage PRODUCT</h1>
                    <div className="card p-5 shadow">
                        {
                            products.map(product =>
                                
                                <p>    
                                {product.name} <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></p>)
                        }
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default ManageProducts;
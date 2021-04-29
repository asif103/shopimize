import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register,handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const onSubmit = data => {
        console.log(imageURL)
        const productData = {
          name: data.name,
          price: data.price,
          imageURL: imageURL
        };
        const url = `https://apple-pie-61871.herokuapp.com/addProduct`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
      };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '198346c1a267acb3b74df421e072ac0e');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
        setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
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
                    <h1>ADD PRODUCT</h1>
                    <form action="/addProduct" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" name="name" placeholder="type product name" className="form-control" required ref={register}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Product Price</label>
                            <input type="text" name="price" placeholder="type product price" className="form-control" required ref={register}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productImage">Product Name</label>
                            <input type="file" name="image" className="form-control" required onChange={handleImageUpload}/>
                        </div>
                        <Button variant="success" type="submit">Add</Button>
                    </form>
                </div>
            </Row>
        </div>
    );
};

export default AddProduct;
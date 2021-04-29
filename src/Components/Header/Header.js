import logo from '../../logo.png';
import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Header.css';
import {UserContext} from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let to = '';
    let name = '';
    if (!loggedInUser.name) {
        to = 'login';
        name = '';
    }
    else {
        to = 'logout';
        name = 'welcome back,'+loggedInUser.name;
    }
    return (
        
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to='/'><h3 className="navLink">HOME</h3></Link>
                    <Link to="/orders"><h3 className="navLink">ORDERS</h3></Link>
                    <Link to="/addProduct"><h3 className="navLink">ADMIN</h3></Link>
                        <Link to="/checkout"><h3 className="navLink">DEALS</h3></Link>
                        { name}
                    <Link to={to}><Button>{to}</Button></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
};

export default Header;
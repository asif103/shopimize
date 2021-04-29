import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import ManageProducts from './Components/Admin/ManageProducts/ManageProducts';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NoMatch from './Components/NoMatch/NoMatch';
import React, { createContext, useState } from 'react';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/checkout/:name/:price">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

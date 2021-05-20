import React from 'react'
import {
    Switch,
    Route,
    Link
} from "react-router-dom"
import styled from 'styled-components'

import Home from "./Home"
import Products from "./Products"
import ProductDetails from "./ProductDetails"

const MainWrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
const Nav = styled.nav`
    background-color: #ebd4ef;
    display: flex;
    justify-content:space-around;
    padding: 20px;
    font-size: 28px;
    color: #7b4891;
    font-weight: bold;
    text-decoration: none;

    a {
        text-decoration: none;
        &:hover {
            color: red;
        }
    }
    
`

const Content = styled.main`
    background-color: #ffeff0;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px;
`
const App = () => {
    return (
        <MainWrapper>
            <Nav>
               <Link to="/">Home</Link> 
               <Link to="/products">Products</Link>
            </Nav>
            <Content>
               <Switch>
                   <Route exact path="/">
                       <Home />
                   </Route>
                   <Route exact path="/products">
                       <Products />
                   </Route>
                   <Route path="/products/:productId">
                       <ProductDetails />
                   </Route>
               </Switch>
            </Content>
        </MainWrapper>
    )
 }

export default App;
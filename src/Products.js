import React from 'react'
import productsData from './productsData'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Card = styled.section`
    padding: 20px;
    border: 2px solid #F9AF56;
    border-radius: 35px;
    cursor: pointer;
    &:hover {
        background-color: #f7941f; 
    }
    a {
        text-decoration: none;
    }
`

function Products() {
    const thisProduct = productsData.map(product => (
        <h3 key={product.id}>
            <Card>
                <Link to={`/products/${product.id}`}>{product.name}  </Link>
                   ${product.price}
            </Card>
        </h3>
    ))
    return (
        <div>
            {thisProduct}
        </div>
    )
}

export default Products
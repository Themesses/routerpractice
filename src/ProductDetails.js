import React from 'react'
import {useParams, useHistory} from 'react-router-dom'

import productsData from './productsData'
import Button from './components/Button'

function ProductDetails() {
    const {productId} = useParams()
    const history = useHistory()
    console.log(history)
    const thisParticularProduct = productsData.find(product => product.id === productId)

    function handleClick() {
        console.log("tities")
        history.push("/products")
    }
    return (
        <div>
            <h2>{thisParticularProduct.name} - ${thisParticularProduct.price}</h2>
            <p>{thisParticularProduct.description}</p>
            <Button handleClick={handleClick}/> 
        </div>
    )
}

export default ProductDetails
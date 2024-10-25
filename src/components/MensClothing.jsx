import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './Card'

const MensClothing = () => {
    const [products, setProducts] = useState([])
    const category = "men's clothing"
    const fetchProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        console.log(response,"ASd")
        setProducts(response.data)
    }
useEffect(()=>{
    fetchProducts();
},[])
    return (
        <>
        <h1>Mens Clothing</h1>
        <div className='d-flex justify-content-evenly align-items-center'>
{
    products.map((product)=>{
        return(
            <Card product={product}/>
        )
    })
}
        </div>
        </>
    )
}

export default MensClothing

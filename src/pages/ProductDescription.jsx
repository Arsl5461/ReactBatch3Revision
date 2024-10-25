import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProductDescription = () => {
    const [product,setProduct]=useState({})
    const params=useParams();
    const fetchProduct=async()=>{
const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
setProduct(response.data)
    }
    useEffect(()=>{
        fetchProduct();
    },[])
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <img src={product.image} height={"400px"} width={"400px"}></img>
            </div>
            <div className="col-lg-6">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDescription

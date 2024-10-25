import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
    <div>
      <div className="card">
        <Link to={`${product.id}`}>
        <img src={product?.image} height={"200px"} width={"200px"}/>
        <h6>{product?.title.slice(0,40)}</h6>
        <p>{product?.description.slice(0,15)}</p>
        <hr/>
        <h4>{product?.price}</h4>
        <button className='btn btn-danger w-50' >Details</button>
        </Link>
      </div>
    </div>
  )
}

export default Card

import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className="card col-4 mt-4">
    <img src={product.image} class="card-img-top" alt={product.image}/>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">Category:{product.cat}</p>
      <p className="card-text">Price:{product.price}</p>
      <a href="#" className="btn btn-primary">Add to Cart</a>
    </div>
  </div>
  )
}

export default ProductItem
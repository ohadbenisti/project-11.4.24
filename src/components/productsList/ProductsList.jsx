import React from 'react'
import ProductItem from '../ProductItem/ProductItem'

const ProductsList = ({products}) => {
  return (
    <div className='row'>
        {products.map((product) => {
            return (
            <ProductItem product={product}/>)
        })}

    </div>
  )
}

export default ProductsList

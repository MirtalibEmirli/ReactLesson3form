import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='  justify-self-center flex flex-col'> 
    <img className='size-[250px] object-scale-down py-1' src={product.gallery[0]} alt={product.name}/>
    <h3 className='text-lg font-semibold mt-5 text-center'>{product.title}</h3>
    <p className='text-green-600  text-center'>{product.currency}{product.price}</p>

    </div>
  )
}

export default ProductCard
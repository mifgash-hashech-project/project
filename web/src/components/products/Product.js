import React from 'react'


export default function Product({title, logo}) {

    return (
        <div className="Product">
            <h1>{title}</h1>
            <img className="Product-img" src={`./icons/products/${logo}`} alt={title}/>
        </div>

    )
}
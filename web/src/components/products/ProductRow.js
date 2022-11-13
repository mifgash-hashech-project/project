import React from 'react'
import Product from "./Product";
import {nanoid} from "nanoid";


export default function ProductRow({productsList}) {


    return (
        <div className="Products-Row">
            {productsList.length > 0 && productsList.map((e, i) => (
                <Product title={productsList[i].title} logo={productsList[i].logo} key={nanoid()}/>
            ))}
        </div>

    )
}
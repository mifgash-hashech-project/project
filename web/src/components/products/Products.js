import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext';

import Modal from '../main/Modal';
import ProductRow from "./ProductRow";


const productsList1 = [
    {title: "פיצה בולגרית", logo: "bulgarit.png"},
    {title: "סמבוסק גבינה", logo: "gvina.png"},
    {title: "סמבוסק פיצה", logo: "pizza.jpg"},
]

const productsList2 = [
    {title: "חצ'פורי", logo: "hasapori.jpg"},
    {title: "סחלב חם", logo: "sahlav.jpg"},
    {title: "טוסט בהרכבה", logo: "toast.jpg"},
]
export default function Products() {
    const { modalData } = useContext(ModalContext);



    return (

        <div className="products__container">
            <h1 className="tavla">מוצרים</h1>
            <ProductRow productsList={productsList1}/>
            <ProductRow productsList={productsList2}/>
            {modalData.isModal && <Modal />}
        </div>

    )
}
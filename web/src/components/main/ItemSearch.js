import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../contexts/DataContext';
import { ModalContext } from '../../contexts/ModalContext';

export default function ItemSearch({ itemInput, setOnInput, setIsQuery, }) {
    const history = useHistory();
    const { contentData } = useContext(DataContext);
    const { modalDataDispatch } = useContext(ModalContext);

    return (
        <div className="item-serach__container">

        </div>

    )
}

import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { clearModalAction, goBackAction } from '../../actions/ModalActions';
import Default from './Default';
import LoginPage from '../login/LoginPage';
import Menu from '../account/Menu';
import UpdateItem from '../account/admin/UpdateItem';
import ConfirmDelete from '../account/admin/ConfirmDelete';
import ChangePassword from '../account/admin/account/ChangePassword';
import AddAccount from '../account/admin/account/AddAccount';
import DeleteAccount from '../account/admin/account/DeleteAccount';
import AdjustItems from '../account/admin/AdjustItems';
import ApprovalMessage from './ApprovalMessage';
import UpdateEmployee from "../roles/UpdateEmployee";
export default function Modal() {
    const { modalData, modalDataDispatch } = useContext(ModalContext);
    const components = {
        Default, LoginPage, ApprovalMessage,
        Menu,
        ConfirmDelete, UpdateItem, AdjustItems,
        ChangePassword, AddAccount, DeleteAccount,
        UpdateEmployee
    };
    const [children, setChildren] = useState({ elementName: 'Default', props: {} });
    useEffect(() => {
        setChildren(modalData.children);

    }, [modalData.children])
    const onClickCloseModal = () => {
        modalDataDispatch(clearModalAction());
    };
    const onClickGoBack = (event) => {
        modalDataDispatch(goBackAction());
        event.stopPropagation();
    };
    return (
        <div className="modal__container">
            <div className="modal">
                <div className="modal__header">
                    {modalData.back?.length > 0 && <div className="modal__back" onClick={onClickGoBack}>Back</div>}
                    <div className="close-modal__container" onClick={onClickCloseModal}>
                        <div className="close-modal" ></div>
                    </div>
                </div>
                <div className="modal__content">{React.createElement(components[children.elementName], children.props)}</div>
            </div>
        </div>
    )
}

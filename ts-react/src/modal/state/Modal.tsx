import React, {PropsWithChildren} from 'react'
import {atom, useAtom} from 'jotai';
import '../Modal.css'

interface ModalProps {
    children: React.ReactNode;
}

export const showModalAtom = atom(false);

const Modal: React.FC<ModalProps> = ({children}) => {
    const[showModal, setShowModal] = useAtom(showModalAtom)
    if(!showModal) {
        return null
    }

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={handleClose}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export default Modal;
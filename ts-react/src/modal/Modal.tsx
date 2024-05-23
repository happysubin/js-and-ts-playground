import React, {PropsWithChildren} from 'react'
import './Modal.css'

interface ModalProps {
    show: boolean
    onClose: () => void
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({children, show, onClose}: PropsWithChildren<ModalProps>) => {

    if(!show) {
        return null
    }
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &time
                </button>
            </div>
        </div>
    )
}

export default Modal
import React, { useState } from 'react'
import Modal from "./Modal"

const NonStateModalApp: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = (): void => {
    setShowModal(true);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
  };

  return (
      <div>
        <h1>React TS Modal Example</h1>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal show={showModal} onClose={handleCloseModal}>
          <h2>Modal Title</h2>
          <p> This is a simple Modal</p>
        </Modal>
      </div>
  )
}

export default NonStateModalApp
import React from 'react';
import { useAtom } from 'jotai';
import Modal, {showModalAtom} from "./Modal";



const App: React.FC = () => {
    const [_, setShowModal] = useAtom(showModalAtom);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <div className="App">
            <h1>React TypeScript Modal Example with Jotai</h1>
            <button onClick={handleOpenModal}>Open Modal</button>
            <Modal>
                <h2>Modal Title</h2>
                <p>This is a simple modal with children content.</p>
            </Modal>
        </div>
    );
};

export default App;
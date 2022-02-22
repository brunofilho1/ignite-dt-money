import { GlobalStyle } from './styles/global';
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransationModal() {
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModal}/>
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransationModal}
        >
          <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

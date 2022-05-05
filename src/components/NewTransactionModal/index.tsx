import Modal from "react-modal";

interface NewTranssactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranssactionModal({isOpen, onRequestClose}: NewTranssactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}
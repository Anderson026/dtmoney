import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTranssactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTranssactionModal({isOpen, onRequestClose}: NewTranssactionModalProps) {
  const [type, setType] = useState("deposit");

  

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close">
      <img src={closeImg} alt="Fechar modal" />
    </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType("deposit") }}
            isActive={type === "deposit"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => { setType("withdraw") }}
            isActive={type === "deposit"}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>

      </Container>

    </Modal>
  );
}
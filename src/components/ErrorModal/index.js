import React, { FC, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import { RiErrorWarningFill, RiArrowLeftFill } from "react-icons/ri";

import { Container, Overlay, CloseButton, Button } from "./styles";

const Modal = () => {
  const { closeModal, setError } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <Overlay>
      <Container>
        <RiErrorWarningFill color="white" size={90}/> <br/>
        <strong>Nenhum usuário foi encontrado!</strong> <br /> <br />
        <Button
          onClick={() => {
            setError(false);
          }}
        >
          <RiArrowLeftFill size={20}/> Voltar
        </Button>
      </Container>
    </Overlay>
  );
};

export default Modal;
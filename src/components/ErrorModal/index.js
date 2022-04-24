import React, { FC, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/auth'
import img from "../../assets/close.png";

import { Container, Overlay, CloseButton, Button } from "./styles";

const Modal = () => {
  const { closeModal, setError } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <Overlay>
      <Container>
        <strong>Nenhum usuário foi encontrado!</strong> <br /> <br />
        <Button
          onClick={() => {
            setError(false);
          }}
          type="button"
        >
          Voltar ...
        </Button>
        {/*<CloseButton
          type="button"
          onClick={() => {
            //closeModal();
          }}
        >
          <img src={img}/>
        </CloseButton>*/}
      </Container>
    </Overlay>
  );
};

export default Modal;
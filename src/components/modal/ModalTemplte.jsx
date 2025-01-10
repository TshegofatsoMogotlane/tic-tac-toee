import React, { useContext } from "react";
import ReactDom from "react-dom";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalBackdrop, ModalContainer } from "../modal/Modal.Styled.js";

export const ModalTemplate = () => {
  const { modal, modalContent, handleModal } = useContext(ModalContext);

  if (modal) {
    return ReactDom.createPortal(
      <div>
        <ModalBackdrop>
          <ModalContainer>{modalContent}</ModalContainer>
        </ModalBackdrop>
      </div>,
      document.getElementById("modal")
    );
  }

  return null;
};

import React,  { createContext } from "react";
import { useModal } from "../hooks/useModal";
import {ModalTemplate} from "../components/modal/ModalTemplte"
export const ModalContext = createContext({});

export const ModalContextProvider = ({children}) => {
    const {modal, modalContent, handleModal}= useModal()
  return (
    <ModalContext.Provider value={{modal, modalContent, handleModal}}>
        <ModalTemplate/>
        {children}   
    </ModalContext.Provider>
  )
}


import { useState } from "react"

export const useModal =()=>{
    const [modal, setModal]=useState(false);
    const [modalContent, setModalContent]=useState("I am modal")

    const handleModal=(content=false)=>{
        setModal(!modal);
        if(content){
            setModalContent(content)
        }
    }
    return {modal, modalContent, handleModal}
}

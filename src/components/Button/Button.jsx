import React from 'react'
import { ButtonWrapper } from './Button.styled'

export default function Button(props) {
  return (
    <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
  )
}

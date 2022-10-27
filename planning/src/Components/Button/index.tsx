import React from "react";
import { ButtonProps } from "./Interface";
import { ButtonStyled } from "./styled";

export const Button = ({ onClick, type, children }: ButtonProps) => {
    return(
        <ButtonStyled onClick={onClick} type={type}>
            {children}
        </ButtonStyled>
    )
}
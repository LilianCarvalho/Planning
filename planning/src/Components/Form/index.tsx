import React from "react";
import {Button} from "../Button";
import {Container, ContainerFomr, Input, Title } from './styled'

const Form = () => {
    return(
        <Container action="">
            <ContainerFomr >
                <Title htmlFor="task">Adicione uma tarefa</Title>
                <Input 
                type="text" 
                name="task" 
                id="task" 
                placeholder="Adicione uma tarefa" 
                required
                />
            </ContainerFomr>
            <ContainerFomr >
                <Title htmlFor="time">Escolha o tempo de estudos</Title>
                <Input 
                type="time" 
                name="time" 
                id="time" 
                required step="1"                  
                min="00:00:00" max="01:30:00"/>
            </ContainerFomr>
                <Button type="submit" >
                    Adicionar
                </Button>
        </Container>
     )
 }

export default Form

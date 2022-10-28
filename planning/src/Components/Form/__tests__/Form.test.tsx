import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import  Form  from "../index";

describe('Form', () => {
    it('Should render Form', () => {
        render(<Form setTask={() => jest} />)
 
        expect(screen.getByText(/adicione uma tarefa/i))
        expect(screen.getByRole('textbox', {
            name: /adicione uma tarefa/i
          }))
        expect(screen.getByText(/adicione um tempo/i))
        expect(screen.getByLabelText(/adicione um tempo/i))
        expect(screen.getByRole('button', {name: /adicionar/i}))
    }

)})

it('Should must fill in the input "Adicione uma tarefa" and clicked in button', async () => {     
    const { getByPlaceholderText } = render(<Form setTask={() => jest} />) 

    const inputElement = getByPlaceholderText('Adicione uma tarefa')

    userEvent.type(inputElement, 'test')

    const button = screen.getByRole('button', {name: /adicionar/i})
         
     userEvent.click(button) 
    
})

it('Shoul must fill in the input "inputTime"', () => {     
    const { getByPlaceholderText } = render(<Form setTask={() => jest} />) 

    const inputElement = getByPlaceholderText('inputTime')

    userEvent.type(inputElement, '00:002')
    
})
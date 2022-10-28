import { getByPlaceholderText, getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import  StopWatch  from "../index";

describe('StopWatch', () => {
    it('Should render StopWatch', () => {
        render(<StopWatch finishTask={() => jest} select={undefined}/>)

        expect(screen.getByRole('heading', {
            name: /escolha uma tarefa para iniciar o tempo/i
          }))
        
          expect(screen.getAllByText(/0/i))

        expect(screen.getByText(/:/i))
        
        expect(screen.getByRole('button', {
            name: /iniciar/i
          }))

        screen.logTestingPlaygroundURL()
    })

    it('Should start the counter', async () => {
       const {getByPlaceholderText} = render(<StopWatch finishTask={() => jest} select={undefined}/>)

        const inputElement = getByPlaceholderText('secundUnit')

        userEvent.type(inputElement, '2')

        const Button = screen.getByRole('button', {name: /iniciar/i})

        userEvent.click(Button)
        
        await userEvent.type(inputElement, '1')
       

       
    } )

    
})
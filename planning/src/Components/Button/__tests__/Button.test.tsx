import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../index";

const onClick = jest.fn()

describe('Button', () => {
    it('Should render Button', () => {
        render(<Button onClick={onClick}>Test</Button>)

         const button = screen.getByRole('button')
         
         userEvent.click(button)

        expect(screen.getByRole('button', {
            name: /test/i
          })).toBeInTheDocument
    })
})
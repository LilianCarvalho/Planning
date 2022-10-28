import React from "react";
import { render, screen } from "@testing-library/react";
import  Watch  from "../index";

describe('Form', () => {
    it('Sould render Watch', () => {
        render(<Watch/>)

        expect(screen.getAllByText(/0/i))
        expect(screen.getByText(/:/i))
    })
})
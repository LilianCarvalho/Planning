import React from "react";
import { render, screen } from "@testing-library/react";
import  Watch  from "../index";

describe('Watch', () => {
    it('Should render Watch', () => {
        render(<Watch/>)

        expect(screen.getAllByText(/0/i))
        expect(screen.getByText(/:/i))
    })
})
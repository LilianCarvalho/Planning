import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import  Item  from "../index";

describe('Item', () => {
    it('Should render Item', () => {
        render(<Item 
            id="test" 
            completed={false} 
            select={true} 
            selectTask={() => jest} 
            task={'test'}
            time={'00:01'} 
            />)

            expect(screen.getByRole('listitem'))

            expect(screen.getByRole('heading', {
                name: /test/i
              }))
            
            expect(screen.getByText(/00:01/i))
        
        })

        it('Should render Item with status completed and clicked', () => {
            render(<Item 
                id="test" 
                completed={true} 
                select={true} 
                selectTask={() => jest} 
                task={'test'}
                time={'00:01'} 
                />)
    
                const List = screen.getByRole('listitem')

                expect(screen.getByRole('listitem'))

                userEvent.click(List)
    
                expect(screen.getByRole('heading', {
                    name: /test/i
                  }))
                
                expect(screen.getByText(/00:01/i))
    
                expect(screen.getByText(/completo/i))
            
            })
    })

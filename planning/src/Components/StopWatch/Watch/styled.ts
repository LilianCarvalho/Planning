import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`

export const Number = styled.p`
  background-color: #5D677C;
    box-shadow: 2px 2px 4px #2b2b2b inset;
    align-items: center;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;


  @media screen and (min-width:1280px) {
    height: 10.8rem;
    width: 9rem;
  }
`;

export const Division = styled.p`
   font-size: 5rem;
`;
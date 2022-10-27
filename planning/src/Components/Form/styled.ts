import styled from 'styled-components';

export const Container = styled.form`
  display:flex;
  flex-direction: column;
  background-color: #7687A1;
  border-radius: 10px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 20px;
  max-width: 80%;
  margin: auto;
  margin-top: 20px;
`;

export const ContainerFomr = styled.div`
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
`

export const Input = styled.input`
    width: 100%;
      padding: 8px 12px 4px;
      box-sizing: border-box;
      border: unset;
      border-radius: 5px;
      background-color: #5D677C;
      box-shadow: 0px 2px 4px #2D2B2B9F inset;
      
      &::placeholder {
        color: #BFBFBF;
      }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: 2.25rem;
    padding: 24px;
    box-sizing: border-box;
  }
`

export const Title = styled.label`
    font-size: 2rem;  
`;

export const Describe = styled.p`
  font-size: 1,5rem;
  padding: 12px;
  margin-left: 8px;
  font-weight: bold;
`
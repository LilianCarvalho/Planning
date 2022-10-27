import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #5a6577;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009f;
    padding: 20px;
    max-width: 80%;
    margin: auto;
    margin-top: 20px;
`;

export const ContainerWatch = styled.div`
   align-items: center;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;

`;

export const Title = styled.h3`
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 24px;  
`;

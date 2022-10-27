import styled from 'styled-components';

export const Container = styled.aside`
  width: 80%;
  height: 100%;
  margin: auto;
  background-color: #7687A1;
  padding: 20px;
  margin-top: 20px;  
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 12px;

  @media screen and (min-width:1280px) {
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 24px;
  }
`;

export const Table = styled.ul`
   max-height: 350px;
   scrollbar-width: thin;

   @media screen and (min-width:1280px) {
    overflow: auto;
    max-height: 500px;
   }
`;
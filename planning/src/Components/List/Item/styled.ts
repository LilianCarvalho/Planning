import styled from 'styled-components';

export const Container = styled.li`
  background-color: #4D4D4D;
  border-radius: 8px;
  box-shadow: 2px 4px 4px #0000009F;
  padding: 15px;
  margin-bottom: 8px;
  position: relative;
  cursor: pointer;
  list-style: none;

`;

export const TitleTask = styled.h3`
   margin-bottom: 8px;
   word-break: break-all;
`;

export const Time = styled.p`
  color: #D0D0D0;
`;

export const CompletedTask = styled.span`
  color: #1ce21c;
  font-weight: bold;
  font-size: 20px;
`
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Form  from './Components/Form';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    max-height: 100%;
  }
`;

function App() {
  return (
    <> 
      <GlobalStyle />
      <Form />
    </>
  );
}

export default App;

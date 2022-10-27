import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Form  from './Components/Form';
import List from './Components/List/List';
import { ITask } from './types/ITask';

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

  const [task, setTask] = useState <ITask[]>([])
  const [select, setSelect] = useState <ITask>()

  function selectTask(taskSelect: ITask){
    setSelect(taskSelect) 
    setTask((oldTask: any[]) =>oldTask.map(task =>({
      ...task, 
      select: task.id === taskSelect.id ? true: false
    })))
  }
  console.log(selectTask)

  return (
    <> 
      <GlobalStyle />
      <Form setTask={setTask}/>
      <List task={task}
      selectTask={selectTask}

     />
    </>
  );
}

export default App;

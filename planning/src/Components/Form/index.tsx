import React from "react";
import { ITask } from "../../types/ITask";
import {Button} from "../Button";
import {Container, ContainerFomr, Input, Title, Describe } from './styled'
import {v4 as uuid} from 'uuid'

 class Form extends React. Component<{ setTask: React.Dispatch<React.SetStateAction<ITask[]>>}>{
     state = {
         task : "",
         time: "00:00"          
     }
     addTask(event: React.FormEvent){
        event.preventDefault()
         this.props.setTask(oldTask => [...oldTask,{...this.state,
            select: false,
            completed: false, 
            id:uuid()}])
         this.setState({
            task:"",
            time:"00:00"
         })

     }
     render(){
         return(
            <Container action="" onSubmit={this.addTask.bind(this)}>
                <ContainerFomr >
                    <Title htmlFor="task">Adicione uma tarefa</Title>
                    <Input 
                    type="text" 
                    name="task" 
                    id="task" 
                    value={this.state.task}
                    onChange={e => this.setState({...this.state,task:e.target.value})}
                    placeholder="Adicione uma tarefa" 
                    required
                    />
                </ContainerFomr>
                <ContainerFomr >
                    <Title htmlFor="time">Adicione um tempo</Title>
                    <Describe>E não se esqueça de descansar a cada hora de trabalho concluido</Describe>
                    <Input 
                    placeholder="inputTime" 
                    type="time" name="time" 
                    id="time" 
                    required 
                    step="1" 
                    onChange={e => this.setState({...this.state,time:e.target.value})} 
                    value={this.state.time} 
                    min="00:00:00" 
                    max="01:00:00"
                    />
                </ContainerFomr>
                    <Button type="submit" >
                            Adicionar
                    </Button>
            </Container>
         )
     }
 }
 export default Form
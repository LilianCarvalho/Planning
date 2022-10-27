import React from "react";
import { ITask } from "../../types/ITask";
import {Button} from "../Button";
import {Container, ContainerFomr, Input, Title } from './styled'
import {v4 as uuid} from 'uuid'

 class Form extends React. Component<{ setTask: React.Dispatch<React.SetStateAction<ITask[]>>}>{
     state ={
         task :"",
         time:"00:00"          
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
                    <Input type="text" 
                    name="task" 
                    id="task" value={this.state.task}
                    onChange={evento => this.setState({...this.state,task:evento.target.value})}
                    placeholder="Adicione um Estudo" required/>
                    </ContainerFomr>
                    <ContainerFomr >
                    <Title htmlFor="time">Determine o time</Title>
                    <Input type="time" name="time" id="time" required step="1" onChange={(_event: any) => this.setState({...this.state,time:_event.target.value})} 
                    value={this.state.time} min="00:00:00" max="02:00:00"/>
                    </ContainerFomr>
                        <Button type="submit" >
                            Agendar
                        </Button>
            </Container>
         )
     }
 }
 export default Form
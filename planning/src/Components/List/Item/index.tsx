import { spawn } from 'child_process'
import styled from 'styled-components'
import { ItemProps } from './Interface'
import { Container, TitleTask, Time, CompletedTask } from './styled'


 const Item = ({task, time, select, completed, id, selectTask}: ItemProps) => {
    return (
        <Container onClick={()=>!completed && selectTask({
            task, time, select, completed, id
        })}>
            {completed && <CompletedTask>COMPLETO</CompletedTask>}
            <TitleTask>{task}</TitleTask>
            <Time>{time}</Time>
           
        </Container>
    )
}

export default Item
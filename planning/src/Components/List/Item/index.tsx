import { ItemProps } from './Interface'
import { Container, TitleTask, Time } from './styled'


 const Item = ({task, time, select, completed, id, selectTask}: ItemProps) => {
    return (
        <Container className={`${Item} ${select? select: ''}${completed? completed: ''} `} onClick={()=>!completed && selectTask({
            task, time, select, completed, id
        })}>
            <TitleTask>{task}</TitleTask>
            <Time>{time}</Time>
            {completed && <span aria-label='tarefaCompleta'></span>}
        </Container>
    )
}

export default Item
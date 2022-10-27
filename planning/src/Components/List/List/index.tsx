import Item from '../Item';
import { ListProps } from './Interface'
import {Container, Title, Table} from './styled'

const List = ({task, selectTask}: ListProps) => {
    return (
        <Container >
            <Title>Tarefas do Dia</Title>
            <Table>
                {task.map(item => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </Table>
        </Container>
    )
}

export default List
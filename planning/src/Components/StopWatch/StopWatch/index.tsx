import {Button} from "../../Button";
import Watch from "../Watch";
import { timeToSecund } from "../../../common/utils/time";
import { StopWatchProps } from "./Interface";
import { useEffect, useState } from "react";
import {Container, ContainerWatch, Title } from './styled'

const StopWatch = ({select, finishTask}: StopWatchProps) => {
    const [time, setTime] = useState <number>()

    useEffect(()=>{
        if(select?.time){
        setTime (timeToSecund(String(select?.time)))
    }
    }, [select])

    function regressive(counter: number = 0){
        setTimeout(()=>{
            if(counter > 0){
                    setTime(counter - 1)
                    return regressive(counter -1)
            }
            finishTask();
        },1000)
            
    }
   
    return(
        <Container >
            <Title >Escolha uma tarefa para iniciar o tempo</Title>
            <ContainerWatch >
            <Watch
                time={time}
            />
            </ContainerWatch>         
                <Button onClick= {()  => regressive(time)}>
                    Iniciar
                </Button>
        </Container>
    )    
}

export default StopWatch
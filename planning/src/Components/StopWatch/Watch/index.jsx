import React from "react"
import { Container, Number, Division } from './styled'

const Watch = ({time = 0}) => {
    const minute = Math.floor(time/60)
    const secund = time % 60

    const [minuteTen,minuteUnit] = String(minute).padStart(2,'0')
    const [secundTen,secundUnit] = String(secund).padStart(2, '0')

    return(
        <Container >
            <Number>{minuteTen}</Number>
            <Number>{minuteUnit}</Number>
            <Division>:</Division>
            <Number>{secundTen}</Number>
            <Number>{secundUnit}</Number>       
        </Container>
    )
}

export default Watch
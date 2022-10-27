export function timeToSecund(time:string){
    const[hours = 0, minutes = 0, second = 0] = time.split(":")

    const hoursToSecund = Number(hours) * 3600
    const minutesToSecund = Number(minutes) * 60
    return hoursToSecund + minutesToSecund + Number(second)
}
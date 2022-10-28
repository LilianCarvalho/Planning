import { ITask } from "../../../../types/ITask"

export interface StopWatchProps{
    select: ITask | undefined 
    finishTask: () => void
}
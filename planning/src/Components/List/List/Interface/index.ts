import { ITask } from "../../../../types/ITask"

export interface ListProps{
    task: ITask[],
    selectTask: (selectTask: ITask) => void    
}
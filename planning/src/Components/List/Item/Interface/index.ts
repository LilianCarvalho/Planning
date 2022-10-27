import { ITask } from "../../../../types/ITask"

export interface ItemProps extends ITask{
    selectTask: (selectTask:ITask)=> void
}
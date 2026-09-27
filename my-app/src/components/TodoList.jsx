import { memo, useContext } from "react"
import TodoItem from "./TodoItem"
import { TasksContext } from "../context/TaskContext"
const TodoList = ()=>{
    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)
    const hasTasks = tasks.length > 0
    const isEmptyFilterdTasks = filteredTasks?.length ===  0
    if (!hasTasks){
        return <div className="todo__empty-message">Задач пока нет</div>
    }
    if (hasTasks && isEmptyFilterdTasks){
        return <div className="todo__empty-message">Найденных задач нет</div>
    }
    return(
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map( task =>(
                <TodoItem  
                    className = 'todo__item'
                    key = {task.id}
                    {...task}
                />
            ))}
        </ul>
    )
}
export default memo(TodoList)
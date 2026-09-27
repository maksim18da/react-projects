import { createContext} from "react";
import useTasks from "./hooks/useTasks";
import useIncompleteTaskScroll from "./hooks/useIncompleteTaskScroll";

export const TasksContext = createContext({})

export const TasksProvider = (props) =>{
    const{ children} = props
    const{
        tasks,
        filteredTasks,
        deleteAlltasks,
        deleteTask,
        toggleTaksComplete,
        newTaskTitle,
        setNewTaskTitle,
        setSearchQuery,
        searchQuery,
        newTaskInputRef,
        addTask,
    } = useTasks()
    const{
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)
    return(
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                deleteAlltasks,
                deleteTask,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                toggleTaksComplete,
                newTaskTitle,
                setNewTaskTitle,
                setSearchQuery,
                searchQuery,
                newTaskInputRef,
                addTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}
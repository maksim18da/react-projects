import { useContext,useState } from "react"
import { TasksContext } from "../context/TaskContext"
import Field from "./Field"
import Button from "./Button"

const AddTaskForm = () => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TasksContext)

    const [error,setError] = useState('')
    const clearTaskTitle = newTaskTitle.trim()
    const isNewTasksTitlteEmpty = clearTaskTitle.length === 0

    function onSubmit(e){
        e.preventDefault()
        if (!isNewTasksTitlteEmpty){
            addTask(clearTaskTitle)
        }
    }

    const onInput = (event) =>{
        const value = event.target.value
        const clearValue = value.trim()
        const hasOnlySpaces = value.length>0 && clearValue.length === 0

        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'Error' : '')
    }

    return(
        <form className="todo__form" onSubmit={onSubmit}>
            <Field 
                className='todo__field'
                label='New task title'
                id='new-task'
                value={newTaskTitle}
                error = {error}
                onInput={onInput}
                ref={newTaskInputRef}
            />
            <Button 
                type='submit'
                isDisabled = {newTaskTitle.trim().length === 0}
            >
                Add
            </Button>
        </form>
    )
}
export default AddTaskForm
import {useState,useRef, useCallback,useEffect, useMemo } from "react";
import useTasksLocalStorage from "./useTasksLocalStorage";
const useTasks = () =>{
    const {
        savedTasks,
        saveTasks,
    } = useTasksLocalStorage()
    const [tasks, setTasks] = useState(savedTasks ?? [
            {id:'task-1',title:'Купить молоко', isDone: false},
            {id:'task-2',title:'Погладить кота', isDone: true},
            {id:'task-3',title:'Сходит в зал', isDone: false}
        ])

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const newTaskInputRef = useRef(null)

    const deleteAlltasks = useCallback(()=>{
        setTasks([])
    }, [])
    
    const deleteTask = useCallback((taskId)=>{
        setTasks(tasks.filter(task => task.id!=taskId))
    }, [tasks])
    const toggleTaksComplete = useCallback((taskId,isDone)=>{
        setTasks(
            tasks.map(task=>{
                if (task.id == taskId){
                    return {...task,isDone}
                }
                return task
            })
        )
    },[tasks])

    const addTask = useCallback((title)=>{
        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(),
            title,
            isDone: false,
        }
        setTasks((prevTasks) => [...prevTasks, newTask])
        setNewTaskTitle('')
        setSearchQuery('')
        newTaskInputRef.current.focus()
    }, [])
    useEffect(()=>{
        saveTasks(tasks)
    }, [tasks])

    useEffect(()=>{
        newTaskInputRef.current.focus()
    },[])
    
    const filteredTasks = useMemo(()=>{
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return (clearSearchQuery.length > 0 ? 
            tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery)) 
            : null)
    },[searchQuery,tasks])

    return{
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
    }
}
export default useTasks
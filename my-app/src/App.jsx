import ToDo from "./components/ToDo"
import { TasksProvider } from './context/TaskContext'
const App = () => {
  return(
    <TasksProvider>
      <ToDo></ToDo>
    </TasksProvider>
  )
}
export default App

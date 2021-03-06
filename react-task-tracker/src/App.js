import { useState , useEffect} from 'react'
import Header from './components/Header' 
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () =>{
  const [showAddTask, setShowAddTask ] = useState(false)
  const [tasks , setTasks] = useState([])

// AddTask
const addTask = (task) =>{
  const newTask={...task}
  setTasks([...tasks, newTask])
}


// deleteTask
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggleReminder
const toggleTask = (id) =>{
  setTasks(
    tasks.map((task)=> 
    task.id === id ? {...task, reminder:!task.reminder}: task))
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask}/> : 'Yeaah No Tasks'}
    
    </div>
  );
}

export default App;

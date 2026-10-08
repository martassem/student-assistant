import tasks from "./tasks.json"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header taskCount={tasks.length} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
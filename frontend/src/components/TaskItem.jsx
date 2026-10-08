function TaskItem({ task }) {
  return (
    <li
      className={`task-card priority-${task.priority} ${
        task.completed ? "completed" : ""
      }`}
    >
      <h3>{task.title}</h3>
      <span>{task.priority}</span>
    </li>
  )
}

export default TaskItem
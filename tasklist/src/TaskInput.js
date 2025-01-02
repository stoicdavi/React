function TaskInput(props){
    return (
        <div>
            <input type="text" 
            placeholder="Enter task" 
            value={props.newTask} 
            onChange={(e) => props.setNewTask(e.target.value)}
            />
            <button onClick={props.handleAddTask}>Add a task</button>
        </div>
    )
}

export default TaskInput;
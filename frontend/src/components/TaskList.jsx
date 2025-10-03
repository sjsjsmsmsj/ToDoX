import TaskEmptyState from './TaskEmptyState';
import TaskCard from './TaskCard.jsx';



const TaskList = () => {
    let filter = 'all';
    const filteredTasks = [
        {
            _id: "1",
            title: "Học react",
            status: "active",
            completedAt: null,
            createdAt: new Date()
        },
        {
            _id: "2",
            title: "Học mongo",
            status: "complete",
            completedAt: null,
            createdAt: new Date()
        },
    ]
    if (filteredTasks.length === 0 || !filteredTasks) {
        return <TaskEmptyState filter={filter} />
    }
    return (
        <div className='space-y-3'>
            {
                filteredTasks.map((task, index) => (
                    <div key={task._id}>
                        <TaskCard task={task} index={index} />
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList
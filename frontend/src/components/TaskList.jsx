import React from 'react'
import TaskEmptyState from './TaskEmptyState';
import TaskCard from './TaskCard';


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
                filteredTasks.map((task) => (
                    <div key={task._id}>
                        <TaskCard task={task} />
                    </div>
                ))
            }
        </div>
    )
}

export default TaskList
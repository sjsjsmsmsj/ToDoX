import Task from "../models/Task.js";

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const task = new Task({ title })

        const newTask = await task.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTask = async (req, res) => {
    try {
        const { title, status, completeAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, status, completeAt }, { new: true })
        if (!updateTask) {
            return res.status(404).json({ message: `Không tìm thấy nhiệm vụ có id: ${req.params.id}` })
        } else {
            res.status(200).json(updatedTask);
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if (!deletedTask) {
            return res.status(404).json({ message: "Nhiệm vụ không tồn tại" })
        } else {
            res.status(200).json(deletedTask)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export {
    getAllTask,
    createTask,
    updateTask,
    deleteTask
}


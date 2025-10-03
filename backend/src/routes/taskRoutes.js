import express from 'express'
import { getAllTask, updateTask } from '../controllers/tasksControllers.js';
import { createTask, deleteTask } from '../controllers/tasksControllers.js';

const router = express.Router()

router.get("/", getAllTask)

router.post("/", createTask)

router.put("/:id", updateTask)

router.delete("/:id", deleteTask)

export default router


import express from 'express'
import taskRoute from './routes/taskRoutes.js'
import { connectDB } from '../config/db.js'


const app = express();
app.use(express.json())
app.use('/api/tasks', taskRoute)



connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server bắt đầu", process.env.PORT)
    })
}).catch((error) => {
    console.log(error)
})


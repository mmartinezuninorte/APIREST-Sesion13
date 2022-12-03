import express from "express"
import taskRoutes from './routes/task.router'
import expressStatusMonitor from 'express-status-monitor'

const app = express()

app.set('port', 3000)

app.use(express.json())
app.use(expressStatusMonitor())

app.get('/',(request, response)=>{
    response.json({message: "Bienvenido a mi aplicacion"})
})

app.post('/',(request, response)=>{
   response.json({message: "Estas haciendo una peticion POST"})
});

app.use('/api/tasks', taskRoutes)

export default app
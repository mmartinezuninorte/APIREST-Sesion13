// Controladores, que ejecutan acciones, dependiendo de la ruta y metodo llamado
// exportando hacia task.router
import Task from '../models/Task'

export const newTask = async (request, response)=>{
    const newTask = new Task({
        title: request.body.title,
        description: request.body.description
    })
    await newTask.save()
    console.log(newTask)
    response.json({message: 'Su tarea fue guardada exitosamente'})
}

export const findAllTasks = async (request, response)=>{
    const tasks = await Task.find()
    response.json(tasks)
}

export const deleteByID = async (request, response)=>{
    await Task.findByIdAndDelete(request.params.id)
    response.json({message: 'Registro eliminado correctamente'})
}

export const updateByID= async(request, response)=>{
    await Task.findByIdAndUpdate(request.params.id, request.body)
    response.json({message: 'Registro actualizado correctamente'})
}

export const findOneTask = async (request, response)=>{
    const task = await Task.findById(request.params.id)
    response.json(task)
}

export const findByName = async (request, response)=>{
    const search = request.body.title
    const result = await  Task.find({title: search})
    response.json(result)
}
// Controladores, que ejecutan acciones, dependiendo de la ruta y metodo llamado
// exportando hacia task.router
import Task from '../models/Task'

export const newTask = async (request, response)=>{
    if (!request.body.title){
        return response.status(400).json({message:"El campo title es requerido"})
    }
    try {
        const newTask = new Task({
            title: request.body.title,
            description: request.body.description
        })
        await newTask.save()
        console.log(newTask)
        response.json({message: 'Su tarea fue guardada exitosamente'})
    } catch (error) {
        response.status(500).json({
            message: 'Error al crear nueva tarea'
        })
    }
}

export const findAllTasks = async (request, response)=>{
    try {
        const tasks = await Task.find()
        response.json(tasks)
    } catch (error) {
        response.status(500).json({
            message: 'Error al consultar las tareas'
        })
    }
}

export const deleteByID = async (request, response)=>{
    const id = request.params.id
    try {
        await Task.findByIdAndDelete(id)
        response.json({message: `La tarea con id: ${id} fue eliminada correctamente`})
    } catch (error) {
        response.status(500).json({
            message: `Error al eliminar el id: ${id}`
        })
    }
}

export const updateByID= async(request, response)=>{
    const id = request.params.id
    try {
        await Task.findByIdAndUpdate(id, request.body)
        response.json({message: `Registro con id: ${id} actualizado correctamente`})
    } catch (error) {
        response.status(500).json({
            message: `Error al actualizar el id: ${id}`
        })
    }   
}

export const findOneTask = async (request, response)=>{
    try {
        const task = await Task.findById(request.params.id)
        if(!task) return response.status(404).json({
            message: "No pudimos encontrar tu id"
        })
        response.json(task)
    } catch (error) {
        response.status(500).json({
            message: "Error inesperado al momento de realizar la consulta"
        })
    } 
}


export const findByName = async (request, response)=>{
    const search = request.body.title
    if (!search){
        return response.status(400).json({message:"El campo title es requerido"})
    }
    try {
        const result = await  Task.find({title: { $regex: search, $options: 'i' }})
        if (result.length === 0){
            return response.status(404).json({message:"No se encontraron coincidencias"})
        }
        response.json(result)
    } catch (error) {
        response.status(500).json({
            message: `Error inesperado al buscar: ${search}`
        })
    }
}
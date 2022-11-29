/*
ELEMENTOS DE UNA TAREA:

- TITULO - title
- DESCRIPCION - description
- ESTADO - done boolean false o true

*/
//creando el esquema de tareas y utilizando model para trabajar con funciones basicas de CRUD
import { Schema, model } from "mongoose";

const taskSchema = new Schema ({
   title: {
    type: String,
    required: true,
    trim: true},
   description: String,
   done: {
    type:Boolean,
    default: false}
},{
    timestamps: true,
    versionKey: false
})

export default model('Task', taskSchema)
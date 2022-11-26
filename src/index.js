import express from 'express'
import mongoose from 'mongoose'
import DB_CONFIG from './config.json'

const app = express()

app.set('port', 3000)

app.listen(app.get('port'),()=>{
    console.log("Servidor levantado en  puerto ", app.get('port'))
})

app.get('/',(request, response)=>{
    response.json({message: "Bienvenido a mi aplicacion"})
})

app.post('/',(request, response)=>{
    response.json({message: "Estas accediendo mediante una peticion POST"})
});

(async()=>{
    const db = await mongoose.connect(DB_CONFIG.MONGODB_URI)
    console.log('Conectado a la base de datos: ', db.connection.name)
})()

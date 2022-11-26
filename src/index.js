import express from 'express'
import mongoose from 'mongoose'

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
    const db = await mongoose.connect('mongodb+srv://admin:Wi6G96YmCA60fc9m@cluster0.gfhuiwi.mongodb.net/?retryWrites=true&w=majority')
    console.log('Conectado a la base de datos: ', db.connection.name)
})()

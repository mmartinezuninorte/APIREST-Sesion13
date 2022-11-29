import express from "express"

const app = express()

app.set('port', 3000)

app.get('/',(request, response)=>{
    response.json({message: "Bienvenido a mi aplicacion"})
})

app.post('/',(request, response)=>{
    response.json({message: "Estas accediendo mediante una peticion POST"})
});

export default app
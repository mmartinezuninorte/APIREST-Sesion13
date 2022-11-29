import mongoose from "mongoose"
import DB_CONFIG from "./config.json"

(async()=>{
    const db = await mongoose.connect(DB_CONFIG.MONGODB_URI)
    console.log('Conectado a la base de datos: ', db.connection.name)
})()
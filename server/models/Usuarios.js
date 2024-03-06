import mongoose from "mongoose";


const usuariosSchema = new mongoose.Schema({
  
    nombre: {type:String, required:true, trim:true},
    apellido: {type:String, required:true, trim:true},
    contrasena: {type:String, required:true, trim:true},
    correo: {type:String, required:true, trim:true},
    direccion: {type:String, required:true, trim:true},
    fechaNacimiento: {type:Number, required:true, trim:true},
    imagen: {url:String, public_id:String},
})

export default mongoose.model("Usuarios", usuariosSchema)





























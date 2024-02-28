import mongoose from "mongoose";
//import autopopulate from "mongoose-autopopulate";


const usuariosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: {type:String, required:true, trim:true},
    apellido: {type:String, required:true, trim:true},
    direccion: {type:String, required:true, trim:true},
    correo: {type:String, required:true, trim:true},
    fechaNacimiento: {type:Number, required:true, trim:true},
})
//modulosSchema.plugin(autopopulate)
export default mongoose.model("Usuarios", usuariosSchema)
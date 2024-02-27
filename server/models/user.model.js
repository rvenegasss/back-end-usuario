import mongoose from 'mongoose';

// schema
const { Schema } = mongoose; 

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    direccion: String,
    email: String,
    fechaNacimiento: String,
} )

const User = mongoose.model('Usuario', userSchema);

export default User;
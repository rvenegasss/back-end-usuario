import mongoose from 'mongoose';

// schema
const { Schema } = mongoose; 

const userSchema = new Schema({
    name: String,
    lastName: String,
    direction: String,
    email: String,
    fechaNacimiento: String,
} )

const User = mongoose.model('Usuario', userSchema);

export default User;
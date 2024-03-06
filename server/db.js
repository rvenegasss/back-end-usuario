import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
const app = express();
import express from 'express';

const connectDB = async() => {
    try{
        const db= await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected to", db.connection.name);
    }catch(error){
        console.log(error);
    }
}
app.post('/api/loginUsuario ', async (req, res) => {
    const { correo, contrasena } = req.body;
  
    try {
      const usuario = await Usuarios.findOne({ correo });
  
      if (!usuario) {
        return res.status(401).json({ error: 'Correo electrónico incorrecto' });
      }
  
      if (usuario.contrasena !== contrasena) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
  
      // Autenticación exitosa
      res.json({ message: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
  

  
  
  
export default connectDB;

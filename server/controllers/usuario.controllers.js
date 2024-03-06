
import Usuarios from "../models/Usuarios.js";
import { deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra"
import {uploadImagenUsuarios} from "../libs/cloudinary.js"
import fetch from "node-fetch";

export const getUsuarios = async (req, res) => {       //obtener todos los usuarios disponibles en la db
    try {
        const usuarios = await Usuarios.find();
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUsuarios = async (req, res) => {
    try {
        const { nombre, apellido, contrasena, correo, direccion, fechaNacimiento } = req.body;
        let imagen;

        if(req.files?.imagen){
            const result = await uploadImagenUsuarios(req.files.imagen.tempFilePath)

            await fs.remove(req.files.imagen.tempFilePath)   //cloudinary

            console.log(result)
            imagen = {
                url: result.secure_url,
                public_id: result.public_id,
            }
            
        }

        const newUsuarios = new Usuarios({
            nombre,
            apellido,
            contrasena,
            correo,
            direccion,
            fechaNacimiento,
            imagen,
        });
        await newUsuarios.save();
        return res.json(newUsuarios);

    }catch(error){
        return res.status(500).json({ message: error.message });

    }
}
export const updateUsuarios = async(req, res) =>{

    try{
        const updateUsuarios = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updateUsuarios)
        return  res.send("actualizando datos")
    }catch(error){
        console.log(error.message)
    }
}
export const deleteUsuarios = async(req, res)=>{
    try{
        const usuarioRemoved = await usuario.findByIdAndDelete(req.params.id)
        if (!usuarioRemoved) return res.sendStatus(404)

        if(usuarioRemoved.imagen.public_id){              //ver con cloudinary
            await deleteImage(usuarioRemoved.imagen.public_id)
        }        await deleteImage(usuarioRemoved.imagen.public_id)

        return res.sendStatus(204)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}

    
export const getUsuario = async(req, res)=>{        //obtener un usuario específico por su ID
    try{
        const usuario = await Usuarios.findById(req.params.id)
        if(!usuario) return res.sendStatus(404)
        return res.json(usuario)
    }catch(error){
        console.log(error.message)
    }
}
// Obtiene los cursos de localhost:4000/cursos
export const obtenerCursos = async (req, res) => {
    try {
        const respuesta = await fetch('http://localhost:4000/cursos');
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener la lista de cursos');
        }
        const cursos = await respuesta.json();
        res.json(cursos);
    } catch (error) {
        console.error('Error al obtener la lista de cursos:', error);
        res.status(500).json({ error: 'Error al obtener la lista de cursos' });
    }
}
//obtener curso especifico de localhost:4000/cursos
export const obtenerCursoEspecifico = async (req, res) => {
    const { cursoId } = req.params; // Obtener el ID del curso de los parámetros de la URL
    try {
        const respuesta = await fetch(`http://localhost:4000/cursos/${cursoId}`); // Hacer una solicitud GET al servidor de cursos para obtener el curso por su ID
        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el curso');
        }
        const curso = await respuesta.json();
        res.json(curso); // Enviar el curso como respuesta
    } catch (error) {
        console.error('Error al obtener el curso:', error);
        res.status(500).json({ error: 'Error al obtener el curso' });
    }
}



//asignar curso a un usuario
export const AsignarCursoAlUsuario = async (req, res) => {
    const { id } = req.params;
    const { cursoAsignado } = req.body;

    try {
        // Verificar si el usuario existe
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verificar si el curso existe
        const curso = await obtenerCursoEspecifico(cursoAsignado); // Función para obtener el curso del servidor de cursos
        if (!curso) {
            return res.status(404).json({ error: 'Curso no encontrado' });
        }

        // Asignar el curso al usuario
        usuario.cursoAsignado.push(curso);
        await usuario.save();

        // Enviar respuesta con el usuario actualizado
        res.json(usuario);
    } catch (error) {
        console.error('Error al asignar curso al usuario:', error);
        res.status(500).json({ error: 'Error al asignar curso al usuario' });
    }
}


export const loginUsuario = async (correo, contrasena) => {
  try {
    const usuario = await Usuarios.findOne({ correo });

    if (!usuario) {
      throw new Error('Correo electrónico incorrecto');
    }

    if (usuario.contrasena !== contrasena) {
      throw new Error('Contraseña incorrecta');
    }

    return { message: 'Inicio de sesión exitoso', usuario };
  } catch (error) {
    throw error;
  }
};
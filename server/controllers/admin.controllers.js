import Admin from "../models/Admin.js";
import { deleteImage, uploadImagenUssuarios } from "../libs/cloudinary.js";
import fs from "fs-extra"
import {uploadImagenUsuarios} from "../libs/cloudinary.js"

export const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().populate("administrador");
        res.json(admins);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export const createAdmin = async(req, res) => {
    try{
        const { nombre, apellido, contraseña, correo, } = req.body;
        let imagen;

        if(req.files?.imagen){
            const result = await uploadImagenUsuarios(req.files.imagen.tempFilePath)

            await fs.remove(req.files.imagen.tempFilePath)    //ver con cloudinary

            console.log(result)
            imagen = {
                url: result.secure_url,
                public_id: result.public_id,
            }
            
        }

        const newAdmin = new Admin({
            nombre,
            apellido,
            contraseña,
            correo,
            imagen
        });
        await newAdmin.save();
        return res.json(newAdmin);

    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}
export const updateAdmin = async(req, res) => {

    try{
        const updateAdmin = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(updateAdmin)
        return  res.send("actualizando datos")
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}

export const deleteAdmin = async(req, res) => {
    try{
        const adminRemoved = await Admin.findByIdAndDelete(req.params.id)
        if (!adminRemoved) return res.sendStatus(404)

        if(adminRemoved.imagen.public_id){
            await deleteImage(adminRemoved.imagen.public_id)     //veeeeeer con cloudinary
        }        await deleteImage(adminRemoved.imagen.public_id)

        return res.sendStatus(204)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }
}
export const getAdmin = async(req, res) => {
    try{
        const admin = await Admin.findById(req.params.id)
        if(!admin) return res.sendStatus(404)
        return res.json(admin)
    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: error.message})
    }

}


import Usuarios from "../models/Usuarios.js";

export const getUsuarios = async (req, res) => {       //
    try {
        const usuarios = await Usuarios.find().populate("usuarios");
        res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUsuarios = async (req, res) => {
    try {
        const { nombre, apellido, contraseña, correo, direccion, fechaNacimiento } = req.body;
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
            contraseña,
            correo,
            direccion,
            fechaNacimiento,
            imagen
        });
        await newUasuarios.save();
        return res.json(newUsuarios);

    }catch(error){
        return res.status(500).json({ message: error.message });

    }
}
export const updateUsuarios = async(req, res) =>{

    try{
        const updateUsuarios = await Uasuarios.findByIdAndUpdate(req.params.id, req.body, {new: true})
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

    
export const getUsuario = async(req, res)=>{        //
    try{
        const usuario = await Usuarios.findById(req.params.id)
        if(!usuario) return res.sendStatus(404)
        return res.json(usuario)
    }catch(error){
        console.log(error.message)
    }
}


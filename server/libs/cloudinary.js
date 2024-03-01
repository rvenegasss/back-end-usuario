// importación de libreria Cloudinary
import {v2 as cloudinary} from 'cloudinary';
          

//configuración de credenciales
cloudinary.config({ 
  cloud_name: 'dsvvdsf78', 
  api_key: '597768979351189', 
  api_secret: '1bcWIL9K09rRB1cyFb43U4xJaHE',
});

//Metodo de carga imagenes
export const uploadImagenUsuarios = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'usuarios'
    });
}

//Metodo de eliminación
export const deleteImage = async id => {
    cloudinary.uploader.destroy(id)
}







          


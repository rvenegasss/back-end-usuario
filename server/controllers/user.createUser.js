const User = require("../models/user.model.js");


const crearUsuario = async (req, res) => {

    const { nombre, apellido, direccion, email, fechaNacimiento } = req.body;

    await User.create({
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
    email: email,
    fechaNacimiento: fechaNacimiento,
    
  });

  res.status(201).json({
    msg: "Usuario creado con éxito",
    code: 201
  })
};

module.exports = crearUsuario;
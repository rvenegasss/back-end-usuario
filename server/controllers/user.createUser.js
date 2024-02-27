const User = require("../models/user.model.js");


const crearUsuario = async (req, res) => {

    const { name, lastName, direction, email, fechaNacimiento } = req.body;

    await User.create({
    name: name,
    lastName: lastName,
    direction: direction,
    email: email,
    fechaNacimiento: fechaNacimiento,
    
  });

  res.status(201).json({
    msg: "Usuario creado con éxito",
    code: 201
  })
};

module.exports = crearUsuario;
import { Router } from "express";
import { createUsuarios, deleteUsuarios, getUsuarios, getUsuario, updateUsuarios } from "../controllers/usuario.controllers.js";


const router = Router();

router.get("/usuarios", getUsuarios);

router.post("/usuarios", createUsuarios)

router.put("/usuarios/:id", updateUsuarios)

router.delete("/usuarios/:id", deleteUsuarios)

router.get("/usuarios/:id", getUsuario)

router.post("/loginUsuario", loginUsuario)

//asignar curso a un usuario
router.put/("/asignar-curso-usuario/:id", AsignarCursoAlUsuario)

//obtener cursos de localhost:4000/cursos
router.get("/obtener-cursos", obtenerCursos)

//obtener un curso especifico de localhost:4000/cursos
router.get("/obtener-curso/:id", obtenerCursoEspecifico)

export default router;
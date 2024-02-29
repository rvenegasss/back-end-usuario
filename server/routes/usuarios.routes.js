import { Router } from "express";
import { createUsuarios, deleteUsuarios, getUsuarios, getUsuario, updateUsuarios } from "../controllers/usuario.controllers.js";


const router = Router();

router.get("/usuarios", getUsuarios);

router.post("/usuarios", createUsuarios)

router.put("/usuarios/:id", updateUsuarios)

router.delete("/usuarios/:id", deleteUsuarios)

router.get("/usuarios/:id", getUsuario)


export default router;
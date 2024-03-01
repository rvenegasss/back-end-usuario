import { Router } from "express";
import {  createProfesor, deleteProfesor, getProfesores, getProfesor, updateProfesor } from "../controllers/profesor.controllers.js";

const router = Router();

router.get("/profesor", getProfesores);

router.post("/profesor", createProfesor)

router.put("/profesor/:id", updateProfesor)

router.delete("/profesor/:id", deleteProfesor)

router.get("/profesor/:id", getProfesor)


export default router;
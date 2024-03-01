import { Router } from "express";
import { createAdmin, deleteAdmin, getAdmin, getAdmins, updateAdmin } from "../controllers/admin.controllers.js";

const router = Router();

router.get("/administrador", getAdmins);

router.post("/administrador", createAdmin)

router.put("/administrador/:id", updateAdmin)

router.delete("/administrador/:id", deleteAdmin)

router.get("/administrador/:id", getAdmin)




export default router;
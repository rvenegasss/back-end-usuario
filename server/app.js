import express from "express"
import fileUpload from "express-fileupload"
import usuariosRoutes from "./routes/usuarios.routes.js"
import cors from "cors"

const app = express()

//middleware
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload"
}))

//routes
app.use(usuariosRoutes)
app.use(cors());

export default app;
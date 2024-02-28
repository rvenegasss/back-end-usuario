
import app from "./app.js"
import connectDB from "./db.js"
import { PORT } from "./config.js"


app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en --->>>> http://localhost:${PORT}`)
});
connectDB();
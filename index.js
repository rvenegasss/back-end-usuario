
import app from "./server/app.js"
import connectDB from "./server/db.js"
import { PORT } from "./server/config.js"


app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en --->>>> http://localhost:${PORT}`)
});
connectDB();
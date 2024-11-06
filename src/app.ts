import express from "express";
import emailRoutes from "./routes/emailRoutes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/email", emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

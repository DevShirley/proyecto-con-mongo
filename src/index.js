import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import employeesRoutes from "./routes/employees.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use("/api/employees", employeesRoutes);

// Puerto que Render inyecta
const PORT = process.env.PORT || 3000;

// 1) Conecta a Mongo y 2) recién ahí levanta el server
const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
};

start();

// Ruta raíz de verificación
app.get("/", (_req, res) => {
  res.send("🚀 API de empleados funcionando en Render");
});

// src/app.js
import express from "express";
import morgan from "morgan";
import employeesRoutes from "./routes/employees.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middleware para registrar solicitudes
app.use(morgan("dev"));

// Middleware para procesar JSON
app.use(express.json());

// Rutas de empleados (sin autenticación)
app.use("/api/employees", employeesRoutes);

// Ruta raíz de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de empleados 🚀");
});

// Middleware para manejo de errores
app.use(errorHandler);

export default app;

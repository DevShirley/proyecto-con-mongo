import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import connectDB from "./db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use("/api/employees", employeesRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de empleados 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

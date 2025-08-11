import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  puesto: { type: String, required: true },
  salario: { type: Number, required: true },
  fechaContratacion: { type: Date, default: Date.now }
});

export default mongoose.model("Employee", employeeSchema);

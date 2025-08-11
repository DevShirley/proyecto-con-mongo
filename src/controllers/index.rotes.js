import { pool } from "../db.js";

export const index = (req, res) => res.json({ message: "welcome to my api" });

export const ping = (req, res) => {
  res.json({ result: "pong" });
};

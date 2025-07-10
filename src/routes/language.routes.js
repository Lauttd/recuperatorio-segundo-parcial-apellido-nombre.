import express from "express";
import {
  createLanguages,
  getAllLanguages,
  getByIdLanguages,
  updateLanguages,
  deleteLanguages,
} from "../controllers/language.controllers.js";

export const router = express.Router();

//Rutas para cada caso.
router.post("/api/languages", createLanguages);
router.get("/api/languages", getAllLanguages);
router.get("/api/languages/:id", getByIdLanguages);
router.put("/api/languages/:id", updateLanguages);
router.delete("/api/languages/:id", deleteLanguages);

export default router;

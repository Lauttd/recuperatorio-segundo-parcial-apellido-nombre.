import express from "express";
import router from "./src/routes/movies.routes.js";
import dotenv from "dotenv";
import { initDB } from "./src/config/database.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use("/", router);

initDB().then(() => {
  app.listen(port, () => {
    console.log(`conectado en http://localhost:${port}`);
  });
});

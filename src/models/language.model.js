import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import dotenv from "dotenv";

dotenv.config();

//modelo q va a tener la base de datos
export const languagemodel = sequelize.define("lagunagemodel", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paradigm: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

import { Sequelize } from "sequelize";
import { sequelize } from "../db/database";

export const Usuario = sequelize.define('usuario', {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    },
    urlFoto: {
        type: Sequelize.STRING,
        allowNull: false

    }
  });
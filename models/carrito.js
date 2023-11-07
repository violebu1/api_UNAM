import db from "../db/connection.js";
import { DataTypes } from "sequelize";

const Carrito = db.define(
  "Carrito",
  {
    id_carrito: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_producto: { 
      type: DataTypes.INTEGER,
      references: { model: "Productos", key: "id_producto"},
     },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: { model: "Usuarios", key: "id_usuario" },
    },
  },
  {
    tableName: "Carrito",
    timestamps: false, //le elimina el creatAt y el editedAt de la db
  }
);

export default Carrito;

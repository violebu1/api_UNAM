import db from "../db/connection.js";
import { DataTypes } from "sequelize";
import Ventas from "../models/Venta.js";
import Cliente from "./usuarios.js";

const Nivel = db.define('Nivel',
    {
        Nivel_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING},
        stock: { type: DataTypes.INTEGER},
        precio: {type:DataTypes.FLOAT},
        activo: {type:DataTypes.BOOLEAN},
        proveedores_id: {type:DataTypes.INTEGER,references:{model:'Proveedores',key:'proveedores_id',},},
    },
    {
        tableName: 'Nivels',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )

import db from "../db/connection.js";
import { DataTypes } from "sequelize";
import Carrito from "../models/carrito.js"
const Cliente = db.define('Cliente',
    {
        clientes_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING},
        email: { type: DataTypes.STRING},
        usuario: { type: DataTypes.STRING},
        nivel: {type:DataTypes.INTEGER},
        contrasena: {type:DataTypes.STRING},
        activo: {type:DataTypes.BOOLEAN}
    },
    {
        tableName: 'clientes',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
export default Cliente



module.exports = Cliente;
Cliente.hasOne(Carrito);

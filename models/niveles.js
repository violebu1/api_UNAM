import db from "../db/connection.js";
import { DataTypes } from "sequelize";


const Niveles = db.define('Niveles',
    {
        nivel_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING},
        stock: { type: DataTypes.INTEGER},
        precio: {type:DataTypes.FLOAT},
        activo: {type:DataTypes.BOOLEAN},
        proveedores_id: {type:DataTypes.INTEGER,references:{model:'Proveedores',key:'proveedores_id',},},
    },
    {
        tableName: 'Niveles',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
export default Niveles
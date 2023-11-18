import db from "../db/connection.js";
import { DataTypes } from "sequelize";


const Niveles = db.define('Niveles',
    {
        nivel_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING}
    },
    {
        tableName: 'Niveles',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
export default Niveles
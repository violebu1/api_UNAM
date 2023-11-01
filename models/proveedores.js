import db from '../db/connection.js';
import { DataTypes } from 'sequelize';

const Proveedor = db.define('Proveedor',
    {
        proveedores_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING},
        cuit: { type: DataTypes.BIGINT},
        usuario: { type: DataTypes.STRING},
        nivel: {type:DataTypes.INTEGER},
        contrasena: {type:DataTypes.STRING},
        activo: {type:DataTypes.BOOLEAN}
    },
    {
        tableName: 'proveedores',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
export default Proveedor



import db from '../db/connection.js';
import { DataTypes } from 'sequelize';

const Administrador = db.define('Administrador',
    {
        admin_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING},
        email: {
            type: DataTypes.STRING,
            unique: true, 
            },
        usuario: { type: DataTypes.STRING},
        nivel: {type:DataTypes.INTEGER},
        contrasena: {type:DataTypes.STRING},
        activo: {type:DataTypes.BOOLEAN}
    },
    {
        tableName: 'administradores',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
export default Administrador



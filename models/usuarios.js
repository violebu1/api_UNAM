import { DataTypes } from 'sequelize'
import db from '../db/connection.js'

const Usuario = db.define('Usuario',
    {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true, 
            autoIncrement: true, 
        },
        nombre: { type: DataTypes.STRING },
        apellido: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        usuario: {type: DataTypes.STRING},
        contrasenia: {type: DataTypes.STRING}, 
        nivel_id: {type: DataTypes.INTEGER}, 
    },
    {
        timestamps: false,
        tableName: 'usuarios',
    })

export default Usuario
import db from '../db/connection.js';
import { DataTypes } from 'sequelize';


const Producto = db.define('Producto',
    {
        id_producto: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre_producto: { type: DataTypes.STRING},
        stock: { type: DataTypes.INTEGER},
        precio: {type:DataTypes.FLOAT}
    },
    {
        tableName: 'productos',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )



export default Producto
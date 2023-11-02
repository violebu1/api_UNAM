import db from '../db/connection.js';
import { DataTypes } from 'sequelize';
import Carrito from "../models/carrito.js"

const Ventas = db.define('Ventas',
    {
        id_ventas: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        total: {type:DataTypes.FLOAT},
        id_carrito: {type:DataTypes.INTEGER,references:{model:'Carrito',key:'id_carrito',},},
    },
    {
        tableName: 'ventas',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
    Venta.belongsTo(Carrito, { foreignKey: 'id_carrito' });

    Carrito.hasMany(Venta, { foreignKey:'id_venta'});


    Producto.belongsTo(Venta, { foreignKey: 'id_producto' });

Venta.hasMany(Producto, { foreignKey:'id_producto'});






export default Ventas



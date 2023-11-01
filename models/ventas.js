import db from '../db/connection.js';
import { DataTypes } from 'sequelize';
import Carrito from "../models/carrito.js"

const Ventas = db.define('Ventas',
    {
        venta_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        cantidad: { type: DataTypes.INTEGER},
        subtotal: {type:DataTypes.FLOAT},
        carrito_id: {type:DataTypes.INTEGER,references:{model:'Carrito',key:'carrito_id',},},
        producto_id: {type:DataTypes.INTEGER,references:{model:'Productos',key:'producto_id',},},
    },
    {
        tableName: 'ventas',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )
    Venta.belongsTo(Carrito, { foreignKey: 'carrito_id' });

    Carrito.hasMany(Venta, { foreignKey:'venta_id'});


    Producto.belongsTo(Venta, { foreignKey: 'producto_id' });

Venta.hasMany(Producto, { foreignKey:'producto_id'});






export default Ventas



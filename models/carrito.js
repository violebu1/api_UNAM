import db from '../db/connection.js';
import { DataTypes } from 'sequelize';
import Ventas from "../models/Venta.js";
import Cliente from "../models/clientes.js";

const Carrito = db.define('Carrito',
    {
        carrito_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        monto: {type:DataTypes.FLOAT},
        clientes_id: {type:DataTypes.INTEGER,references:{model:'Clientes',key:'clientes_id',},},
    },
    {
        tableName: 'Carrito',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )

Venta.belongsTo(Carrito, { foreignKey: 'carrito_id' });

Carrito.hasMany(Venta, { foreignKey:'venta_id'});

export default Carrito




import db from '../db/connection.js';
import { DataTypes } from 'sequelize';
import Proveedor from './proveedores.js';

const Producto = db.define('Producto',
    {
        producto_id: { type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true },
        nombre: { type: DataTypes.STRING},
        stock: { type: DataTypes.INTEGER},
        precio: {type:DataTypes.FLOAT},
        activo: {type:DataTypes.BOOLEAN},
        proveedores_id: {type:DataTypes.INTEGER,references:{model:'Proveedores',key:'proveedores_id',},},
    },
    {
        tableName: 'productos',
        timestamps: false, //le elimina el creatAt y el editedAt de la db
    }
    )

Producto.belongsTo(Proveedor, { foreignKey: 'proveedores_id' });

Proveedor.hasMany(Producto, { foreignKey: 'proveedores_id' });


export default Producto
import { DataTypes } from 'sequelize'
import db from '../db/connection.js'
import niveles from '../models/niveles.js'
// const Usuario = db.define('Usuario',
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primarykey: true, 
//             autoIncrement: true, 
//         },
//         nombre: { type: DataTypes.STRING },
//         apellido: { type: DataTypes.STRING },
//         email: { 
//             type: DataTypes.STRING,
//             allowNull:false, 
//             unique:true,
//         },
//         usuario: {type: DataTypes.STRING},
//         contrasenia: {type: DataTypes.STRING}, 
//         nivel_id: {type: DataTypes.INTEGER}, 
//     },
//     {
//         timestamps: false,
//         tableName: 'usuarios',
//     })

// export default Usuario

const Usuarios = db.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
    },
    apellido: {
      type: DataTypes.STRING(50),
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(10),
    },
    usuario: {
      type: DataTypes.STRING(50),
    },
    contrasenia: {
      type: DataTypes.STRING(100),
    },
    nivel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: niveles, // Debes usar el modelo de niveles aquí
        key: 'id',
      },
    },
  }, {
    timestamps: false,
    tableName: 'usuarios',
  })
  
  Usuarios.belongsTo(niveles, {
    foreignKey: 'nivel_id',
    onDelete: 'CASCADE',
  })
  
  niveles.hasMany(Usuarios, {
    foreignKey: 'nivel_id',
    onDelete: 'CASCADE',
  })
  
  export default Usuarios
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type:DataTypes.UUID, // Universal Unique ID (pocas chances de repetirse)
      defaultValue: DataTypes.UUIDV4, // V4 
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true   // Validamos que el campo no llegue vacio
      }
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true
      }
    },
    weight:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true
      }
    },
    lifeSpan:{
      type: DataTypes.STRING
    },
    img:{
      type: DataTypes.STRING
    }
  },{
    hooks:{
      beforeValidate: d => { // Validamos que el nombre no sea un numero, validate name are not a number
        if (!d.name) return;
        const num = parseInt(d.name);
        if (Number.isNaN(num)) return;
        if(typeof num === 'number') throw new Error ('Name is a number, cannot be a number');
      }
    }
  });
};


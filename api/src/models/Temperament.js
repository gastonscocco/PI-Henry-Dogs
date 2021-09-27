const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,  // Validamos que no llegue el campo vacio 
            }
        }
    });
};
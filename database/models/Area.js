const {sequelize} = require('.')

const Area = (sequelize, DataTypes) => {
    return sequelize.define('Area', {
        tipo: {
            type: DataTypes.STRING
        }
    }, {
        tableName: "areas",
        timestamps: false
    })
}

module.exports = Area
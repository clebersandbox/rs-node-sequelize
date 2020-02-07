const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            oidUsers: {
                type: DataTypes.INTEGER,
                field: 'oid_users',
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = User;
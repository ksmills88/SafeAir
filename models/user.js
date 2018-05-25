module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING
        },

        lastName: {
            type: DataTypes.STRING
        },
        email: {
            unique: true,
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        }
    });

    return users;
};
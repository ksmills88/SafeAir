module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Activity", {
        // Giving the User model a name of type STRING
        approved: DataTypes.BOOLEAN
      });

      return User;
};
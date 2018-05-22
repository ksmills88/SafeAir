module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
      firstName: {
          type: DataTypes.STRING
      },

      lastName: {
          type: DataTypes.STRING
      },
      email:{

      type:DataTypes.STRING
      },

      password: {
          type:DataTypes.STRING
      },

    createdAt: Sequelize.DATE,
    });
  
    return User;
  };

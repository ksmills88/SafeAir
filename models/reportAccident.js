module.exports = function(sequelize, DataTypes) {
    var Accident = sequelize.define("Accident", {
     
      location: {
          type: DataTypes.STRING
      },

      nNumber: {
          type: DataTypes.NUMBER
      },
      comments:{

      type:DataTypes.TEXT
      },

      createdAt: Sequelize.DATE,
    });
  
   Accident.associate = function(models) {
       Accident.belongsTo(models.User, {
        });
    return Accident;
  };
};
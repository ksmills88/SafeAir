module.exports = function(sequelize, DataTypes) {
    var Activity   = sequelize.define("Activity", {
     
      approved: {
          type: DataTypes.BOOLEAN
      },

      milesRadius: {
          type: DataTypes.NUMBER
      },
      location:{

      type:DataTypes.STRING
      },

      createdAt: Sequelize.DATE,
    });
  
   Activity.associate = function(models) {
       Activity.belongsTo(models.User, {
        });
    return Activity;
  };
};
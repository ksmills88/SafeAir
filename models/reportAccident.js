module.exports = function(sequelize, DataTypes) {
    var Accident = sequelize.define("Accident", {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      nNumber: DataTypes.INTEGER,
      comments: DataTypes.TEXT
    });

  return Accident;
};


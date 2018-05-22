module.exports = function(sequelize, DataTypes) {
    var Accident = sequelize.define("Accident", {

      location: DataTypes.STRING,
      nNumber: DataTypes.INTEGER,
      comments: DataTypes.TEXT
    });

  return Accident;

};
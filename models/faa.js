module.exports = function(sequelize, DataTypes) {
    var FAA = sequelize.define("FAA", {
        // Giving the FAA model a name of type STRING
        approved: DataTypes.BOOLEAN
      });

      return FAA;
};
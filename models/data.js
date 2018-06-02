module.exports = function(sequelize, DataTypes) {
    var Data = sequelize.define("search", {
        nnumber: DataTypes.STRING,
        serialnumber: DataTypes.STRING, 
        mfrmdlcode: DataTypes.STRING,
        engmfrmdl: DataTypes.STRING,
        yearmfr: DataTypes.STRING,
        typeregistrant: DataTypes.STRING,
        name: DataTypes.STRING,
        street: DataTypes.STRING,
        streettwo: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        region: DataTypes.STRING,
        county: DataTypes.STRING,
        country: DataTypes.STRING,
        lastactiondate: DataTypes.STRING,
        certissuedate: DataTypes.STRING,
        certification: DataTypes.STRING,
        typeaircraft: DataTypes.STRING,
        typeengine: DataTypes.STRING,
        statuscode: DataTypes.STRING,
        modescode: DataTypes.STRING,
        fractowner: DataTypes.STRING,
        airworthdate: DataTypes.STRING,
        othernamesone: DataTypes.STRING,
        othernamestwo: DataTypes.STRING,
        othernamesthree: DataTypes.STRING,
        othernamesfour: DataTypes.STRING,
        othernamesfive: DataTypes.STRING,
        expirationdate: DataTypes.STRING,
        uniqueid: DataTypes.STRING,
        kitmfr: DataTypes.STRING,
        kitmodel: DataTypes.STRING,
        modescodehex: DataTypes.STRING,
    });
    return Data;
  };
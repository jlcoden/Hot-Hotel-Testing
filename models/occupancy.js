module.exports = function(sequelize, DataTypes) {
  // var moment = require('moment');
  var Occupancy = sequelize.define("Occupancy", {
    date: { type: DataTypes.STRING },
    occupied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Occupancy.associate = function(models) {
    //Associating occupancy with room via foreign key
    Occupancy.belongsTo(models.Room, {
      foreignKey: {
        defaultValue: 0
      }
    });

    Occupancy.belongsTo(models.Client, {
      foreignKey: {
        defaultValue: 0
      }
    });
  };
  return Occupancy;
};

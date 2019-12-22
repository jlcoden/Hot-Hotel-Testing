module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("Reservation", {
    checkIn: { type: DataTypes.DATE, allowNull: false },
    checkOut: { type: DataTypes.DATE, allowNull: false },
    totalCost: { type: DataTypes.INTEGER, allowNull: false }
  });

  Reservation.associate = function(models) {
    //Associating Reservation with room via foreign key
    Reservation.belongsTo(models.Room, {
      foreignKey: {
        defaultValue: 0
      }
    });

    Reservation.belongsTo(models.Client, {
      foreignKey: {
        defaultValue: 0
      }
    });
    Reservation.belongsTo(models.Occupancy, {
      foreignKey: {
        defaultValue: 0
      }
    });
  };
  return Reservation;
};

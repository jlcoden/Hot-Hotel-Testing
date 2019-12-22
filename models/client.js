module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 15]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 15]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    }
  });

  Client.associate = function(models) {
    // Associating Client with Room
    Client.hasOne(models.Room, {
      onDelete: "cascade"
    });
    Client.hasOne(models.Occupancy, {
      onDelete: "cascade"
    });
  };
  return Client;
};

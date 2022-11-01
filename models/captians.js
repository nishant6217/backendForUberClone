'use strict';
module.exports = (sequelize, DataTypes) => {
  const Captians = sequelize.define("Captians", {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    isBooked: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    captianLocation: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    tableName: "Captians",
    paranoid: false
  }
  );
  Captians.associate = (Models) => {
    Captians.hasMany(Models.Booking, {
      foreignKey: "captianId"
    })
  }
  return Captians;
};
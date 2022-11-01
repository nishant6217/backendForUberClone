module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    bookedby: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sourceDestination: {
      allowNull: false,
      type: DataTypes.STRING
    },
    startedAt: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    endedAt: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    captianId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    tableName: "bookings",
    paranoid: false
  }
  );
  Booking.associate = (Models) => {
    Booking.belongsTo(Models.Captians, {
      foreignKey: "captianId"
    })
  }
  return Booking;
};
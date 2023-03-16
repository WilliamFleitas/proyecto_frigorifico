import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  sequelize.define(
    "User",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 4,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      privilege: {
        type: DataTypes.ENUM("none", "seller", "king"),
        defaultValue: "none"
      }
    },
    
    {
      timestamps: false,
      
    },
    
  );
};
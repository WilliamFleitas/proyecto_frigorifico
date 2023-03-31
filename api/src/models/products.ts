import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  sequelize.define(
    "Product",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 2,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    
    {
      timestamps: false,
      
    },
    
  );
 
};
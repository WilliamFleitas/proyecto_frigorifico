import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
  sequelize.define(
    "InvoiceDetail",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      kilograms: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      subPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    
    {
      timestamps: false,
      
    },
    
  );
 
};
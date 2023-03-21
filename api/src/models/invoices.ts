import { DataTypes } from "sequelize";

module.exports = (sequelize: any) => {
   sequelize.define(
    "Invoice",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        min: 2,
      },
      ruc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      invoiceNumber : {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }
      ,
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    
    {
      timestamps: true,
      
    },
    
  );
  
};


import { DataTypes } from "sequelize";
import { userType } from "../typos";

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
        type: DataTypes.ENUM("none", "king"),
        defaultValue: "none"
      }
    },
    
    {
      timestamps: false,
      hooks: {
        beforeCreate: function(user: userType){

          
            user.username = user.username.toLowerCase();

            return user;

        }
    },
    },
    
  );
};
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Landlord = sequelize.define("Landlord", {
    id: {
        type: DataTypes.UUID, // Use UUID for unique identifiers
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  identityNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  identificationDocument: {
    type: DataTypes.STRING, // Stores the file path
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bankAssociated: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bankAccountNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Landlord;

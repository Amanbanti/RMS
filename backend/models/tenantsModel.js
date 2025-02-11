
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Tenant = sequelize.define("Tenant", {
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
      isEmail: true, // Ensures valid email format
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identityNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  identificationDocument: {
    type: DataTypes.STRING, // This will store the file path (not the actual file)
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupationStatus: {
    type: DataTypes.ENUM("Employee", "Employer", "Self Employed", "Other"),
    allowNull: false,
  },
  occupationPlace: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyContactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  emergencyContactPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Tenant;

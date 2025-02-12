import Tenant from "../models/tenantsModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import { sequelize } from "../config/db.js";  // Import sequelize
import { Op } from "sequelize"; // Import Op directly

export const registerTenant = asyncHandler(async (req, res) => {
  try {
    const { email, identityNo } = req.body;

    // Validate email uniqueness
    const existingTenant = await Tenant.findOne({ where: { email } });
    const existingIdentityNo = await Tenant.findOne({ where: { identityNo } });

    if (existingTenant) {
      return res.status(400).json({ error: "Email already registered" });
    }
    if (existingIdentityNo) {
      return res.status(400).json({ error: "IdentityNo already exists!" });
    }

    // Ensure an identification document is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Identification document is required" });
    }

    // Create the tenant
    const newTenant = await Tenant.create({
      ...req.body,
      identificationDocument: req.file.path, // Save file path in DB
    });

    res.status(201).json(newTenant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Tenants
export const viewTenants = asyncHandler(async (req, res) => {
  try {
    let { page, limit, search } = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const offset = (page - 1) * limit;

    let whereClause = {};
    if (search) {
      whereClause.fullName = { [Op.like]: `%${search}%` }; // Case-insensitive search for MySQL
    }

    const { count, rows: tenants } = await Tenant.findAndCountAll({
      where: whereClause,
      offset,
      limit,
    });

    res.json({ tenants, total: count });
  } catch (error) {
    console.error("Error fetching tenants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

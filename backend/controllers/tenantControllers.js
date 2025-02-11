import Tenant from "../models/tenantsModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const registerTenant = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body; // Extract email from request body

    // Validate email uniqueness
    const existingTenant = await Tenant.findOne({ where: { email } });
    if (existingTenant) {
      return res.status(400).json({ error: "Email already registered" });
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



  
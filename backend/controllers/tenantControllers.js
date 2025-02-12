import Tenant from "../models/tenantsModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const registerTenant = asyncHandler(async (req, res) => {
  try {
    const { email,identityNo } = req.body;

    // Validate email uniqueness
    const existingTenant = await Tenant.findOne({ where: { email } });

    const existingIdentityNo = await Tenant.findOne({ where: { identityNo } });
    if (existingTenant) {
      return res.status(400).json({ error: "Email already registered" });
    }

    if (existingIdentityNo) {
        return res.status(400).json({ error: "IdentityNo already exist!" });
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





// Get All tenants
export const viewTenants = asyncHandler(async (req, res) => {
    const tenants = await Tenant.findAll();
    res.status(201).json(tenants);
  })
  
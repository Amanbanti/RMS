import Tenant from '../models/tenantsModel.js';
import asyncHandler from '../middleware/asyncHandler.js'


export const registerTenant = asyncHandler (async (req, res) =>{
    try {
        const newTenant = await Tenant.create(req.body);
        res.status(201).json(newTenant);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

});
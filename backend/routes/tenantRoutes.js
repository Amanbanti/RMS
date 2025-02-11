import express from "express";
import {
 registerTenant

    } from '../controllers/tenantControllers.js'


const router = express.Router();

router.post('/register', registerTenant);




export default router;
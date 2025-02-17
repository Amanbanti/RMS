import express from "express";
import {
    authUser,
    registerUser,
    logoutUser ,
    userInfo,
    getUserById,
    getUsers,
    deleteUser,
    updateUser 
    
    } from '../controllers/userControllers.js'

import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();


// router.get('/',protect,admin,getUsers);
// router.get('/:id',protect,admin, getUserById);
router.post('/',registerUser);
router.post('/logout',logoutUser);
router.post('/login', authUser);
router.get('/profile',protect, userInfo);
// router.delete('/:id',protect,admin,  deleteUser);
// router.put('/:id',protect,admin,  updateUser);


export default router;
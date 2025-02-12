
import express from "express";
import { 
    registerLandlord,
 } from "../controllers/landlordControllers.js";
import multer from "multer";
import fs from "fs";


const router = express.Router();

// Ensure "uploads" folder exists
const uploadDir = "uploads/landlords/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer setup for storing files
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/register", upload.single("identificationDocument"),  registerLandlord);

export default router;

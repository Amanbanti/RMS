import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import multer from "multer";
import { connectDb, sequelize } from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import tenantRoutes from "./routes/tenantRoutes.js";
import landlordRoutes from "./routes/landlordRoutes.js"
dotenv.config();

const app = express();
const PORT = 5000;

const startServer = async () => {
  try {
    await connectDb();
    console.log("Connected to the DB successfully");

    // Synchronize Sequelize models with the database
    await sequelize.sync({ alter: false }); // Adjust `alter` or `force` based on your requirements
    console.log("All models were synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the DB:", error.message);
    process.exit(1);
  }
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Multer Configuration (for file uploads)
const storage = multer.memoryStorage(); // Stores files in memory (use diskStorage if needed)
const upload = multer({ storage });

// Routes
app.use("/api/users", userRoute);
app.use("/api/tenants", tenantRoutes);
app.use("/api/landlords", landlordRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ message: err.message });
});

// Test API
app.get("/", (req, res) => {
  res.send("The server is running...");
});

startServer();


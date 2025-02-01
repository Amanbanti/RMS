import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDb, sequelize } from './config/db.js'; 
// import userRoute from './routes/userRoutes.js';
import path from 'path';

// Get the current directory of the module
const __dirname = path.resolve();

// Load environment variables from the .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
const PORT = 5000;

const startServer = async () => {
  try {
    await connectDb();
    console.log('Connected to the Db successfully');

    // Synchronize Sequelize models with the database
    await sequelize.sync({ alter: false}); // Adjust `alter` or `force` based on your requirements
    console.log('All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Failed to connect to the Db:', error.message);
    process.exit(1); 
  }
};

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));// It ensures that the request accessed in a structured format.
app.use(cookieParser());

// app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('The server is running...');
});

startServer();

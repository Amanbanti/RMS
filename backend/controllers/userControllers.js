
import User from '../model/userModel.js';
import { generateToken } from "../utils/generateToken.js";
import asyncHandler from '../middleware/asyncHandler.js'




export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await User.findOne({ where: { email } });

  if (user && (await user.matchPassword(password))) {
    // Generate token and send it in the response as a cookie
    generateToken(res, user.id);

    // Send user details (excluding password)
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password!");
  }
});






export const registerUser = asyncHandler (async (req, res) =>{
    const {name, email,password} = req.body;
    const userExist = await User.findOne({
        where: {
          email: email,
        },
      });

    if( userExist){
        res.status(400);
        throw new Error('User Already Exist!')
    }else{
        const user = await User.create({
            name : name,
            email: email,
            password: password,
        })
        if(user){
        generateToken ( res,user._id)
           res.status(201).json({
            _id:user._id,
            name: user.name,
            email:user.email,
            isAdmin: user.isAdmin
           })
        }else{
            res.status(400);
            throw new Error('Invalid User Data!')
           }
    }

});







// Logout User
export const logoutUser =asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0), // Expire the cookie
  });

  res.status(200).json({ message: "Logged out successfully" });
});




// Get User By ID (Admin)
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ["password"] }, // Exclude password
  });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});






// Get All Users (Admin)
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ["password"] }, // Exclude password from all users
  });

  res.status(200).json(users);
})






// Delete User (Admin)
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Cannot delete admin user!");
    } else {
      await user.destroy(); // Delete user
      res.status(200).json({ message: "User deleted successfully!" });
    }
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});







// Update User (Admin)
export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin === undefined ? user.isAdmin : req.body.isAdmin;

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found!");
  }
});

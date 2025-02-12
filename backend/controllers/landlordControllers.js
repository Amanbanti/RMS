import Landlord from "../models/landlordModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// Register a new landlord
export const registerLandlord = asyncHandler(async (req, res) => {
  try {
    const { fullName, email, phoneNumber, identityNo, address, bankAssociated, bankAccountNo } = req.body;

    // Check if email, phone, or identity number is already registered
    const existingEmail = await Landlord.findOne({ where: { email } });
    const existingPhone = await Landlord.findOne({ where: { phoneNumber } });
    const existingIdentityNo = await Landlord.findOne({ where: { identityNo } });
    const existingBankAccountNo = await Landlord.findOne({ where: { bankAccountNo } });

    if (existingEmail) {
      return res.status(400).json({ error: "Email already registered" });
    }
    if (existingPhone) {
      return res.status(400).json({ error: "Phone number already registered" });
    }
    if (existingIdentityNo) {
      return res.status(400).json({ error: "Identity Number / Passport already registered" });
    }
    if (existingBankAccountNo) {
      return res.status(400).json({ error: "Bank account already registered" });
    }

    // Ensure an identification document is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Identification document is required" });
    }

    // Create landlord
    const newLandlord = await Landlord.create({
      fullName,
      email,
      phoneNumber,
      identityNo,
      identificationDocument: req.file.path, // Save file path
      address,
      bankAssociated,
      bankAccountNo,
    });

    res.status(201).json(newLandlord);
  } catch (error) {
    console.error("Error registering landlord:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

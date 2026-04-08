const express = require("express");
const router = express.Router();
const TrustedContact = require("../models/TrustedContact");

// ➤ ADD CONTACT
router.post("/add", async (req, res) => {
  try {
    const { userId, name, phone, relation } = req.body;

    const contact = new TrustedContact({
      userId,
      name,
      phone,
      relation,
    });

    const savedContact = await contact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ➤ GET CONTACTS (ADD THIS BELOW POST)
router.get("/:userId", async (req, res) => {
  try {
    const contacts = await TrustedContact.find({
      userId: req.params.userId,
    });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// ➤ EXPORT
module.exports = router;
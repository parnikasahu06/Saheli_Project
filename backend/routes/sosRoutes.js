const express = require("express");
const router = express.Router();
const SOSLog = require("../models/SOSlog");
const TrustedContact = require("../models/TrustedContact");

// Trigger SOS and simulate alerting trusted contacts
router.post("/trigger", async (req, res) => {
  try {
    const { userId, rideId, message } = req.body;

    const sos = new SOSLog({
      userId,
      rideId: rideId || null,
      message: message || "Emergency triggered",
      status: "Active",
    });

    const savedSOS = await sos.save();

    const contacts = await TrustedContact.find({ userId });

    const alertData = contacts.map((contact) => ({
      name: contact.name,
      phone: contact.phone,
      alert: `SOS from user! Message: ${message || "Emergency triggered"}`,
    }));

    res.status(201).json({
      message: "SOS triggered & contacts alerted",
      sos: savedSOS,
      notifiedContacts: alertData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all SOS logs of a user
router.get("/:userId", async (req, res) => {
  try {
    const logs = await SOSLog.find({ userId: req.params.userId });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
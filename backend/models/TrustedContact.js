const mongoose = require("mongoose");

const trustedContactSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrustedContact", trustedContactSchema);
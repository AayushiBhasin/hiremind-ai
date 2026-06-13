// routes/reportRoutes.js

const express = require("express");
const router = express.Router();

const Analysis = require("../models/Analysis");

router.get("/reports", async (req, res) => {
  try {
    const reports = await Analysis.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: reports,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reports",
    });
  }
});

module.exports = router;
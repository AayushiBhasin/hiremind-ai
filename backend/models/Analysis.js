const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    resumeText: {
      type: String,
    },

    jobDescription: {
      type: String,
    },

    matchScore: Number,

    atsScore: Number,

    missingSkills: [String],

    suggestedKeywords: [String],

    resumeImprovements: [String],

    technicalQuestions: [String],

    hrQuestions: [String],

    projectBasedQuestions: [String],

    BehavioralQuestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Analysis",
  analysisSchema
);
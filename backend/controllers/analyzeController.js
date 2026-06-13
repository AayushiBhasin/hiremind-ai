const model = require("../services/geminiService");
const Analysis = require(
  "../models/Analysis"
);
const analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    const prompt = `
You are an expert recruiter.

Analyze this resume against the job description.

Resume:
${resumeText}

Job Description:
${jobDescription}


Return ONLY valid JSON.

Rules:
- Keep every suggestion under 15 words.
- Keep every skill under 3 words.
- Maximum 5 missing skills.
- Maximum 5 resume suggestions.
- Maximum 5 technical questions.
- Maximum 5 HR questions.
- Use short bullet-style responses.
- No explanations.
- No markdown.

Return format:

{
  "matchScore": number,
  "atsScore": number,
  "missingSkills": [],
  "Suggested Keywords" : [],
  "resumeImprovements": [],
  "technicalQuestions": [],
  "hrQuestions": [],
  "projectBasedQuestions" : [],
  "BehavioralQuestions":[]
}
`;

    const result = await model.generateContent(prompt);

   const response = result.response.text();

const cleanedResponse = response
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const parsedResponse = JSON.parse(cleanedResponse);

await Analysis.create({
  resumeText,
  jobDescription,

  matchScore:
    parsedResponse.matchScore,

  atsScore:
    parsedResponse.atsScore,

  missingSkills:
    parsedResponse.missingSkills,

  suggestedKeywords:
    parsedResponse["Suggested Keywords"],

  resumeImprovements:
    parsedResponse.resumeImprovements,

  technicalQuestions:
    parsedResponse.technicalQuestions,

  hrQuestions:
    parsedResponse.hrQuestions,

  projectBasedQuestions:
    parsedResponse.projectBasedQuestions,

  BehavioralQuestions:
    parsedResponse.BehavioralQuestions,
});

res.status(200).json({
  success: true,
  data: parsedResponse,
});
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Analysis failed",
    });
  }
};

module.exports = {
  analyzeResume,
};

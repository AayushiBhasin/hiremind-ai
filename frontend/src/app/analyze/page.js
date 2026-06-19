"use client";

import { useState } from "react";
import { FileText, Briefcase, Upload, Sparkles } from "lucide-react";
import { InterviewPrep } from "./InterviewPrepReport";
// import pdfToText from "react-pdftotext";
import styles from "./page.module.css";
import { AIPreview } from "./AIPreviewReport";

export default function Home() {
  const [resume, setResume] = useState("");
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const canAnalyze = resume.length >= 50 && jd.length >= 20;
  const handleUpload = async (e) => {
  const file = e.target.files?.[0];

  if (!file) return;

  try {
    const pdfToText = (await import("react-pdftotext")).default;

    const text = await pdfToText(file);

    setResume(text);
  } catch (error) {
    console.error(error);
    alert("Unable to extract text from PDF.");
  }
};
  const handleAnalyze = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resumeText: resume,
            jobDescription: jd,
          }),
        },
      );

      const data = await response.json();

      console.log(data);

      setAnalysis(data);
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Resume Analyzer</span>

          <h1 className={styles.title}>
            Get your <span className={styles.titleGradient}>AI report</span> in
            seconds
          </h1>

          <p className={styles.subtitle}>
            Upload or paste your resume, drop in the job description, and let
            HireMind AI do the rest.
          </p>
        </div>

        {/* Main Panel */}
        <div className={styles.panel}>
          <div className={styles.grid}>
            {/* Resume */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                  <FileText size={16} className={styles.iconCyan} />
                  <h2>Resume</h2>
                </div>

                <label className={styles.uploadBtn}>
                  <Upload size={14} />
                  Upload .pdf
                  {/* <input
                    type="file"
                    accept=".pdf"
                    className={styles.hiddenInput}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];

                      if (file) {
                        const text = await file.text();

                        setResume(text);
                      }
                    }}
                  /> */}
                  <input
                    type="file"
                    accept=".pdf"
                    className={styles.hiddenInput}
                    onChange={handleUpload}
                  />
                </label>
              </div>

              <textarea
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                placeholder="Paste your resume text here..."
                className={styles.textarea}
              />

              <p className={styles.counter}>{resume.length} chars (min 50)</p>
            </section>

            {/* Job Description */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>
                  <Briefcase size={16} className={styles.iconPurple} />
                  <h2>Job Description</h2>
                </div>
              </div>

              <textarea
                value={jd}
                onChange={(e) => setJd(e.target.value)}
                placeholder="Paste the job description here..."
                className={styles.textarea}
              />

              <p className={styles.counter}>{jd.length} chars (min 20)</p>
            </section>
          </div>

          {/* Button */}
          <div className={styles.footer}>
            <p className={styles.notice}>
              Your inputs are sent securely to our AI for analysis.
            </p>

            <button
              disabled={!canAnalyze || loading}
              className={styles.cta}
              onClick={handleAnalyze}
            >
              <Sparkles size={16} />

              {loading ? "Analyzing..." : "Analyze with AI"}
            </button>
          </div>
        </div>

        {/* Result Section */}
        {analysis && (
          // <div
          //   style={{
          //     marginTop: "2rem",
          //     padding: "1.5rem",
          //     border: "1px solid #2a2a2a",
          //     borderRadius: "12px",
          //     background: "#111",
          //   }}
          // >
          //   <h2
          //     style={{
          //       marginBottom: "1rem",
          //     }}
          //   >
          //     AI Analysis Result
          //   </h2>

          //   <pre
          //     style={{
          //       whiteSpace: "pre-wrap",
          //       wordBreak: "break-word",
          //       color: "#ddd",
          //     }}
          //   >
          //     {JSON.stringify(analysis, null, 2)}
          //   </pre>
          // </div>
          <>
            <AIPreview analysis={analysis.data} />
            <InterviewPrep analysis={analysis.data} />
          </>
        )}
      </div>

      <br />
      <br />
    </main>
  );
}
